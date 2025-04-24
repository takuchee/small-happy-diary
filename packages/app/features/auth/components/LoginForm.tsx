import { Button, Input, YStack, Text } from 'tamagui'
import { useState } from 'react'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <YStack space="$4" p="$4">
      <Input
        placeholder="メールアドレス"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Input placeholder="パスワード" value={password} onChangeText={setPassword} secureTextEntry />
      <Button onPress={() => onSubmit(email, password)}>ログイン</Button>
    </YStack>
  )
}
