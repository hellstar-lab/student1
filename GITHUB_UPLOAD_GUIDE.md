# 📂 GitHub Upload Guide

This guide explains exactly which files to upload to GitHub and which to exclude for your Student Registration Website.

## ✅ Files TO Upload

### Core Application Files
```
📁 src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│   ├── AnimatedBackground.tsx
│   ├── HeroSection.tsx
│   ├── RegistrationForm.tsx
│   ├── AdminDashboard.tsx
│   ├── DataViewer.tsx
│   └── ui/ (all UI components)
├── lib/
│   └── supabase.ts
└── styles/
    └── globals.css
```

### Configuration Files
```
📄 package.json
📄 package-lock.json
📄 vite.config.ts
📄 tsconfig.json
📄 tsconfig.node.json
📄 index.html
📄 vercel.json
📄 .env.local.example (template file)
```

### Documentation Files
```
📄 README.md
📄 SETUP_GUIDE.md
📄 DEPLOYMENT_GUIDE.md
📄 GITHUB_UPLOAD_GUIDE.md
📄 DATA_VIEWER_GUIDE.md
📄 CSV_IMPORT_GUIDE.md
📄 SUPABASE_API_KEYS_GUIDE.md
📄 SUPABASE_RLS_DASHBOARD_GUIDE.md
📄 VERCEL_ENV_SETUP.md
📄 supabase-setup.md
```

### Sample Data
```
📄 sample_student_registrations.csv
📄 data-viewer.html (standalone viewer)
```

### Assets
```
📁 src/assets/
└── a18067bec8226a34c58754996c559c1ca7c22489.png
```

## ❌ Files NOT TO Upload

### Environment Files (CRITICAL - NEVER UPLOAD)
```
🚫 .env.local (contains your actual API keys)
🚫 .env (any environment file with real credentials)
🚫 VERCEL_ENV_VALUES.md (contains actual environment values)
```

### Build Output
```
🚫 build/ (generated folder)
🚫 dist/ (generated folder)
```

### Dependencies
```
🚫 node_modules/ (will be installed via package.json)
```

### IDE/System Files
```
🚫 .vscode/ (VS Code settings)
🚫 .idea/ (IntelliJ settings)
🚫 *.log (log files)
🚫 .DS_Store (macOS system file)
🚫 Thumbs.db (Windows system file)
```

## 📝 Required: Create .gitignore File

Create a `.gitignore` file in your project root with this content:

```gitignore
# Dependencies
node_modules/

# Production builds
build/
dist/

# Environment variables (CRITICAL)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Temporary folders
tmp/
temp/

# Vercel environment values (contains actual keys)
VERCEL_ENV_VALUES.md
```

## 🔐 Security Checklist

### Before Uploading:
- [ ] ✅ `.gitignore` file is created
- [ ] ✅ `.env.local` is listed in `.gitignore`
- [ ] ✅ `VERCEL_ENV_VALUES.md` is listed in `.gitignore`
- [ ] ✅ No API keys are in any uploaded files
- [ ] ✅ `.env.local.example` contains placeholder values only
- [ ] ✅ All documentation files use placeholder values (not real keys)
- [ ] ✅ `data-viewer.html` uses placeholder values (not real keys)

### Example .env.local.example:
```env
# Supabase Configuration
# Get these values from your Supabase project dashboard
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 📋 Step-by-Step Upload Process

### 1. Prepare Your Repository
```bash
# Navigate to your project folder
cd "d:\Student Registration Website"

# Initialize git (if not already done)
git init

# Create .gitignore file (copy content from above)
notepad .gitignore
```

### 2. Stage Files for Upload
```bash
# Add all files (respecting .gitignore)
git add .

# Check what will be committed (verify no sensitive files)
git status

# Commit your changes
git commit -m "Initial commit: Student Registration Website"
```

### 3. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `student-registration-website`
4. Make it **Public** or **Private** (your choice)
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

### 4. Connect and Push
```bash
# Add GitHub as remote origin
git remote add origin https://github.com/yourusername/student-registration-website.git

# Push to GitHub
git push -u origin main
```

## 🔍 Verify Upload Success

After uploading, check your GitHub repository:

### ✅ Should See:
- All source code files
- Documentation files
- `package.json` and `package-lock.json`
- `.gitignore` file
- `.env.local.example` (template only)

### ❌ Should NOT See:
- `.env.local` file
- `node_modules/` folder
- `build/` folder
- Any files with real API keys

## 🚨 Emergency: If You Accidentally Uploaded Secrets

If you accidentally uploaded `.env.local` or any file with real API keys:

### Immediate Actions:
1. **Delete the repository** from GitHub
2. **Regenerate all API keys** in Supabase dashboard
3. **Update your local `.env.local`** with new keys
4. **Fix your `.gitignore`** file
5. **Re-upload** following this guide

### Regenerate Supabase Keys:
1. Go to Supabase Dashboard → Settings → API
2. Click "Reset" on the anon key
3. Update your local `.env.local` file

## 📁 Final Repository Structure

Your GitHub repository should look like this:

```
student-registration-website/
├── .gitignore
├── .env.local.example
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── index.html
├── README.md
├── DEPLOYMENT_GUIDE.md
├── GITHUB_UPLOAD_GUIDE.md
├── VERCEL_ENV_SETUP.md
├── [other documentation files]
├── data-viewer.html
├── sample_student_registrations.csv
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── components/
    ├── lib/
    ├── styles/
    └── assets/
```

## 🎯 Next Steps After Upload

1. **Share your repository** with collaborators
2. **Set up automatic deployment** (Vercel/Netlify can auto-deploy from GitHub)
3. **Enable GitHub Pages** (if using that hosting option)
4. **Add repository description** and topics for discoverability

## 💡 Pro Tips

- **Use meaningful commit messages**: "Add registration form validation" instead of "update"
- **Create branches** for new features: `git checkout -b feature/new-validation`
- **Use pull requests** for code review (if working with others)
- **Add repository topics**: `react`, `supabase`, `vite`, `student-management`

---

**Remember**: Never upload real API keys or environment files to GitHub. Always use `.gitignore` to protect sensitive information!