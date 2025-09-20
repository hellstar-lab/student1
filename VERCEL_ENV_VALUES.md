# 🔑 Vercel Environment Variables - Quick Reference

**⚠️ IMPORTANT: This file contains your actual environment values. DO NOT commit this to GitHub!**

Use these exact values when setting up environment variables in your Vercel dashboard:

## 📋 Environment Variables for Vercel Dashboard

### VITE_SUPABASE_URL
```
Name: VITE_SUPABASE_URL
Value: [Copy from your .env.local file - line 1]
Environments: ✅ Production ✅ Preview ✅ Development
```

### VITE_SUPABASE_ANON_KEY
```
Name: VITE_SUPABASE_ANON_KEY
Value: [Copy from your .env.local file - line 2]
Environments: ✅ Production ✅ Preview ✅ Development
```

## 🚀 Quick Setup Steps

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables

2. **Add Variable 1:**
   - Name: `VITE_SUPABASE_URL`
   - Value: `[Copy from your .env.local file]`
   - Check all environments (Production, Preview, Development)

3. **Add Variable 2:**
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: [Copy the full key from your .env.local file]
   - Check all environments (Production, Preview, Development)

4. **Redeploy** your application after adding variables

## 🔍 How to Find Your Anon Key

If you need to find your Supabase anon key:

### Option 1: From your .env.local file
```bash
# Open your .env.local file and copy the value after VITE_SUPABASE_ANON_KEY=
cat .env.local
```

### Option 2: From Supabase Dashboard
1. Go to [supabase.com](https://supabase.com)
2. Open your project: `kooevkhzbdxigmyjthwz`
3. Settings → API
4. Copy the "anon public" key

## ⚠️ Security Notes

- **Never commit this file to GitHub**
- **Delete this file after setting up Vercel** (optional)
- **The anon key is safe to use in frontend applications**
- **Your actual database is protected by Row Level Security (RLS)**

## 🗑️ Cleanup

After successfully deploying to Vercel, you can safely delete this file:
```bash
del "VERCEL_ENV_VALUES.md"
```

---

**Remember**: This file is for your reference only. Keep your environment variables secure!