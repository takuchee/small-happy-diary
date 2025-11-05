'use client'

import { supabase } from 'app/utils/supabase/supabase'
import { YStack, Button, Text } from 'tamagui'
import { AuthForm } from './AuthForm'
import { Link } from 'solito/link'

interface SignUpFormProps {
  isLoading?: boolean
  error?: string
}

export function SignUpForm({ isLoading, error }: SignUpFormProps) {
  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (data.user && !error) {
      window.location.href = '/'
    }
    console.log('SignUp Data:', data)
  }

  return (
    <YStack p="$4" space="$4">
      <AuthForm type="signup" onSubmit={signUp} isLoading={isLoading} error={error} />
      <YStack alignItems="center" space="$2">
        <Text>アカウントをお持ちの方</Text>
        <Link href="/auth/login">
          <Button>ログイン</Button>
        </Link>
      </YStack>
    </YStack>
  )
}
