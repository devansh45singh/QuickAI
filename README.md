# QuickAI - AI-Powered Content Creation Platform

QuickAI is a comprehensive AI-powered platform that provides various content creation and image manipulation tools. Built with modern web technologies, it offers a seamless experience for users to generate articles, create images, remove backgrounds, and much more.

## 🚀 Features

### AI Content Tools
- **AI Article Writer** - Generate high-quality, engaging articles on any topic
- **Blog Title Generator** - Create catchy, SEO-friendly blog titles
- **Resume Reviewer** - AI-powered resume analysis and improvement suggestions

### AI Image Tools
- **AI Image Generation** - Create stunning visuals with AI
- **Background Removal** - Effortlessly remove backgrounds from images
- **Object Removal** - Remove unwanted objects from images seamlessly

### Additional Features
- **User Authentication** - Secure login/signup with Clerk
- **Dashboard** - Personalized user dashboard
- **Community** - Connect with other users
- **Usage Tracking** - Monitor your AI tool usage
- **Subscription Plans** - Free and Premium tiers

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Clerk React** - Authentication and user management
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Elegant notifications
- **React Markdown** - Markdown rendering
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **OpenAI/Gemini API** - AI content generation
- **Cloudinary** - Image processing and storage
- **Clerk Express** - Backend authentication
- **NeonDB** - PostgreSQL database
- **Multer** - File upload middleware
- **PDF Parse** - PDF document processing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (NeonDB recommended)
- Clerk account for authentication
- OpenAI/Gemini API key
- Cloudinary account

### Environment Variables

Create `.env` files in both client and server directories:

#### Client `.env`
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

#### Server `.env`
```env
PORT=3000
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=your_neon_database_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/devansh45singh/QuickAI.git
   cd QuickAI
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables**
   - Create `.env` files in both client and server directories
   - Add the required environment variables as shown above

5. **Set up the database**
   - Create a NeonDB PostgreSQL database
   - Run the database migrations (if any)

6. **Start the development servers**

   **Terminal 1 - Start the backend server:**
   ```bash
   cd server
   npm run server
   ```

   **Terminal 2 - Start the frontend client:**
   ```bash
   cd client
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

## 🏗️ Project Structure

```
QuickAI/
├── client/                    # Frontend React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/           # Images, icons, and asset configurations
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # App entry point
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
├── server/                   # Backend Node.js application
│   ├── configs/              # Configuration files
│   ├── controllers/          # Route controllers
│   ├── middlewares/          # Custom middleware
│   ├── routes/               # API routes
│   ├── package.json          # Backend dependencies
│   └── server.js             # Server entry point
└── README.md                 # Project documentation
```

## 🔧 Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `npm run server` - Start development server with nodemon
- `npm start` - Start production server

## 🌐 API Endpoints

### AI Routes (`/api/ai`)
- `POST /generate-article` - Generate AI article
- `POST /generate-blog-titles` - Generate blog titles
- `POST /generate-images` - Generate AI images
- `POST /remove-background` - Remove image background
- `POST /remove-object` - Remove object from image
- `POST /review-resume` - Review resume with AI

### User Routes (`/api/user`)
- User management and profile endpoints

## 💡 Usage

1. **Sign up/Login** using Clerk authentication
2. **Choose an AI tool** from the dashboard
3. **Provide input** (text prompts, images, etc.)
4. **Generate content** using AI
5. **Download or save** your results

## 🔒 Authentication

This project uses [Clerk](https://clerk.com/) for authentication, providing:
- Secure user registration and login
- Social login options
- User profile management
- Session management

## 📊 Subscription Plans

- **Free Tier**: Limited usage (10 free operations)
- **Premium Tier**: Unlimited usage of all AI tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team

## 🚀 Deployment

The project is configured for deployment on Vercel with `vercel.json` files in both client and server directories.

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy both frontend and backend

---

**Built with ❤️ by the QuickAI Team**
