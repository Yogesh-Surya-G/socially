# Socially

A modern social media platform built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Features

- User authentication with Next-Auth
- Create, read, update and delete posts
- Follow/unfollow users
- Like and comment on posts
- User profiles
- Real-time notifications
- Responsive design

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS for styling
- MongoDB & Prisma for database
- Next-Auth for authentication
- React Query for data fetching
- Upload Thing for file uploads

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/socially.git
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

## Project Structure

```
socially/
├── app/               # Next.js app directory
├── components/        # Reusable UI components
├── lib/              # Utility functions and configurations
├── prisma/           # Database schema and migrations
└── public/           # Static assets
```

## License 📄

This project is licensed under the MIT License. ⚖️
