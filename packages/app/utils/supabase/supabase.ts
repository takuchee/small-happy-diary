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
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Debug info in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Supabase Config:', {
      supabaseUrl: supabaseUrl ? 'Set' : 'Not Set',
      supabaseKey: supabaseKey ? 'Set' : 'Not Set',
    })
  }

  if (!supabaseUrl || !supabaseKey) {
    console.error('Environment Variables:', {
      NODE_ENV: process.env.NODE_ENV,
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  }

  return { supabaseUrl, supabaseKey }
}

const config = getSupabaseConfig()

let finalUrl = config.supabaseUrl
let finalKey = config.supabaseKey

if (!config.supabaseUrl || !config.supabaseKey) {
  throw new Error('Missing Supabase configuration. Check your environment variables.')
}

export const supabase = createClient(finalUrl, finalKey)
