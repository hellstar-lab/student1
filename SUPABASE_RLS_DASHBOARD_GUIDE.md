# Supabase Row Level Security (RLS) Setup via Dashboard

## 🔒 Why Row Level Security?
RLS ensures your data is secure by controlling who can read, insert, update, or delete rows in your tables.

## 📋 Step-by-Step Dashboard Setup

### Step 1: Enable RLS on Your Table
1. Go to your Supabase project dashboard
2. Navigate to **Table Editor** in the left sidebar
3. Click on your `student_registrations` table
4. Click the **Settings** tab (next to the table data)
5. Find **"Row Level Security"** section
6. Toggle **"Enable RLS"** to ON
7. Click **"Save"**

### Step 2: Create Policies via Dashboard

#### Policy 1: Allow Public Inserts (Form Submissions)
1. In the same Settings tab, scroll to **"RLS Policies"**
2. Click **"Add Policy"** or **"New Policy"**
3. Fill in the policy details:
   - **Policy Name**: `Enable insert for everyone`
   - **Allowed Operation**: Select **"INSERT"**
   - **Policy Definition**: `true` (allows everyone to insert)
   - **Check Expression (WITH CHECK)**: Use one of these options:
     - **Simple**: `true` (allows any data)
     - **Email validation**: `email IS NOT NULL AND email != ''`
     - **Required fields**: `name IS NOT NULL AND email IS NOT NULL AND mobile IS NOT NULL`
     - **Email format**: `email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'`
4. Click **"Save Policy"**

#### Policy 2: Allow Public Reads (Admin Dashboard)
1. Click **"Add Policy"** again
2. Fill in the policy details:
   - **Policy Name**: `Enable read for everyone`
   - **Allowed Operation**: Select **"SELECT"**
   - **Policy Definition**: Leave as `true` (allows everyone to read)
3. Click **"Save Policy"**

## 🎯 Alternative: SQL Editor Method

If the dashboard method doesn't work, try the SQL Editor:

1. Go to **SQL Editor** in the left sidebar
2. Create a new query
3. Paste this code:

```sql
-- Enable RLS
ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

-- Policy for public inserts
CREATE POLICY "Enable insert for everyone" ON student_registrations
  FOR INSERT WITH CHECK (true);

-- Policy for public reads
CREATE POLICY "Enable read for everyone" ON student_registrations
  FOR SELECT USING (true);
```

4. Click **"Run"**

## ✅ Verify Your Setup

### Check RLS Status
1. Go back to **Table Editor** → `student_registrations`
2. In the Settings tab, confirm:
   - ✅ **Row Level Security** is enabled
   - ✅ You see 2 policies listed:
     - `Enable insert for everyone` (INSERT)
     - `Enable read for everyone` (SELECT)

### Test Your Policies
1. Try inserting data via your registration form
2. Check if data appears in the admin dashboard
3. Verify data shows up in the Supabase table editor

## 📝 Advanced WITH CHECK Expressions

### Common WITH CHECK Patterns

```sql
-- Basic validation - ensure required fields are not empty
name IS NOT NULL AND name != '' AND 
email IS NOT NULL AND email != '' AND 
mobile IS NOT NULL AND mobile != ''

-- Email format validation
email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'

-- Phone number validation (basic)
mobile ~* '^[+]?[0-9\\s\\-\\(\\)]{10,}$'

-- Combine multiple validations
name IS NOT NULL AND name != '' AND
email IS NOT NULL AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$' AND
mobile IS NOT NULL AND mobile != '' AND
college IS NOT NULL AND college != '' AND
course IS NOT NULL AND course != ''

-- Length restrictions
length(name) >= 2 AND length(name) <= 100 AND
length(email) <= 255 AND
length(mobile) >= 10 AND length(mobile) <= 20

-- Prevent duplicate emails (additional safety)
NOT EXISTS (
  SELECT 1 FROM student_registrations 
  WHERE email = NEW.email AND id != NEW.id
)

-- Year validation
year IN ('1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate')

-- Tech knowledge not empty
tech_knowledge IS NOT NULL AND tech_knowledge != ''
```

### Recommended WITH CHECK for Production

```sql
-- Comprehensive validation
name IS NOT NULL AND name != '' AND length(name) >= 2 AND
email IS NOT NULL AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$' AND
mobile IS NOT NULL AND mobile != '' AND length(mobile) >= 10 AND
college IS NOT NULL AND college != '' AND
course IS NOT NULL AND course != '' AND
year IS NOT NULL AND year != '' AND
tech_knowledge IS NOT NULL AND tech_knowledge != ''
```

## 🔧 Troubleshooting

### Problem: "RLS is blocking your query"
**Solution**: Make sure you have the correct policies created

### Problem: Can't see Settings tab
**Solution**: 
- Make sure you're on the correct table
- Try refreshing the page
- Check if you have the right permissions

### Problem: Policies not working
**Solution**:
1. Delete existing policies
2. Recreate them with simpler names
3. Use `true` for both policy definition and check expression

## 🚨 Production Security Note

For production apps, consider more restrictive policies:

```sql
-- More secure read policy (requires authentication)
CREATE POLICY "Enable read for authenticated users" ON student_registrations
  FOR SELECT USING (auth.role() = 'authenticated');
```

But for development and testing, the public read policy is fine!

## 📞 Need Help?

If you're still having issues:
1. Check the Supabase documentation
2. Try the SQL Editor method
3. Ensure your table name is exactly `student_registrations`
4. Verify you're in the correct project

Your RLS setup should now work perfectly with your registration form and admin dashboard! 🎉