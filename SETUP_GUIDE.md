# 🚀 Quick Setup Guide

This guide will help you get your Weather API Explorer running in minutes.

---

## ⚡ For Lovable Users (Fastest Setup)

### Step 1: Get Your API Key (2 minutes)

1. Visit [OpenWeather](https://openweathermap.org/api)
2. Click **Sign Up** (free account)
3. Verify your email
4. Go to **API Keys** in your dashboard
5. Copy your API key

### Step 2: Add to Lovable (1 minute)

1. In Lovable, go to **Project Settings** (⚙️ icon)
2. Click **Environment Variables**
3. Click **Add Variable**
4. Enter:
   - **Name**: `VITE_OPENWEATHER_API_KEY`
   - **Value**: `paste_your_api_key_here`
5. Click **Save**

### Step 3: Test It! (30 seconds)

1. The app will automatically reload
2. Type a city name (e.g., "London")
3. Click **Search**
4. See the weather! ☀️

**Done! Your app is live.** 🎉

---

## 💻 For Local Development

### Prerequisites

```bash
# Check if you have these installed
node --version  # Need v18+
npm --version   # Need v9+
git --version   # Need v2.30+
```

Don't have them? [Install Node.js](https://nodejs.org/) and [Git](https://git-scm.com/)

### Step 1: Get the Code

**If using Lovable:**
```bash
# Click GitHub → Connect to GitHub → Create Repository
# Then clone your repo
git clone https://github.com/YOUR_USERNAME/weather-api-explorer.git
cd weather-api-explorer
```

**If starting from scratch:**
```bash
# The project is already set up in Lovable
# Just sync with GitHub (see above)
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup Environment

```bash
# Create .env file
touch .env

# Add this line to .env (replace with your actual key)
echo "VITE_OPENWEATHER_API_KEY=your_api_key_here" > .env
```

### Step 4: Run It

```bash
npm run dev
```

Open `http://localhost:8080` in your browser!

---

## 🔑 Getting Your OpenWeather API Key

### Detailed Steps:

1. **Sign Up**
   - Go to https://openweathermap.org/api
   - Click "Sign Up" in the top right
   - Fill in: Username, Email, Password
   - Check "I am 16 years old or over"
   - Check "I agree with Terms and conditions"
   - Solve the CAPTCHA
   - Click "Create Account"

2. **Verify Email**
   - Check your email inbox
   - Click the verification link
   - You'll be redirected to OpenWeather

3. **Get Your Key**
   - Log in to OpenWeather
   - Click your username (top right)
   - Select "My API keys"
   - Copy the default key (or generate a new one)

4. **Wait (If Needed)**
   - New keys may take 10-15 minutes to activate
   - If you get 401 errors immediately, wait a bit!

### API Key Best Practices:

✅ **DO:**
- Keep your key private (never commit to Git)
- Use environment variables
- Regenerate if exposed

❌ **DON'T:**
- Share your key publicly
- Hardcode it in your source code
- Commit `.env` file to GitHub

---

## 🐙 Quick GitHub Setup

### Using Lovable (Easiest):

1. Click **GitHub** button in toolbar
2. Click **Connect to GitHub**
3. Authorize the Lovable app
4. Click **Create Repository**
5. Choose a name (e.g., `weather-api-explorer`)
6. Click **Create**

**Done!** Your code is now on GitHub.

### Manual Setup:

```bash
# Initialize git
git init

# Add files
git add .

# First commit
git commit -m "Initial commit: Weather API Explorer"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/weather-api-explorer.git
git branch -M main
git push -u origin main
```

---

## ✅ Verification Checklist

Before submitting your project, verify:

- [ ] App runs without errors
- [ ] Can search for cities successfully
- [ ] Weather data displays correctly
- [ ] Emojis match weather conditions
- [ ] Jokes load and refresh
- [ ] Error messages work (try invalid city)
- [ ] Code is pushed to GitHub
- [ ] README.md is complete
- [ ] No API keys in code (only in .env)
- [ ] `.gitignore` includes `.env`

---

## 🐛 Quick Troubleshooting

### "API Key Missing" error?
→ Check your `.env` file has `VITE_OPENWEATHER_API_KEY=your_key`
→ Restart dev server after adding it

### "401 Unauthorized" error?
→ New API keys take 10-15 minutes to activate
→ Double-check your key is copied correctly

### "City Not Found" error?
→ Try a different city name
→ Use English names (e.g., "Tokyo" not "東京")

### Nothing happens when clicking Search?
→ Open browser console (F12)
→ Check for error messages
→ Verify API key is set

### Styles look broken?
→ Clear browser cache (Cmd/Ctrl + Shift + R)
→ Restart dev server

---

## 📚 Next Steps

Now that your app is running:

1. **Customize It**
   - Try different color schemes
   - Add more weather metrics
   - Integrate additional APIs

2. **Deploy It**
   - Click **Publish** in Lovable
   - Share your live URL
   - Add to your portfolio

3. **Document Your Journey**
   - Update the AI Prompt Journal
   - Take screenshots
   - Write about challenges solved

4. **Submit Your Project**
   - Ensure README is complete
   - Verify GitHub repo is public
   - Include your live demo URL

---

## 🎓 For Your Submission

Include these items:

1. **GitHub Repository URL**
   - Example: `https://github.com/yourusername/weather-api-explorer`

2. **Live Demo URL** (if using Lovable)
   - Example: `https://your-project.lovable.app`

3. **README.md** (already created)
   - Project overview
   - Setup instructions
   - AI Prompt Journal

4. **Documentation of Features**
   - Screenshots of working app
   - Error handling examples
   - Code snippets (optional)

---

## 💡 Pro Tips

- **Test error scenarios** to show robust error handling
- **Add comments** in your code for clarity
- **Keep commits descriptive** (e.g., "Add weather emoji mapping")
- **Use semantic commit messages** following convention

---

## 🆘 Need Help?

- 📖 Check the main [README.md](./README.md)
- 🔗 Visit [OpenWeather Docs](https://openweathermap.org/api)
- 💬 Join [Lovable Discord](https://discord.gg/lovable)
- 📧 Open an issue on GitHub

---

**You're ready to impress! 🌟**

Good luck with your submission! 🚀
