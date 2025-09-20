# 🚀 Vercel Environment Setup Guide

This guide explains how to set up environment variables for deploying your Student Registration Website on Vercel.

## 📋 Prerequisites

- GitHub repository with your code (follow `GITHUB_UPLOAD_GUIDE.md` first)
- Vercel account (free at [vercel.com](https://vercel.com))
- Supabase project with API keys

## 🔧 Files Created for Vercel

### `vercel.json` Configuration
This file tells Vercel how to build and deploy your application:
- Uses Vite framework
- Builds to `dist/` directory
- References environment variables securely

## 🌍 Setting Up Environment Variables in Vercel

### Step 1: Deploy from GitHub
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will detect it's a Vite project automatically
5. **Don't deploy yet** - we need to add secrets first

### Step 2: Create Vercel Secrets
The `vercel.json` file references secrets that need to be created first.

#### Using Vercel CLI (Recommended):
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Navigate to your project directory
cd "d:\Student Registration Website"

# Add secrets (replace with your actual values from .env.local)
vercel secrets add vite_supabase_url "https://kooevkhzbdxigmyjthwz.supabase.co"
vercel secrets add vite_supabase_anon_key "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtvb2V2a2h6YmR4aWdteWp0aHd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNjUwNzQsImV4cCI6MjA3Mzk0MTA3NH0.U1ZsBM4I--4RqAkHaR2OBH-xrrnb19by4TR4k71OAkQ"
```

#### Using Vercel Dashboard (Alternative):
1. Go to your Vercel team/account settings
2. Navigate to **Secrets** section
3. Add these secrets:

**Secret 1: vite_supabase_url**
```
Name: vite_supabase_url
Value: [Your Supabase project URL from .env.local]
```

**Secret 2: vite_supabase_anon_key**
```
Name: vite_supabase_anon_key
Value: [Your Supabase anon key from .env.local]
```

### Step 3: Verify Secret References
The `vercel.json` file automatically references these secrets:
```json
"env": {
  "VITE_SUPABASE_URL": "@vite_supabase_url",
  "VITE_SUPABASE_ANON_KEY": "@vite_supabase_anon_key"
}
```

### Step 4: Get Your Supabase Keys
If you need to find your Supabase keys:

1. Go to [supabase.com](https://supabase.com)
2. Open your project dashboard
3. Navigate to **Settings** → **API**
4. Copy:
   - **Project URL** (for vite_supabase_url secret)
   - **anon public key** (for vite_supabase_anon_key secret)

## 🚀 Deployment Process

### Option 1: Deploy via Vercel Dashboard
1. After adding environment variables, click **Deploy**
2. Vercel will build and deploy automatically
3. You'll get a live URL like `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts:
# ? Set up and deploy "d:\Student Registration Website"? [Y/n] y
# ? Which scope do you want to deploy to? [Your account]
# ? Link to existing project? [N/y] n
# ? What's your project's name? student-registration-website
# ? In which directory is your code located? ./
```

## 🔍 Verify Deployment

After deployment:

### ✅ Check These Work:
1. **Registration Form**: Can submit new registrations
2. **Data Persistence**: Check if data saves to Supabase
3. **Responsive Design**: Test on mobile devices
4. **Performance**: Page loads quickly

### 🐛 Common Issues & Solutions:

#### Issue: "Supabase client not initialized"
**Solution**: Check secrets in Vercel
- Ensure secrets exist: `vite_supabase_url` and `vite_supabase_anon_key`
- Verify `vercel.json` references secrets correctly with `@` prefix
- Redeploy after adding secrets

#### Issue: Build fails
**Solution**: Check build logs in Vercel dashboard
- Common fix: Ensure `package.json` has correct build script
- Verify all dependencies are in `package.json`

#### Issue: 404 errors on refresh
**Solution**: Add to `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🌐 Custom Domain (Optional)

### Add Your Own Domain:
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your domain (e.g., `mystudentapp.com`)
3. Follow DNS configuration instructions
4. Vercel provides free SSL certificates

## 📊 Monitoring & Analytics

### Built-in Vercel Analytics:
1. Go to **Analytics** tab in your project
2. View page views, performance metrics
3. Monitor Core Web Vitals

### Optional: Add Vercel Speed Insights
Add to your `index.html`:
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

## 🔄 Automatic Deployments

Vercel automatically deploys when you:
- Push to your main branch (production)
- Create pull requests (preview deployments)
- Merge branches

### Branch Deployments:
- `main` branch → Production URL
- Other branches → Preview URLs
- Pull requests → Automatic preview links

## 🛡️ Security Best Practices

### Environment Variables & Secrets:
- ✅ Never commit `.env.local` to GitHub
- ✅ Use Vercel's secret system for sensitive data
- ✅ Secrets are encrypted and secure
- ✅ Different secrets for different environments if needed

### Supabase Security:
- ✅ Enable Row Level Security (RLS)
- ✅ Configure proper database policies
- ✅ Monitor API usage in Supabase dashboard

## 📱 Testing Your Live Site

### Test Checklist:
- [ ] Registration form submits successfully
- [ ] Data appears in Supabase dashboard
- [ ] Site works on mobile devices
- [ ] All images and assets load
- [ ] No console errors in browser
- [ ] Fast loading times

## 🆘 Support & Troubleshooting

### Vercel Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite on Vercel Guide](https://vercel.com/guides/deploying-vite-to-vercel)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)

### Quick Debug Commands:
```bash
# Check build locally
npm run build

# Preview build locally
npm run preview

# Check Vercel deployment logs
vercel logs [deployment-url]
```

---

**🎉 Congratulations!** Your Student Registration Website is now live on Vercel with proper environment configuration!