const EventQueue = require("./eventQueue");

describe("EventQueue", () => {
  let queue;

  beforeEach(() => {
    queue = new EventQueue();
  });

  describe("constructor", () => {
    test("should initialize empty queue", () => {
      expect(queue.size()).toBe(0);
    });
  });

  describe("push", () => {
    test("should add single event to queue", () => {
      queue.push("event1");
      expect(queue.size()).toBe(1);
    });

    test("should add multiple events", () => {
      queue.push("event1");
      queue.push("event2");
      queue.push("event3");
      expect(queue.size()).toBe(3);
    });

    test("should handle different data types", () => {
      queue.push("string");
      queue.push(42);
      queue.push({ type: "object" });
      queue.push(null);
      expect(queue.size()).toBe(4);
    });
  });

  describe("pop", () => {
    test("should return null when queue is empty", () => {
      expect(queue.pop()).toBeNull();
    });

    test("should return and remove first event (FIFO)", () => {
      queue.push("first");
      queue.push("second");

      const result = queue.pop();
      expect(result).toBe("first");
      expect(queue.size()).toBe(1);
    });

    test("should maintain FIFO order", () => {
      queue.push("event1");
      queue.push("event2");
      queue.push("event3");

      expect(queue.pop()).toBe("event1");
      expect(queue.pop()).toBe("event2");
      expect(queue.pop()).toBe("event3");
      expect(queue.size()).toBe(0);
    });

    test("should return null after all events are popped", () => {
      queue.push("only event");
      queue.pop();

      expect(queue.pop()).toBeNull();
      expect(queue.size()).toBe(0);
    });
  });

  describe("batchPush", () => {
    test("should add multiple events at once", () => {
      queue.batchPush(["event1", "event2", "event3"]);
      expect(queue.size()).toBe(3);
    });

    test("should maintain order in batch push", () => {
      queue.batchPush(["first", "second", "third"]);

      expect(queue.pop()).toBe("first");
      expect(queue.pop()).toBe("second");
      expect(queue.pop()).toBe("third");
    });

    test("should handle empty array", () => {
      queue.batchPush([]);
      expect(queue.size()).toBe(0);
    });

    test("should work with mixed single and batch pushes", () => {
      queue.push("single1");
      queue.batchPush(["batch1", "batch2"]);
      queue.push("single2");

      expect(queue.size()).toBe(4);
      expect(queue.pop()).toBe("single1");
      expect(queue.pop()).toBe("batch1");
      expect(queue.pop()).toBe("batch2");
      expect(queue.pop()).toBe("single2");
    });

    test("should handle different data types in batch", () => {
      queue.batchPush(["string", 123, { obj: "value" }, null]);
      expect(queue.size()).toBe(4);

      expect(queue.pop()).toBe("string");
      expect(queue.pop()).toBe(123);
      expect(queue.pop()).toEqual({ obj: "value" });
      expect(queue.pop()).toBeNull();
    });
  });

  describe("size", () => {
    test("should return 0 for empty queue", () => {
      expect(queue.size()).toBe(0);
    });

    test("should return correct size after operations", () => {
      expect(queue.size()).toBe(0);

      queue.push("event1");
      expect(queue.size()).toBe(1);

      queue.push("event2");
      expect(queue.size()).toBe(2);

      queue.pop();
      expect(queue.size()).toBe(1);

      queue.batchPush(["event3", "event4"]);
      expect(queue.size()).toBe(3);

      queue.pop();
      queue.pop();
      queue.pop();
      expect(queue.size()).toBe(0);
    });
  });

  describe("integration tests", () => {
    test("should handle complex sequence of operations", () => {
      expect(queue.size()).toBe(0);
      expect(queue.pop()).toBeNull();

      queue.push("first");
      queue.batchPush(["second", "third"]);
      expect(queue.size()).toBe(3);

      expect(queue.pop()).toBe("first");
      expect(queue.size()).toBe(2);

      queue.push("fourth");
      queue.batchPush(["fifth", "sixth"]);
      expect(queue.size()).toBe(5);

      expect(queue.pop()).toBe("second");
      expect(queue.pop()).toBe("third");
      expect(queue.pop()).toBe("fourth");
      expect(queue.pop()).toBe("fifth");
      expect(queue.pop()).toBe("sixth");
      expect(queue.size()).toBe(0);
      expect(queue.pop()).toBeNull();
    });

    test("should handle alternating push and pop", () => {
      queue.push("event1");
      expect(queue.pop()).toBe("event1");
      expect(queue.size()).toBe(0);

      queue.push("event2");
      queue.push("event3");
      expect(queue.pop()).toBe("event2");
      expect(queue.size()).toBe(1);

      queue.push("event4");
      expect(queue.pop()).toBe("event3");
      expect(queue.pop()).toBe("event4");
      expect(queue.size()).toBe(0);
    });
  });

  describe("edge cases", () => {
    test("should handle large number of operations", () => {
      const events = [];
      for (let i = 0; i < 1000; i++) {
        events.push(`event${i}`);
      }

      queue.batchPush(events);
      expect(queue.size()).toBe(1000);

      for (let i = 0; i < 1000; i++) {
        expect(queue.pop()).toBe(`event${i}`);
      }

      expect(queue.size()).toBe(0);
      expect(queue.pop()).toBeNull();
    });

    test("should handle falsy values correctly", () => {
      queue.push(0);
      queue.push("");
      queue.push(false);
      queue.push(null);
      queue.push(undefined);

      expect(queue.size()).toBe(5);
      expect(queue.pop()).toBe(0);
      expect(queue.pop()).toBe("");
      expect(queue.pop()).toBe(false);
      expect(queue.pop()).toBeNull();
      expect(queue.pop()).toBeUndefined();
      expect(queue.size()).toBe(0);
      expect(queue.pop()).toBeNull();
    });
  });
});
