'use client'

import { AuthForm } from './AuthForm'
import { supabase } from 'app/utils/supabase/supabase'
import { YStack, Button, Text } from 'tamagui'
import { Link } from 'solito/link'

interface LoginFormProps {
  isLoading?: boolean
  error?: string
}

export function LoginForm({ isLoading, error }: LoginFormProps) {
  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (data.user && !error) {
      window.location.href = '/'
    }
    console.log('SignIn Data:', data)
  }

  return (
    <YStack p="$4" space="$4">
      <AuthForm type="login" onSubmit={signIn} isLoading={isLoading} error={error} />
      <YStack alignItems="center" space="$2">
        <Text>アカウントをお持ちでない方</Text>
        <Link href="/auth/signup">
          <Button>新規登録</Button>
        </Link>
      </YStack>
    </YStack>
  )
}
