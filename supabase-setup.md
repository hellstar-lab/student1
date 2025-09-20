# Supabase Database Setup Guide

## Why Supabase?

Based on research, Supabase is the best free database solution for this project because:

- **Free Tier**: Generous free tier with 500MB database storage, 50MB file storage, and 2GB bandwidth
- **SQL Database**: Built on PostgreSQL, offering powerful relational database features
- **Real-time**: Built-in real-time subscriptions for live data updates
- **Authentication**: Easy-to-use authentication system
- **Dashboard**: Beautiful admin dashboard to view and manage data
- **React Integration**: Excellent React SDK with TypeScript support

## Setup Instructions

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Choose a database password (save this securely)

### Step 2: Database Schema

Create a table called `student_registrations` with the following structure:

```sql
CREATE TABLE student_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  college TEXT NOT NULL,
  course TEXT NOT NULL,
  year TEXT NOT NULL,
  tech_knowledge TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
-- Note: You can enable RLS through the Supabase Dashboard instead of SQL
-- Go to: Table Editor → student_registrations → Settings → Enable RLS

-- Alternative: Enable RLS via SQL Editor
ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies via Dashboard or SQL Editor:
-- Policy 1: Allow anyone to insert (for public form submissions)
CREATE POLICY "Enable insert for everyone" ON student_registrations
  FOR INSERT WITH CHECK (true);

-- Policy 2: Allow anyone to read (for admin dashboard)
-- Note: For a simple setup, you can allow public reads
CREATE POLICY "Enable read for everyone" ON student_registrations
  FOR SELECT USING (true);

-- For production, use authenticated-only reads:
-- CREATE POLICY "Enable read for authenticated users" ON student_registrations
--   FOR SELECT USING (auth.role() = 'authenticated');
```

### Step 3: Get API Keys
1. Go to Project Settings > API
2. Copy the `Project URL` and `anon public` key
3. These will be used in your environment variables

### Step 4: Environment Variables
Create a `.env.local` file with:
```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Data Structure

The form collects the following data:
- **name**: Student's full name
- **mobile**: Phone number
- **email**: Email address (unique)
- **college**: College/University name
- **course**: Course of study
- **year**: Academic year (1st Year, 2nd Year, etc.)
- **tech_knowledge**: Technical skills and interests

## Next Steps
1. Install Supabase client library
2. Configure Supabase client
3. Update form submission logic
4. Create admin dashboard
5. Test the complete flow