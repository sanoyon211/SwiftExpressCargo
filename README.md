# 🚀 Swift Express

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.40.0-black?style=for-the-badge&logo=framer)

Welcome to **Swift Express**, a modern, blazing-fast web application built with the latest web technologies. This project is designed for optimal performance, smooth animations, and a seamless user experience, featuring everything from parcel tracking and cost calculation to interactive blogs and e-commerce functionalities.

## ✨ Key Features

- **⚡ Next.js App Router**: Utilizing the latest Next.js features for server-side rendering, routing, and optimized performance.
- **🎨 Tailwind CSS v4**: A highly customizable, utility-first CSS framework for rapid and responsive UI development.
- **🪄 Fluid Animations**: Powered by `framer-motion` for smooth page transitions and micro-interactions.
- **🌓 Dark Mode Ready**: Fully integrated theming with `next-themes` and a custom `ThemeProvider`.
- **📦 Comprehensive Services**: Includes modules for Parcel Tracking, Cost Calculation, Rates, and varied logistical services.
- **🛍️ E-Commerce & Blog**: Integrated shop system and a dynamic blog to keep users engaged.
- **📝 Form Validation**: Robust form handling with `react-hook-form` and `zod` schema validation.
- **🔔 Toast Notifications**: Beautiful, responsive toast notifications via `sonner`.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16.2.9)
- **Library**: [React](https://react.dev/) (v19.2.4)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Typography**: [@fontsource/inter](https://fontsource.org/fonts/inter)

## 📂 Project Structure

```text
Swift_express/
├── public/                 # Static assets (images, icons, etc.)
└── src/
    ├── app/                # Next.js App Router (pages & layouts)
    │   ├── about/
    │   ├── blog/
    │   ├── contact/
    │   ├── cost-calculator/
    │   ├── dashboard/
    │   ├── rates/
    │   ├── services/
    │   ├── shop/
    │   ├── signin/
    │   ├── signup/
    │   └── tracking/
    ├── components/         # Reusable React components
    │   ├── home/           # Homepage specific components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ThemeProvider.jsx
    │   └── ...
    └── data/               # Mock data / Static data
        └── blogPosts.js
```

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Swift_express
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint to catch and fix code issues.

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request if you'd like to improve the project.

## 📝 License

This project is licensed under the [MIT License](LICENSE).
