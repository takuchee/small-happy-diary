import { AuthForm } from './AuthForm'
import { supabase } from 'app/utils/supabase/supabase'
import { YStack } from 'tamagui'

interface LoginFormProps {
  isLoading?: boolean
  error?: string
}

export function LoginForm({ isLoading, error }: LoginFormProps) {
  const signIn = async (email: string, password: string) => {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log('SignIn Data:', data)
  }

  return (
    <YStack p="$4" space="$4">
      <AuthForm type="login" onSubmit={signIn} isLoading={isLoading} error={error} />
    </YStack>
  )
}
