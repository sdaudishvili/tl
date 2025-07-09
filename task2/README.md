# Task 2: Journey Planner Full-Stack Application

## Overview

This is a full-stack web application for managing travel journeys. The project consists of a **Node.js/TypeScript backend API** and a **React/TypeScript frontend** that work together to provide journey planning functionality.

## Project Structure

```
task2/
├── api/                    # Backend API (Node.js + TypeScript + Express)
│   ├── src/
│   │   ├── app.ts          # Main application entry point
│   │   ├── controllers/    # Route handlers
│   │   ├── services/       # Business logic
│   │   ├── helpers/        # Utility functions
│   │   ├── routes/         # API route definitions
│   │   └── types/          # TypeScript type definitions
│   └── package.json
├── web/                    # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── App.tsx         # Main React component
│   │   ├── components/     # Reusable UI components
│   │   └── index.tsx       # Application entry point
│   └── package.json
└── README.md              # This file
```

## Features

### Backend API (`/api`)
- **Express.js** server with **TypeScript**
- **Journey Management** endpoints:
  - `POST /journeys` - Create a new journey
  - `GET /journeys` - Retrieve all journeys
- **Journey Model**: Contains `id`, `origin`, `destination`, and `duration` fields

### Frontend (`/web`)
- **React 19** with **TypeScript**
- **Journey Planner** interface

## Setup Instructions

### 1. Backend Setup

Navigate to the API directory and install dependencies:

```bash
cd api
npm install
```

### 2. Frontend Setup

Navigate to the web directory and install dependencies:

```bash
cd web
npm install
```

## Running the Application

### Start the Backend API

```bash
cd api
npm run dev
```

The API server will start on `http://localhost:3001`

### Start the Frontend

In a new terminal:

```bash
cd web
npm start
```

The React application will start on `http://localhost:3000`

## API Endpoints

### Journey Management

#### Create Journey
```http
POST /journeys
Content-Type: application/json

{
  "origin": "New York",
  "destination": "Los Angeles"
}
```

#### Get All Journeys
```http
GET /journeys
```

Response:
```json
[
  {
    "id": "uuid-here",
    "origin": "New York",
    "destination": "Los Angeles",
    "duration": 360 //in minutes
  }
]
```

## Task Requirements

### Current Implementation Status
- ✅ Backend API structure and endpoints (may have some issues to fix)
- ✅ Frontend React application structure
- ✅ Journey data model and types
- ✅ Modal component structure (needs implementation)
- ⚠️ **Frontend-Backend integration** - Not yet connected
- ⚠️ **Journey creation form in modal** - Not implemented
- ⚠️ **Journey table display** - Not implemented

### Primary Focus: Frontend Development

Your main task is to create a functional journey planner interface with the following core features:

#### 1. **Journey Creation Modal** (PRIORITY)
   - Use the existing Modal component to create a journey form
   - Form should have fields for:
     - **Origin** (text input)
     - **Destination** (text input)
   - Submit button to create journey via API call
   - Cancel/close functionality

#### 2. **Journey Display Table** (PRIORITY)
   - Create a table to display all journeys
   - Table columns should include:
     - **Origin**
     - **Destination** 
     - **Duration** (in minutes) format should be HH:MM
     - **ID** (optional)
   - Load journeys from API on component mount
   - Refresh table after new journey creation
   - Handle empty state (no journeys)

#### 3. **User Experience Enhancements**
   - "Add new journey" button should open the modal
   - Form should clear after successful submission

### Expected User Flow
1. User sees a table (initially empty or with existing journeys)
2. User clicks "Add new journey" button
3. Modal opens with a form (Origin + Destination fields)
4. User fills out form and submits
5. Journey is created via API call
6. Modal closes and table refreshes to show new journey
7. User can repeat process to add more journeys

### Optional Features
  - Add loading indicators during API requests
  - Show error messages for failed API calls
  - Display success message after journey creation




**Good luck with your implementation!** 🚀
