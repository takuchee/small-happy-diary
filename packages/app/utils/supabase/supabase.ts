import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

// Get environment variables
const getSupabaseConfig = () => {
  // For Expo
  if (typeof Constants !== 'undefined' && Constants.expoConfig?.extra) {
    return {
      supabaseUrl: Constants.expoConfig.extra.supabaseUrl,
      supabaseKey: Constants.expoConfig.extra.supabaseAnonKey,
    }
  }

  // For Next.js
  return {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }
}

const { supabaseUrl, supabaseKey } = getSupabaseConfig()

let finalUrl = supabaseUrl
let finalKey = supabaseKey

if (!supabaseUrl || !supabaseKey) {
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn('Missing Supabase configuration. Using fallback values for build.')
  }
  
  finalUrl = supabaseUrl || 'https://placeholder.supabase.co'
  finalKey = supabaseKey || 'placeholder-anon-key'
}

export const supabase = createClient(finalUrl, finalKey)
