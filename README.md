# 🚀 Interactive Dashboard — Frontend Skill Test

This project is a responsive and interactive dashboard built using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, visualizing data from [DummyJSON](https://dummyjson.com) API.

Features include:
- 📊 Charts with ApexCharts
- 🔍 Product filtering, sorting, and search
- 🍔 Recipes categorized by meal type
- 🛒 Carts total analytics
- 🧱 Responsive layout with mobile optimization
- 🐳 Docker-ready deployment setup

## 📸 Preview
![alt text](https://github.com/muslim2210/next-dummyjson-store/blob/master/public/dashboard.png?raw=true)

---

## 🔧 Tech Stack

- [Next.js 15](https://nextjs.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [ApexCharts](https://apexcharts.com/)
- TypeScript
- Docker + Docker Compose

---

## 📦 Project Structure
src/
├── app/ # App Router pages
├── components/ # Reusable UI & dashboard components
├── lib/ # Data fetching hooks
├── types/ # Type definitions (Product, Cart, etc.)
├── styles/ # Global styles
public/ # Static assets
Dockerfile
docker-compose.yml

---

## 🚀 Getting Started (Local)

1. **Install dependencies:**

```bash
npm install
npm run dev
Open http://localhost:3000


## 🐳 Run with Docker Compose

```bash
docker compose up --build

Note: API calls use NEXT_PUBLIC_API_URL=https://dummyjson.com

📊 Dashboard Sections
📦 Products: With category chart, rating distribution, search, sort, and pagination
🛒 Carts: Total and discounted total comparison (Top 10)
📄 Posts: Count of published articles
🍳 Recipes: Meal type distribution chart
📁 Environment Variables
Create .env.local (optional):
NEXT_PUBLIC_API_URL=https://dummyjson.com


✅ Task Checklist
 Product listing + filtering
 Carts analytics (top 10)
 Posts count
 Recipes chart by meal type
 Dashboard cards with icons/colors
 Docker Compose support
 Responsive layout for mobile/tablet



👨‍💻 Author
Bukhori Muslim
(Submitted as part of technical test)