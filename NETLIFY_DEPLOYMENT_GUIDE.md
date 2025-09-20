# 🚀 Netlify Deployment Guide

This guide explains how to deploy your Student Registration Website on Netlify.

## 📋 Prerequisites

- GitHub repository with your code (follow `GITHUB_UPLOAD_GUIDE.md` first)
- Netlify account (free at [netlify.com](https://netlify.com))
- Supabase project with API keys

## 🔧 Configuration Files

### `netlify.toml` Configuration
This file tells Netlify how to build and deploy your application:
- Uses `build` directory as publish folder (matches Vite config)
- Runs `npm run build` command
- Includes SPA redirect rules
- Sets environment variables for all deploy contexts

## 🌍 Deployment Methods

### Method 1: Deploy via Netlify Dashboard (Recommended)

#### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `student-registration-website`
5. Netlify will auto-detect the build settings from `netlify.toml`

#### Step 2: Configure Build Settings
Netlify should automatically detect:
- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Base directory**: (leave empty)

#### Step 3: Set Environment Variables
1. In your site dashboard, go to **Site settings** → **Environment variables**
2. Add these variables:

```
VITE_SUPABASE_URL = https://kooevkhzbdxigmyjthwz.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtvb2V2a2h6YmR4aWdteWp0aHd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNjUwNzQsImV4cCI6MjA3Mzk0MTA3NH0.U1ZsBM4I--4RqAkHaR2OBH-xrrnb19by4TR4k71OAkQ
```

#### Step 4: Deploy
1. Click **Deploy site**
2. Netlify will build and deploy automatically
3. You'll get a live URL like `https://amazing-name-123456.netlify.app`

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 3: Drag and Drop (Manual)

```bash
# Build your project locally
npm run build

# Go to netlify.com → Sites → Drag and drop the 'build' folder
```

## 🔍 Verify Deployment

After deployment, test these features:

### ✅ Check These Work:
1. **Registration Form**: Can submit new registrations
2. **Data Persistence**: Check if data saves to Supabase
3. **Responsive Design**: Test on mobile devices
4. **Performance**: Page loads quickly
5. **URL Routing**: Refresh page doesn't show 404

## 🐛 Common Issues & Solutions

### Issue: "Supabase client not initialized"
**Solution**: Check environment variables in Netlify dashboard
- Ensure variable names match exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Redeploy after adding variables

### Issue: Build fails with "Command failed"
**Solution**: Check build logs in Netlify dashboard
- Ensure `package.json` has correct build script
- Verify all dependencies are listed
- Check Node.js version compatibility

### Issue: 404 errors on page refresh
**Solution**: The `netlify.toml` file includes SPA redirects:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Issue: Environment variables not working
**Solution**: 
1. Check variable names are prefixed with `VITE_`
2. Rebuild and redeploy after adding variables
3. Verify variables in Site settings → Environment variables

## 🌐 Custom Domain (Optional)

### Add Your Own Domain:
1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain (e.g., `mystudentapp.com`)
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificates

## 📊 Monitoring & Analytics

### Built-in Netlify Analytics:
1. Go to **Analytics** tab in your site dashboard
2. View page views, top pages, referrers
3. Monitor Core Web Vitals

### Optional: Add Google Analytics
Add to your `index.html` or use environment variables for tracking ID.

## 🔄 Automatic Deployments

Netlify automatically deploys when you:
- Push to your main branch (production)
- Create pull requests (deploy previews)
- Merge branches

### Deploy Contexts:
- **Production**: `main` branch → Live site
- **Deploy Preview**: Pull requests → Preview URLs
- **Branch Deploy**: Other branches → Branch URLs

## 🛡️ Security Best Practices

### Environment Variables:
- ✅ Never commit `.env.local` to GitHub
- ✅ Use Netlify's environment variable system
- ✅ Different variables for different environments if needed
- ✅ Variables are automatically encrypted

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
- [ ] Page refresh works (no 404s)

## 🆘 Support & Troubleshooting

### Netlify Resources:
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite on Netlify Guide](https://docs.netlify.com/integrations/frameworks/vite/)
- [Environment Variables Guide](https://docs.netlify.com/environment-variables/overview/)

### Quick Debug Commands:
```bash
# Check build locally
npm run build

# Preview build locally
npm run preview

# Check Netlify deployment logs
netlify logs
```

### Netlify Support:
- Community forum: [community.netlify.com](https://community.netlify.com)
- Documentation: [docs.netlify.com](https://docs.netlify.com)
- Status page: [netlifystatus.com](https://netlifystatus.com)

---

**🎉 Congratulations!** Your Student Registration Website is now live on Netlify with automatic deployments and proper environment configuration!