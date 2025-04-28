'use client'

import { LoginForm } from 'app/features/auth/components/LoginForm'
import React from 'react'

export default function Page() {
  return (
    <LoginForm
      onSubmit={async (email, password) => {
        // Handle form submission logic here
        console.log('Email:', email, 'Password:', password)
      }}
    />
  )
}
