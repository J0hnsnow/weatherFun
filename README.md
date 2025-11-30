# 🌤️ Weather API Explorer – A Beginner's Toolkit

A beautiful, beginner-friendly web application that demonstrates API integration, error handling, and creative UI/UX design. Built with React, TypeScript, and the OpenWeather API.

![Weather Explorer](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-blue)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to Run the App](#how-to-run-the-app)
- [How to Add Your Own API Key](#how-to-add-your-own-api-key)
- [All Features](#all-features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [AI Prompt Journal](#ai-prompt-journal)
- [Common Issues & Fixes](#common-issues--fixes)
- [References](#references)

---

## 🎯 Overview

The **Weather API Explorer** is an interactive web application designed to help beginners learn API integration, error handling, and modern web development practices. This project showcases:

- **Real-world API integration** with OpenWeather API
- **Comprehensive error handling** (401 Unauthorized, 404 Not Found, Network Errors)
- **Creative UI elements** including weather emojis, fashion suggestions, and random jokes
- **Responsive design** with smooth animations
- **Best practices** for React, TypeScript, and API development

### Learning Objectives

✅ Understand how to fetch data from external APIs  
✅ Handle different types of API errors gracefully  
✅ Implement environment variables for secure API key management  
✅ Create responsive and accessible user interfaces  
✅ Deploy web applications to production  

---

## ✨ Features

### Core Functionality
- 🌍 **Real-time Weather Data** - Fetch current weather for any city worldwide
- 🎨 **Weather Emojis** - Visual weather conditions (☀️ sunny, 🌧️ rainy, ☁️ cloudy, etc.)
- 👕 **Fashion Suggestions** - AI-powered outfit recommendations based on weather
- 😄 **Weather Jokes** - Fun weather-related jokes displayed with each search
- 😂 **Random Jokes** - Integrated joke API for entertainment
- 📊 **Detailed Metrics** - Temperature, humidity, wind speed, and conditions

### Technical Features
- ⚡ **Fast & Responsive** - Built with Vite for instant hot-reload
- 🎭 **Smooth Animations** - Floating clouds and weather transitions
- 🛡️ **Error Handling** - Comprehensive error messages for all scenarios
- 📱 **Mobile-Friendly** - Fully responsive design
- 🔮 **Coming Soon Features** - Wardrobe upload for personalized AI assistance

---

## 🚀 How to Run the App

### Option 1: Using Lovable (Recommended)

1. **Open the project in Lovable**
   - The app is already set up in your Lovable workspace
   - All dependencies are automatically installed

2. **Add your API key** (see [How to Add Your Own API Key](#how-to-add-your-own-api-key))

3. **Click Preview**
   - The app runs automatically in the preview panel
   - Changes are reflected in real-time

4. **Deploy the app** (optional)
   - Click the **Publish** button in the top right
   - Share your live URL with anyone!

### Option 2: Local Development

1. **Prerequisites**
   - Node.js (v18.0.0 or higher)
   - npm (v9.0.0 or higher)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key** (see [How to Add Your Own API Key](#how-to-add-your-own-api-key))

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:8080`

5. **Build for production** (optional)
   ```bash
   npm run build
   npm run preview
   ```

---

## 🔐 How to Add Your Own API Key

### Step 1: Get Your OpenWeather API Key

1. Go to [OpenWeather API](https://openweathermap.org/api)
2. Click **Sign Up** (it's free!)
3. Verify your email address
4. Navigate to **API Keys** in your account dashboard
5. Copy your default API key (or generate a new one)

> ⚠️ **Important**: Free tier allows 60 calls/minute and 1,000,000 calls/month

### Step 2: Add the API Key to Your Project

#### For Lovable Users

1. Open your project in Lovable
2. Go to **Project Settings** → **Environment Variables**
3. Click **Add Variable**
4. Add the following:
   - **Name**: `VITE_OPENWEATHER_API_KEY`
   - **Value**: `your_api_key_here` (paste your actual key)
5. Click **Save**
6. Restart the preview if needed

#### For Local Development

1. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

2. Add your API key to the `.env` file:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

3. Verify `.gitignore` includes `.env`:
   ```gitignore
   # .gitignore
   node_modules
   .env
   .env.local
   dist
   ```

> 🔒 **Security Note**: Never commit your `.env` file to Git. The API key should remain private and is already included in `.gitignore`.

---

## 🎯 All Features

### 1. City Weather Search
- Enter any city name to fetch real-time weather data
- Displays temperature in Celsius
- Shows weather conditions with descriptive text
- Visual weather icons (sun, clouds, rain, snow, etc.)
- Weather emoji indicators

### 2. Weather Metrics
- **Temperature**: Current temperature in °C
- **Humidity**: Percentage of atmospheric moisture
- **Wind Speed**: Wind velocity in m/s
- **Description**: Detailed weather conditions

### 3. Fashion Suggestions 👕
Smart outfit recommendations based on:
- Current temperature
- Weather conditions
- Seasonal considerations

Examples:
- Below 0°C: "🧥 Bundle up! Heavy coat, scarf, gloves, and warm boots essential!"
- 20-28°C: "👕 Comfy weather! T-shirt and light pants or shorts are ideal."
- Above 28°C: "🩳 Hot day! Light, breathable clothes, sunglasses, and stay hydrated!"

### 4. Weather Jokes 😄
- Unique jokes tailored to current weather conditions
- Different jokes for clear, cloudy, rainy, snowy weather
- Adds fun and personality to the app

### 5. Random Joke Generator 😂
- Fetches random jokes from Official Joke API
- Refresh button to get new jokes
- Fallback joke if API is unavailable

### 6. Wardrobe Upload (Coming Soon) 🔮
- Button to upload your wardrobe photos
- AI-powered outfit suggestions based on your clothes
- Currently displays "Coming Soon" notification

### 7. Error Handling ⚠️
Comprehensive error messages for:
- **Missing API Key**: Clear instructions to add the key
- **Invalid API Key (401)**: Prompts to verify the key
- **City Not Found (404)**: Suggests trying a different city
- **Network Errors**: Advises checking internet connection
- **Rate Limit (429)**: Suggests waiting before retrying

### 8. Responsive Design 📱
- Mobile-first approach
- Adapts to all screen sizes
- Smooth animations and transitions
- Floating cloud background elements

---

## 📁 Project Structure

```
weather-api-explorer/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (shadcn)
│   │   ├── WeatherCard.tsx  # Main weather display component
│   │   ├── JokeCard.tsx     # Random joke component
│   │   ├── SearchBar.tsx    # City search input
│   │   └── NavLink.tsx      # Navigation link component
│   ├── pages/
│   │   ├── Index.tsx        # Main page with weather display
│   │   └── NotFound.tsx     # 404 error page
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & design system
├── public/                  # Static assets
├── .env.example             # Example environment variables
├── .gitignore              # Git ignore rules (includes .env)
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── README.md               # This file
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.x** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

### APIs
- **OpenWeather API** - Weather data
- **Official Joke API** - Random jokes

### Tools
- **Git** - Version control
- **npm** - Package management
- **ESLint** - Code linting

---

## 🤖 AI Prompt Journal

### Example Prompts Used

1. **Initial Setup**
   ```
   "Create a weather app using React and TypeScript that fetches data 
   from OpenWeather API and displays it with weather emojis"
   ```

2. **Error Handling**
   ```
   "Add comprehensive error handling for 401 unauthorized, 404 not found, 
   and network errors with user-friendly messages"
   ```

3. **UI Enhancement**
   ```
   "Add smooth animations, floating cloud backgrounds, and a modern 
   gradient design with a sunny color palette"
   ```

4. **Creative Features**
   ```
   "Integrate a random joke API that displays a new joke alongside 
   the weather data for entertainment"
   ```

5. **Fashion Suggestions**
   ```
   "Add fashion suggestions based on weather conditions and temperature. 
   Include a wardrobe upload button that shows 'Coming Soon'"
   ```

6. **Weather Jokes**
   ```
   "Generate weather-related jokes that change based on current conditions 
   (clear, cloudy, rainy, snowy)"
   ```

7. **Documentation**
   ```
   "Create a comprehensive README with installation instructions, 
   API setup guide, and feature documentation"
   ```

8. **Code Comments**
   ```
   "Add detailed comments to all components explaining the code 
   for beginner developers"
   ```

### Reflections

**What worked well:**
- AI helped structure the project with proper component separation
- Error handling suggestions were comprehensive and user-friendly
- Design recommendations created a cohesive, professional look
- Breaking down features into smaller prompts gave better results

**What I learned:**
- Being specific about error types improved error handling quality
- Requesting examples in documentation made setup clearer
- Iterative development with AI produces better results than large requests
- AI can generate creative features (jokes, fashion advice) that enhance UX

**Iterations made:**
- Refined color palette from generic purple to sunny blues/yellows
- Improved error messages to be more actionable
- Added visual feedback (animations) for better UX
- Enhanced features with fashion suggestions and weather jokes
- Added "Coming Soon" functionality for future features

---

## 🔧 Common Issues & Fixes

### Issue: "API Key Missing" error

**Solution:**
- Make sure you've added `VITE_OPENWEATHER_API_KEY` to environment variables
- In Lovable: Project Settings → Environment Variables
- Locally: Create `.env` file with the key
- Restart the dev server after adding the key

### Issue: "Unauthorized" (401) error

**Solution:**
- Verify your API key is correct and active
- Check for extra spaces in the API key
- Generate a new key from OpenWeather if needed
- Wait a few minutes for new keys to activate

### Issue: "City Not Found" (404) error

**Solution:**
- Check spelling of the city name
- Try adding country code: "London,UK"
- Use major city names
- Avoid special characters

### Issue: Network Error

**Solution:**
- Check your internet connection
- Verify OpenWeather API is accessible
- Try again after a few moments
- Check browser console for detailed errors

### Issue: Styles not applying

**Solution:**
```bash
# Rebuild the project
npm run build
npm run dev
```

### Issue: Environment variable not working

**Solution:**
1. Ensure variable starts with `VITE_`
2. Restart dev server after adding variables
3. Check `.env` file is in root directory
4. Verify no typos in variable name

---

## 📚 References

### Documentation
- [OpenWeather API Docs](https://openweathermap.org/api) - Weather API reference

---

## ⬆️ Deploying to Vercel

This project includes a Vercel configuration and a serverless proxy for the OpenWeather API.

### What I added
- `vercel.json` — instructs Vercel how to build the Vite app and exposes `api/` serverless functions.
- `api/weather.ts` — a serverless function that proxies requests to OpenWeather using a server-side `OPENWEATHER_API_KEY` (keep this secret).

### How to set up and deploy

1. Create an account at https://vercel.com and install the Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Set your server-only environment variable in the Vercel dashboard:
   - Key: `OPENWEATHER_API_KEY`
   - Value: your OpenWeather API key

3. (Optional) For local development with `vercel dev`, create a local `.env` file with:
```env
# Local server-only key for the proxy function
OPENWEATHER_API_KEY=your_server_only_key_here

# (Optional) client-visible key for local testing only
VITE_OPENWEATHER_API_KEY=your_client_visible_key_here
```

4. Deploy to Vercel:
```bash
# from the project root
vercel deploy --prod
```

5. The serverless endpoint will be available at `https://<your-deployment>/api/weather?city=London`.

### Security Notes
- Do NOT set `VITE_OPENWEATHER_API_KEY` in production — any `VITE_` prefixed var is embedded in the client bundle and is publicly visible.
- Store the private key as `OPENWEATHER_API_KEY` in your Vercel project settings (Environment Variables) so it is only available to serverless functions.
- Rotate your OpenWeather API key if it was previously embedded in a public repo or client bundle.

If you'd like, I can also add a small GitHub Actions workflow to automatically deploy on push to `main`.

---

## 🛠️ Auto-deploy with GitHub Actions

You can automatically deploy this project to Vercel on every push to `main` using the included GitHub Actions workflow: `.github/workflows/deploy.yml`.

What the workflow does:
- Checks out the repository
- Installs dependencies (`npm ci`)
- Builds the app (`npm run build`)
- Calls the Vercel Action to deploy the build as a production deployment

Required GitHub repository secrets (set these in `Settings → Secrets and variables → Actions`):
- `VERCEL_TOKEN` — a Vercel personal token (create in Vercel account settings)
- `VERCEL_ORG_ID` — your Vercel organization ID (found in Vercel project settings)
- `VERCEL_PROJECT_ID` — your Vercel project ID (found in Vercel project settings)

How to get the values:
1. Sign in to Vercel and open your project dashboard.
2. Go to **Settings → General → Git Integration** to connect the repository if you prefer Vercel's Git integration instead (alternatively use the token-based workflow below).
3. To create a token, go to **Account Settings → Tokens → Create Token** and store it as `VERCEL_TOKEN` in GitHub.
4. In your Vercel project settings you'll find `Organization ID` and `Project ID` — add both as repository secrets.

Note: If you prefer, you can also use Vercel's native Git integration (recommended) which will automatically deploy on push without adding this workflow. The GitHub Actions workflow is useful when you want more build control or additional CI steps before deployment.
- [React Documentation](https://react.dev) - React fundamentals
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Vite Guide](https://vitejs.dev/guide/) - Vite setup & config
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling reference
- [shadcn/ui](https://ui.shadcn.com/) - Component library docs

### APIs Used
- [OpenWeather Current Weather API](https://openweathermap.org/current) - Weather endpoint
- [Official Joke API](https://official-joke-api.appspot.com/random_joke) - Joke endpoint

### Tools & Resources
- [Node.js Downloads](https://nodejs.org/) - Get Node.js
- [Lovable Documentation](https://docs.lovable.dev/) - Lovable platform guide

---

## 🎓 Project Highlights

This project demonstrates:

### ✅ API Integration & Error Handling
- Comprehensive error handling for all scenarios
- Secure API key management with environment variables
- Real-time data fetching
- Network error recovery

### ✅ Modern Web Development
- React hooks and state management
- TypeScript for type safety
- Component-based architecture
- Responsive design patterns

### ✅ Creative Features
- Weather emoji mapping
- AI-powered fashion suggestions
- Weather-related jokes
- Random joke integration
- Animated UI elements

### ✅ Best Practices
- Environment variable usage
- Code documentation and comments
- Git integration ready
- Comprehensive README
- .gitignore configuration

---

## 📝 License

This project is created for educational purposes as part of a beginner's toolkit for learning API integration and modern web development.

**MIT License** - Feel free to use, modify, and distribute this project.

---

**Built with ❤️ for beginner developers learning API integration**

**Happy coding! 🚀**
