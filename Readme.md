# Syntrix AI

Syntrix is a modern AI platform  designed to help users research, code, analyze documents, work with images  from a single chat .

## Overview

The platform is built around multiple specialized AI agents that can work with:

- Search and research queries
- Code generation and code assistance
- PDF analysis and summary extraction
- Image and vision-based understanding
- PPT/report generation
- Subscription-based access via Razorpay

Syntrix is designed for a smooth full-stack flow: users log in, chat with an AI agent, save conversation context, and optionally generate artifacts such as PDFs, presentations, or analysis outputs.

## Key Features

- Multi-agent AI experience in one interface
- Google login support using Firebase authentication
- Secure API gateway with protected routes
- Persistent chat and conversation history
- PDF, image, and document processing support
- Code generation and coding workflow assistance
- AI-generated presentation and report artifacts
- Razorpay billing and plan management
- MongoDB + Redis + cloud storage integration

## Screenshots

### Landing page

![Syntrix homepage](./screenshots/homepage.png)

### Chat workspace

![Syntrix chat page](./screenshots/ChatPage.png)

### Search agent

![Search agent](./screenshots/SearchAgent.png)

### Coding agent

![Coding agent](./screenshots/CodingAgent.jpg)

### PDF agent

![PDF agent](./screenshots/PdfAgent.png)

### Image agent

![Image agent](./screenshots/ImageAgent.png)

### Razorpay billing flow

![Billing page](./screenshots/RazorpayGateway.png)


## Tech Stack

### Frontend
- React
- Vite
- Redux Toolkit
- Tailwind CSS
- Firebase for login
- Axios for API calls

### Backend
- Node.js
- Express
- MongoDB via Mongoose
- Redis
- AWS S3 for file uploads/artifacts
- Razorpay for payments
- AI agent services with LangChain and model integrations


### Prerequisites

Before running the app, make sure you have:

- Node.js 18+ installed
- MongoDB instance running
- Redis running
- Firebase project credentials
- AWS S3 bucket and access keys
- Razorpay API keys
- AI provider API keys (for agent features)

### 1) Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on the default Vite port, usually:

- http://localhost:5173

### 2) Backend gateway

```bash
cd backend/gateway
npm install
npm run dev
```

### 3) Auth service

```bash
cd backend/services/auth
npm install
npm run start
```

### 4) Chat service

```bash
cd backend/services/chat
npm install
npm run dev
```

### 5) Agent service

```bash
cd backend/services/agent
npm install
npm run dev
```

### 6) Billing service

```bash
cd backend/services/billing
npm install
npm run start
```

## Environment Variables

Create environment files for each service as needed. Example keys include:

```env
# frontend/.env
VITE_SERVER_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

```env
# backend/gateway/.env
PORT=5000
FRONTEND_URL=http://localhost:5173
AUTH_SERVICE=http://localhost:4001
CHAT_SERVICE=http://localhost:4002
AGENT_SERVICE=http://localhost:4003
BILLING_SERVICE=http://localhost:4004
```

```env
# backend/services/auth/.env
PORT=4001
MONGODB_URI=mongodb://localhost:27017/syntrix-auth
FIREBASE_PROJECT_ID=your_project_id
```

```env
# backend/services/agent/.env
PORT=4003
MONGODB_URI=mongodb://localhost:27017/syntrix-agent
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_REGION=your_region
AWS_BUCKET_NAME=your_bucket
QDRANT_URL=your_qdrant_url
CHAT_SERVICE=http://localhost:4002
AUTH_SERVICE=http://localhost:4001
```

##  Use Cases

- Research and summarize information from prompts and web-style context
- Ask coding questions and generate code snippets
- Upload PDFs and extract key insights
- Analyze images or screenshots with AI vision
- Create presentation-ready outputs and reports
- Manage premium access and subscriptions with billing integration


