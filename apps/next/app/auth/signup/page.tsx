'use client'

import { SignUpForm } from 'app/features/auth/components/SignUpForm'
import React from 'react'

export default function Page() {
  return (
    <SignUpForm
      onSubmit={async (email, password) => {
        // Handle form submission logic here
        console.log('Email:', email, 'Password:', password)
      }}
    />
  )
}
