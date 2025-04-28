import { LoginForm } from '../components/LoginForm'
import { SignUpForm } from '../components/SignUpForm'

interface AuthScreenProps {
  type: 'login' | 'signup'
}

export function AuthScreen({ type }: AuthScreenProps) {
  return (
    <div>
      <h1>{type === 'login' ? 'Login' : 'Sign Up'}</h1>
      {type === 'login' ? <LoginForm /> : <SignUpForm />}
    </div>
  )
}
