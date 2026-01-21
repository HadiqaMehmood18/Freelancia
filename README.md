# Freelancia - Student Freelancing Platform

A full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) designed specifically for university students to connect, collaborate, and engage in freelance work within their academic community.

## 🚀 Live Demo
**Platform URL:** [https://freelandia.vercel.app](https://freelancia.vercel.app)

## 📖 Overview

Freelancia is a student-focused freelance marketplace that enables university students to:
- **Offer freelance services** to their peers
- **Find and apply** for short-term tasks and internships
- **Communicate in real-time** with task posters
- **Build professional profiles** with ratings and feedback
- **Manage applications** and track progress

## 🛠️ Tech Stack

### **Frontend**
- React.js with JSX
- React Router for navigation
- Redux for state management
- CSS with Flexbox/Grid for responsive design
- React Toastify for notifications

### **Backend**
- Node.js with Express.js
- RESTful API architecture
- JWT (JSON Web Tokens) for authentication
- Socket.io for real-time messaging
- Body-parser for request handling
- CORS for cross-origin requests

### **Database**
- MongoDB with Mongoose ODM
- Cloud hosting via MongoDB Atlas
- Schema-based data modeling

### **Deployment & Tools**
- Vercel for frontend hosting
- GitHub for version control
- Postman for API testing
- Environment variables for configuration

## ✨ Key Features

### **User Authentication & Security**
- Secure login/registration with JWT
- Role-based access (Freelancer/Client)
- Input validation and error handling
- Protected routes and sessions

### **Freelancer Dashboard**
- **Service Management**: Create, edit, and delete offered services
- **Revenue Tracking**: View total earnings and completed orders
- **Rating System**: Display average rating from client feedback
- **Application Tracking**: Monitor application status for applied tasks
- **Profile Management**: Update personal info, skills, and portfolio

### **Client Dashboard**
- **Job Posting**: Create detailed task listings with descriptions
- **Applicant Management**: Review and manage freelancer applications
- **Order Tracking**: Monitor ongoing and completed projects
- **Messaging System**: Communicate directly with freelancers

### **Real-Time Communication**
- **Socket.io Integration**: Instant messaging between users
- **Chat Interface**: Clean, responsive messaging UI
- **Message History**: Persistent conversation storage
- **Online Status**: Real-time user availability

### **Responsive Design**
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Intuitive navigation and user flows
- Consistent branding and UI components

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/freelancia.git
cd freelancia
```

2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Configure Environment Variables**
Create a `.env` file in the backend directory:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. **Frontend Setup**
```bash
cd ../frontend
npm install
```

5. **Run the Application**
```bash
# Start backend (from backend directory)
npm start

# Start frontend (from frontend directory)
npm start
```

6. **Access the Application**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 📱 Pages & Components

### **Home Page (`Home.jsx`)**
- Hero section with platform introduction
- Service categories display
- About Us and Contact Us sections
- Animated intro component for engaging UX
<img width="1088" height="545" alt="image" src="https://github.com/user-attachments/assets/b1390f33-bc00-48b4-947d-740edb2683a6" /><img width="1087" height="559" alt="image" src="https://github.com/user-attachments/assets/8230a01c-6cf0-43f9-9592-c3c478c439f3" />
<img width="1113" height="569" alt="image" src="https://github.com/user-attachments/assets/1e09542b-41d6-493e-947c-f893948e8e6a" />
<img width="1087" height="616" alt="image" src="https://github.com/user-attachments/assets/c86ba529-5879-4326-891e-3ec768112fc8" />
<img width="1087" height="565" alt="image" src="https://github.com/user-attachments/assets/ee10c6ed-5bda-4eb0-9876-4674bb5794d2" />
<img width="1112" height="619" alt="image" src="https://github.com/user-attachments/assets/407b2a59-2e67-46b7-8b13-2f72d44aa0c9" />

### **Authentication (`Login.jsx`)**
- Secure login form with validation
- JWT token management
- Redux integration for state persistence
- Role-based redirection after login

### **Chat System (`Chat.jsx`)**
- Real-time messaging interface
- Conversation list with user avatars
- Message history display
- Socket.io event handling

### **Freelancer Dashboard**
- Service creation and management
- Revenue and order statistics
- Client feedback display
- Application status tracking

### **Client Dashboard**
- Job posting interface
- Applicant review system
- Project management tools
- Freelancer communication

**Workflow**
<img width="1114" height="628" alt="image" src="https://github.com/user-attachments/assets/b40a1cfb-ea37-4dd6-8bac-47102112b878" />

## 🔒 Security Features

- **JWT Authentication**: Secure token-based sessions
- **Input Validation**: Server-side and client-side validation
- **CORS Configuration**: Controlled cross-origin requests
- **Environment Variables**: Sensitive data protection
- **Secure File Uploads**: Protected file handling
- **Password Requirements**: Minimum 8 characters with validation


## 🚀 Deployment

### **Frontend (Vercel)**
```bash
npm run build
vercel --prod
```

### **Backend (Render/Railway)**
- Configure environment variables
- Set build command: `npm install`
- Set start command: `npm start`

## 👥 Contributors

- **Hadiqa Mehmood** (02-235232-007) 
- **Mahnoor Sharif** (02-235232-001) 
- **Hamza Imran** (02-235232-052) 

## 📚 Academic Information

- **Course**: Web System and Technology (ITL-226)
- **Program**: BS(IT)-4(A)
- **University**: Bahria University Karachi Campus
- **Department**: Computer Science
- **Instructor**: Engr. Gul Saba
- **Submission Date**: 30-MAY-2025

## 🔮 Future Enhancements

1. **Mobile Application** - React Native/Flutter app
2. **Advanced Search** - Fuzzy search and NLP integration
3. **Recommendation System** - AI-based job matching
4. **Social Features** - User networking and portfolios
5. **Admin Dashboard** - Analytics and platform management
6. **Payment Integration** - Secure payment processing
7. **Video Calls** - Integrated video interviews
8. **Portfolio Builder** - Enhanced profile customization

---

**⭐ Freelancia - Empowering Students Through Freelance Opportunities**




