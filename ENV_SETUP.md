# 🔐 Environment Variables Setup Guide

## ⚠️ SECURITY NOTICE
Your `.env.production` file has been removed from Git tracking to protect your sensitive credentials.

## 📝 Setup Instructions

### For Local Development:
1. Copy `.env.example` to `.env.production`:
   ```bash
   cp .env.example .env.production
   ```

2. Fill in your actual EmailJS credentials in `.env.production`

3. Never commit `.env.production` to Git (it's now in .gitignore)

### For Vercel Deployment:
You need to add environment variables in Vercel dashboard instead of using .env files:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
VITE_EMAILJS_SERVICE_ID=service_defm7jo
VITE_EMAILJS_TEMPLATE_ID=template_g19gj5k
VITE_EMAILJS_PUBLIC_KEY=ZX9xd01KKe1e2OW0h
VITE_API_URL=/api
```

5. Select **Production**, **Preview**, and **Development** for each variable
6. Click **Save**
7. Redeploy your site

## ✅ Your EmailJS is Working
Your contact form should work with these credentials. The environment variables are loaded at build time.

## 🔄 After Setting Up Vercel Env Vars:
```bash
git add .
git commit -m "Secure environment variables and update .gitignore"
git push
```

Vercel will automatically redeploy with the new environment variables.
