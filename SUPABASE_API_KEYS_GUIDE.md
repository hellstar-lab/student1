# How to Get API Keys from Supabase

## 🔑 Step-by-Step Guide to Get Your Supabase API Keys

### Step 1: Access Your Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your project from the dashboard

### Step 2: Navigate to API Settings
1. In your project dashboard, look at the **left sidebar**
2. Click on **"Settings"** (gear icon at the bottom)
3. From the Settings menu, click **"API"**

### Step 3: Find Your API Keys
You'll see several important pieces of information:

#### 🌐 Project URL
- **Label**: "Project URL" or "Reference ID"
- **Format**: `https://your-project-id.supabase.co`
- **Usage**: This is your `VITE_SUPABASE_URL`

#### 🔓 Public API Key (anon key)
- **Label**: "anon public" or "Public anon key"
- **Format**: Long string starting with `eyJ...`
- **Usage**: This is your `VITE_SUPABASE_ANON_KEY`
- **Security**: Safe to use in frontend applications

#### 🔒 Service Role Key (Optional)
- **Label**: "service_role secret"
- **Format**: Long string starting with `eyJ...`
- **Usage**: For server-side operations only
- **⚠️ WARNING**: Never expose this in frontend code!

### Step 4: Copy Your Keys
1. **Project URL**: Click the copy button next to the URL
2. **Anon Key**: Click the copy button next to the anon key
3. Store them safely for the next step

## 📝 Setting Up Environment Variables

### Step 1: Create .env.local File
1. In your project root directory: `d:\Student Registration Website\`
2. Create a new file called `.env.local`
3. Add your keys:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 2: Replace Placeholder Values
- Replace `your-project-id` with your actual project ID
- Replace the anon key with your actual anon key
- **Important**: No quotes needed around the values

### Step 3: Verify Setup
1. Save the `.env.local` file
2. Restart your development server (`npm run dev`)
3. Your React app should now connect to Supabase

## 🔍 Alternative Ways to Find API Keys

### Method 1: Project Dashboard Home
1. Go to your project dashboard
2. Look for **"Connect to your project"** section
3. Click **"Generate API docs"** or similar
4. Your keys will be displayed there

### Method 2: Documentation Tab
1. In your project, click **"Documentation"** in the sidebar
2. Select **"Introduction"** or **"Getting Started"**
3. Your project-specific keys will be shown in code examples

## 🛡️ Security Best Practices

### ✅ Safe Practices
- ✅ Use the **anon key** for frontend applications
- ✅ Store keys in `.env.local` file
- ✅ Add `.env.local` to your `.gitignore` file
- ✅ Use environment variables in your code

### ❌ Avoid These Mistakes
- ❌ Never commit API keys to version control
- ❌ Don't use service_role key in frontend
- ❌ Don't hardcode keys directly in your code
- ❌ Don't share keys in public forums or screenshots

## 🔄 Key Regeneration

### When to Regenerate Keys
- If you accidentally exposed your service_role key
- If you suspect unauthorized access
- For regular security maintenance

### How to Regenerate
1. Go to Settings → API
2. Click **"Reset"** or **"Regenerate"** next to the key
3. Update your `.env.local` file with the new key
4. Restart your application

## 🚨 Troubleshooting

### Problem: "Invalid API key" error
**Solutions**:
- Double-check you copied the entire key
- Ensure no extra spaces or characters
- Verify the key type (anon vs service_role)
- Try regenerating the key

### Problem: "Project not found" error
**Solutions**:
- Verify your project URL is correct
- Check if your project is still active
- Ensure you're using the right Supabase account

### Problem: Environment variables not working
**Solutions**:
- Restart your development server
- Check `.env.local` file name and location
- Ensure variables start with `VITE_`
- Verify no syntax errors in `.env.local`

## 📋 Quick Checklist

- [ ] Created Supabase account and project
- [ ] Found API keys in Settings → API
- [ ] Copied Project URL
- [ ] Copied anon public key
- [ ] Created `.env.local` file
- [ ] Added both environment variables
- [ ] Restarted development server
- [ ] Tested connection in your app

## 🎯 Next Steps

After getting your API keys:
1. Test your registration form
2. Check if data appears in Supabase dashboard
3. Verify admin dashboard can read data
4. Set up Row Level Security policies

Your Supabase integration should now be working perfectly! 🎉