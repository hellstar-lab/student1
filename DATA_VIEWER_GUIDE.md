# Data Viewer Guide

## Overview
The Data Viewer is a simple, clean interface to view all student registration entries from your Supabase database without the complexity of an admin dashboard.

## How to Access

### From the Website
1. Visit your website at `http://localhost:3001/`
2. Click the **"View Entries"** button in the top-right corner
3. You'll be taken to `/data` route showing all registration entries

### Direct URL
- Navigate directly to: `http://localhost:3001/data`

## Features

### 📊 **Clean Table Display**
- **Student Info**: Name, gender, and date of birth
- **Contact Details**: Email and phone number
- **Education Background**: Previous education and tech experience
- **Course Interest**: Preferred course and learning goals
- **Submission Time**: When the registration was submitted

### 🔄 **Real-time Data**
- Automatically loads latest entries from Supabase
- **Refresh Data** button to manually update the view
- Real-time connection to your database

### 📱 **Responsive Design**
- Works on desktop, tablet, and mobile devices
- Horizontal scrolling for smaller screens
- Clean, modern interface with gradient backgrounds

### 🎯 **User-Friendly States**
- **Loading State**: Shows spinner while fetching data
- **Empty State**: Friendly message when no registrations exist
- **Error State**: Clear error messages with retry option

## Navigation

### Available Buttons
- **Home**: Returns to the main registration page
- **View Entries**: Goes to the data viewer (current page)
- **Admin Dashboard**: Access full admin features (if needed)

## Data Security

### ✅ **Safe for Public Use**
- Uses Supabase anon key (safe for frontend)
- Respects Row Level Security (RLS) policies
- No sensitive operations exposed

### 🔒 **Read-Only Access**
- Only displays data, cannot modify entries
- No delete or edit functionality
- Perfect for viewing submissions safely

## Troubleshooting

### No Data Showing?
1. **Check Supabase Connection**:
   - Ensure `.env.local` has correct `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   - Restart development server after adding environment variables

2. **Check Database Table**:
   - Verify `student_registrations` table exists in Supabase
   - Ensure RLS policies allow public read access

3. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Look for any JavaScript errors
   - Check Network tab for failed requests

### Error Messages?
- **"Error Loading Data"**: Usually a connection or permission issue
- Click **"Try Again"** button to retry
- Check your internet connection
- Verify Supabase project is active

## Sample Data

If you need test data:
1. Use the registration form on the main page to submit entries
2. Import sample data using `sample_student_registrations.csv`
3. Follow the `CSV_IMPORT_GUIDE.md` for importing instructions

## Technical Details

### Built With
- **React + TypeScript**: Modern, type-safe frontend
- **Tailwind CSS**: Responsive, utility-first styling
- **Supabase**: Real-time database connection
- **Framer Motion**: Smooth animations and transitions

### Performance
- Efficient data fetching with error handling
- Responsive table design for large datasets
- Optimized for fast loading and smooth interactions

---

## Quick Access URLs

- **Main Site**: `http://localhost:3001/`
- **Data Viewer**: `http://localhost:3001/data`
- **Admin Dashboard**: `http://localhost:3001/admin`

**Perfect for**: Quickly checking registration submissions, sharing data views with team members, or monitoring form submissions in real-time! 🚀