import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface StudentRegistration {
  id?: string
  name: string
  mobile: string
  email: string
  college: string
  course: string
  year: string
  tech_knowledge: string
  created_at?: string
  updated_at?: string
}

// Database functions
export const studentRegistrationService = {
  // Insert new student registration
  async create(data: Omit<StudentRegistration, 'id' | 'created_at' | 'updated_at'>) {
    const { data: result, error } = await supabase
      .from('student_registrations')
      .insert([data])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating registration:', error)
      throw error
    }
    
    return result
  },

  // Get all registrations (for admin dashboard)
  async getAll() {
    const { data, error } = await supabase
      .from('student_registrations')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching registrations:', error)
      throw error
    }
    
    return data
  },

  // Get registration by email
  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('student_registrations')
      .select('*')
      .eq('email', email)
      .single()
    
    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error('Error fetching registration:', error)
      throw error
    }
    
    return data
  },

  // Subscribe to real-time changes
  subscribeToChanges(callback: (payload: any) => void) {
    return supabase
      .channel('student_registrations')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'student_registrations'
      }, callback)
      .subscribe()
  }
}