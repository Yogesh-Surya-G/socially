<div align="center">

# 🌟 Socially

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-cyan?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern full-stack social media platform that brings people together! 🚀

**🌐 [Try it live on Vercel](https://socially-demo.vercel.app)**

> ✨ Feel free to register and start using the platform! The app is fully functional and ready for real users.

</div>

## Features

- User authentication with Next-Auth
- Create, read, update and delete posts
- Follow/unfollow users
- Like and comment on posts
- User profiles
- Real-time notifications
- Responsive design

## 🛠️ Full Stack Tech Stack

### Frontend
- ⚡ Next.js 15 with App Router
- 📘 TypeScript for type safety
- 🎨 Tailwind CSS for modern styling
- 🔄 React Query for efficient data fetching

### Backend
- 🗄️ MongoDB for database
- 🚀 Prisma as ORM
- 🔑 Next-Auth for authentication
- 📤 Upload Thing for file management

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Yogesh-Surya-G/socially.git
cd socially
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add:
```
DATABASE_URL="your_mongodb_url"
NEXTAUTH_SECRET="your_secret"
NEXTAUTH_URL="http://localhost:3000"
UPLOADTHING_SECRET="your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
socially/
├── 📱 app/           # Next.js app directory
├── 🧩 components/    # Reusable UI components
├── 🛠️ lib/          # Utility functions and configs
├── 💾 prisma/       # Database schema and migrations
└── 📂 public/       # Static assets
```

<div align="center">

Made with ❤️ by [Yogesh Surya](https://github.com/Yogesh-Surya-G)

</div>
