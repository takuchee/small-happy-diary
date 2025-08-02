'use client'
import { useState, useCallback } from 'react'
import { Button, Input, YStack, Text } from 'tamagui'

interface AuthFormProps {
  type: 'login' | 'signup'
  onSubmit: (email: string, password: string) => Promise<void>
  isLoading?: boolean
  error?: string
}

export function AuthForm({ type, onSubmit, isLoading, error }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = useCallback(async () => {
    await onSubmit(email, password)
  }, [email, password, onSubmit])

  return (
    <YStack space="$4">
      {error && <Text color="$red10">{error}</Text>}
      <Input
        placeholder="メールアドレス"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input placeholder="パスワード" secureTextEntry value={password} onChangeText={setPassword} />
      <Button themeInverse onPress={handleSubmit} disabled={isLoading}>
        {type === 'login' ? 'ログイン' : '新規登録'}
      </Button>
    </YStack>
  )
}
