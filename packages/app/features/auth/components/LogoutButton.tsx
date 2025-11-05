import { Button } from '@my/ui'
import { useEffect, useState } from 'react'
import { supabase } from 'app/utils/supabase/supabase'
import { useRouter } from 'solito/navigation'

export function LogoutButton() {
  const router = useRouter()

  const doLogout = async () => {
    // supabaseに用意されているログアウトの関数
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
    window.location.reload()
  }

  return (
    <Button color="inherit" onClick={doLogout}>
      ログアウト
    </Button>
  )
}
