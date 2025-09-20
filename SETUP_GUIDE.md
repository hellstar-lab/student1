# Student Registration Database Setup Guide

## 🎯 Overview
This guide will help you set up a free online database using Supabase to store and manage student registration data from your website.

## 📋 What You'll Get
- ✅ Free online database for student registrations
- ✅ Real-time data updates
- ✅ Admin dashboard to view all registrations
- ✅ Export functionality (CSV)
- ✅ Search and filter capabilities
- ✅ Responsive design for all devices

## 🚀 Step-by-Step Setup

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" and sign up with GitHub/Google
3. Create a new project:
   - **Project Name**: `student-registration-db`
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your location
   - Click "Create new project"

### Step 2: Set Up Database Table
1. Wait for project initialization (2-3 minutes)
2. Go to **Table Editor** in the left sidebar
3. Click **"Create a new table"**
4. Configure the table:
   - **Name**: `student_registrations`
   - **Description**: `Student registration data for Pixel Plus Tech Community`
   - Enable **Row Level Security (RLS)**: ✅ **CHECKED**

5. **Add these columns** (click "Add column" for each):

   | Column Name | Type | Default Value | Nullable |
   |-------------|------|---------------|----------|
   | `id` | `uuid` | `gen_random_uuid()` | ❌ |
   | `created_at` | `timestamptz` | `now()` | ❌ |
   | `name` | `text` | - | ❌ |
   | `email` | `text` | - | ❌ |
   | `mobile` | `text` | - | ❌ |
   | `college` | `text` | - | ❌ |
   | `course` | `text` | - | ❌ |
   | `year` | `text` | - | ❌ |
   | `tech_knowledge` | `text` | - | ❌ |

6. Click **"Save"** to create the table

### Step 3: Configure Security Policies
1. Go to **Authentication** → **Policies**
2. Find `student_registrations` table
3. Click **"New Policy"**
4. Choose **"Get started quickly"** → **"Enable insert access for all users"**
5. Click **"Review"** → **"Save policy"**
6. Create another policy for **"Enable read access for all users"**

### Step 4: Get API Keys
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### Step 5: Configure Environment Variables
1. In your project folder, create a file named `.env.local`
2. Add these lines (replace with your actual values):

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **Important**: Never commit this file to version control!

### Step 6: Test the Application
1. Save the `.env.local` file
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173)
4. **Test Registration Form**:
   - Fill out the registration form
   - Click "Join Pixel Plus Tech Community"
   - You should see a success message
5. **Test Admin Dashboard**:
   - Click "Admin Dashboard" button (top-right)
   - You should see your test registration
   - Try the search and export features

## 🎛️ Admin Dashboard Features

### Navigation
- **Main Page**: Student registration form
- **Admin Dashboard**: View all registrations (click button in top-right)

### Dashboard Capabilities
- 📊 **Statistics**: Total registrations, today's count, filtered results
- 🔍 **Search**: Filter by name, email, college, or course
- 🔄 **Real-time Updates**: New registrations appear automatically
- 📥 **Export**: Download all data as CSV file
- 🎨 **Responsive Design**: Works on desktop, tablet, and mobile

### Data Management
- **View All Registrations**: Complete student information in organized table
- **Contact Details**: Email and phone numbers with icons
- **Academic Info**: College, course, and year details
- **Tech Level Badges**: Color-coded skill level indicators
- **Registration Timestamps**: Date and time of each submission

## 🔒 Security Features
- **Row Level Security**: Database-level protection
- **Environment Variables**: API keys stored securely
- **Input Validation**: Form data validation before submission
- **Error Handling**: Graceful error messages for users

## 📱 Mobile Responsive
- ✅ Registration form adapts to all screen sizes
- ✅ Admin dashboard table scrolls horizontally on mobile
- ✅ Touch-friendly buttons and interactions
- ✅ Optimized loading states and animations

## 🆘 Troubleshooting

### Common Issues

**1. "Failed to submit registration" error**
- Check your `.env.local` file has correct Supabase URL and key
- Verify RLS policies are enabled for insert and select
- Restart development server after adding environment variables

**2. Admin dashboard shows "No registrations yet"**
- Submit a test registration first
- Check browser console for any JavaScript errors
- Verify Supabase table name is exactly `student_registrations`

**3. Real-time updates not working**
- Supabase real-time is enabled by default
- Check browser console for WebSocket connection errors
- Try refreshing the admin dashboard

### Getting Help
- Check browser developer console (F12) for error messages
- Verify Supabase project is active and not paused
- Ensure all environment variables are set correctly

## 🎉 Success!
Once everything is working:
- Students can register through your beautiful form
- You can view all registrations in the admin dashboard
- Data is automatically saved to your free Supabase database
- You can export data anytime for further analysis

## 🔗 Useful Links
- [Supabase Documentation](https://supabase.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**🎯 Your online student registration system is now ready!** Students can register, and you have full access to view and manage all the data through your admin dashboard.