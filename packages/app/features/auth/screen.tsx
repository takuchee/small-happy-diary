import { YStack } from 'tamagui'
import { LoginForm } from './components/LoginForm'
// import { supabase } from 'app/utils/supabase'

export function LoginScreen() {
  // const handleLogin = async (email: string, password: string) => {
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   })
  //   if (error) throw error
  // }

  return (
    <YStack
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginForm
        onSubmit={() => {
          alert('Submit clicked!')
        }}
      />
    </YStack>
  )
}
