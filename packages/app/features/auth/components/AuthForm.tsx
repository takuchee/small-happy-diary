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
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = async () => {
    if (type === 'signup' && password !== confirmPassword) {
      setPasswordError('パスワードが一致しません')
      return
    }
    setPasswordError('')
    await onSubmit(email, password)
  }

  return (
    <YStack space="$4">
      {error && <Text color="$red10">{error}</Text>}
      {passwordError && <Text color="$red10">{passwordError}</Text>}
      <Input
        placeholder="メールアドレス"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input placeholder="パスワード" secureTextEntry value={password} onChangeText={setPassword} />
      {type === 'signup' && (
        <Input
          placeholder="パスワード(確認)"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      )}
      <Button themeInverse onPress={handleSubmit} disabled={isLoading}>
        {type === 'login' ? 'ログイン' : '新規登録'}
      </Button>
    </YStack>
  )
}
