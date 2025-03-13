<div align="center">

# 🌟 Socially

[![](https://img.shields.io/badge/NEXT.JS-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![](https://img.shields.io/badge/POSTGRESQL-4169E1?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![](https://img.shields.io/badge/TAILWIND-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern full-stack social media platform that brings people together! 🚀

**🌐 [Try it live on Vercel](https://besocially.vercel.app/)**

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

## 📁 Project Structure

```
socially/
├── 📱 app/           # Next.js app directory
├── 🧩 components/    # Reusable UI components
├── 🛠️ lib/          # Utility functions and configs
├── 💾 prisma/       # Database schema and migrations
└── 📂 public/       # Static assets
```

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
DATABASE_URL="your_postgresql_url"
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

## 🛠️ Tech Stack

### Frontend
- ⚡ Next.js 15 with App Router
- 📘 TypeScript for type safety
- 🎨 Tailwind CSS for modern styling
- 🔄 React Query for efficient data fetching

### Backend
- 🗄️ PostgreSQL for database
- 🚀 Prisma as ORM
- 🔑 Next-Auth for authentication
- 📤 Upload Thing for file management

<div align="center">

Made with ❤️ by [Yogesh Surya](https://github.com/Yogesh-Surya-G)

</div>
