'use client'

import { HomeScreen } from 'app/features/home/screen'
import { useEffect } from 'react'
import { useRouter } from 'solito/navigation'
import { supabase } from 'app/utils/supabase/supabase'

export default function HomePage() {
  const { replace } = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        replace('/auth/login')
      }
    }
    checkAuth()
  }, [replace])

  return <HomeScreen />
}
