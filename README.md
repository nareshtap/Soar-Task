# Soar Task

This is a frontend project built with React and Vite. It includes various libraries and tools for state management, routing, charts, and more. Below is an overview of the project setup and instructions for development.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Features](#features)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher is recommended)
- npm (v8 or higher) or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd soar-task
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Available Scripts

### `npm run dev`

Starts the development server using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the project for production. This script uses TypeScript to compile the project and Vite to bundle it.

### `npm run lint`

Runs ESLint to check for code issues.

### `npm run preview`

Previews the production build locally using Vite.

## Dependencies

### Core Libraries

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods for React.

### State Management

- **@reduxjs/toolkit**: Simplifies Redux state management.
- **React Redux**: Official bindings for React and Redux.

### Routing

- **React Router DOM**: Enables routing in your React application.

### Charts

- **Highcharts**: Advanced charting library.
- **Highcharts React Official**: Official React wrapper for Highcharts.

### UI/UX

- **React Toastify**: Adds toast notifications to your app.
- **React Icons**: Provides popular icon packs as React components.
- **React Slick**: A carousel component for React.
- **Slick Carousel**: Required dependency for React Slick.
- **@tippyjs/react**: Tooltip library for React.

### HTTP Requests

- **Axios**: Promise-based HTTP client for the browser and Node.js.

### Mock API

- **express Server**: Provides a simple way to create a fake REST API.

## DevDependencies

### Tools

- **Vite**: Next-generation frontend tooling.
- **TypeScript**: Typed JavaScript.
- **ESLint**: Linting utility for JavaScript and TypeScript.
- **TailwindCSS**: Utility-first CSS framework.

### Plugins

- **@vitejs/plugin-react**: Official React plugin for Vite.
- **eslint-plugin-react-hooks**: Enforces rules of React Hooks.
- **eslint-plugin-react-refresh**: Improves React fast refresh experience in development.

### Typings

- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **@types/react-slick**: TypeScript definitions for React Slick.

### PostCSS

- **Autoprefixer**: Adds vendor prefixes to CSS rules.
- **PostCSS**: A tool for transforming CSS with JavaScript.

## Features

- Modern development setup with Vite and React.
- State management using Redux Toolkit.
- Routing with React Router.
- Advanced charting with Highcharts and Chart.js.
- Responsive UI with TailwindCSS.
- Toast notifications and tooltips for enhanced user experience.
- Mock API setup with JSON Server.
