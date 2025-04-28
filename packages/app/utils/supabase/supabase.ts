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

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase configuration. Check your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
