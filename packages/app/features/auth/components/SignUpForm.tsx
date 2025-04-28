import { supabase } from 'app/utils/supabase/supabase'
import { YStack } from 'tamagui'
import { AuthForm } from './AuthForm'

interface SignUpFormProps {
  isLoading?: boolean
  error?: string
}

export function SignUpForm({ isLoading, error }: SignUpFormProps) {
  const signUp = async (email: string, password: string) => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
    })
    console.log('SignUp Data:', data)
  }

  return (
    <YStack p="$4" space="$4">
      <AuthForm type="signup" onSubmit={signUp} isLoading={isLoading} error={error} />
    </YStack>
  )
}
