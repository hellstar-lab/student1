# CSV Import Guide for Supabase

## 📁 Sample Data File
A sample CSV file `sample_student_registrations.csv` has been created with 10 sample student registrations that match your database schema.

## 🚀 How to Import CSV Data into Supabase

### Step 1: Access Your Supabase Dashboard
1. Go to [supabase.com](https://supabase.com) and sign in
2. Select your project
3. Navigate to **Table Editor** in the left sidebar

### Step 2: Select Your Table
1. Click on the `student_registrations` table
2. You should see the table structure with columns: id, name, mobile, email, college, course, year, tech_knowledge, created_at, updated_at

### Step 3: Import CSV Data
1. Click the **"Insert"** dropdown button (top right of the table)
2. Select **"Import data via spreadsheet"**
3. Choose **"Upload CSV"**
4. Select the `sample_student_registrations.csv` file
5. **Important**: Make sure the column mapping is correct:
   - CSV columns should map to database columns
   - Skip `id`, `created_at`, and `updated_at` columns (they auto-generate)

### Step 4: Configure Import Settings
- **Header row**: ✅ Check "First row contains headers"
- **Column mapping**: Verify each CSV column maps to the correct database column
- **Data types**: Should auto-detect correctly

### Step 5: Complete Import
1. Click **"Import data"**
2. Review the preview
3. Click **"Confirm import"**
4. Wait for the import to complete

## 📋 CSV File Structure
The sample CSV includes these columns (matching your database):
```
name,mobile,email,college,course,year,tech_knowledge
```

## ✅ Verification
After import:
1. Check the table in Supabase dashboard
2. Test your registration form and admin dashboard
3. Verify data appears correctly in your React app

## 🔧 Alternative Import Methods

### Method 1: SQL Insert (Advanced)
You can also use the SQL Editor in Supabase:
```sql
INSERT INTO student_registrations (name, mobile, email, college, course, year, tech_knowledge)
VALUES 
  ('John Smith', '+1234567890', 'john.smith@email.com', 'MIT', 'Computer Science', '3rd Year', 'JavaScript React Python'),
  -- Add more rows as needed
```

### Method 2: Programmatic Import
Use the Supabase JavaScript client to bulk insert data from your React app.

## 📝 Notes
- The `id` field will auto-generate (UUID)
- `created_at` and `updated_at` timestamps will auto-populate
- Make sure email addresses are unique (database constraint)
- Phone numbers can include country codes

## 🚨 Troubleshooting
- **Duplicate email error**: Remove duplicate emails from CSV
- **Column mismatch**: Ensure CSV headers match database column names exactly
- **Import fails**: Check for special characters or formatting issues in CSV

Your sample data is now ready to import! 🎉