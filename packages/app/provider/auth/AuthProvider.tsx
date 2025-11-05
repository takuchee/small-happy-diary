// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'
// import { User } from '@supabase/supabase-js'
// // import { createClient } from '../../utils/supabase/supabase'
// import { useRouter } from 'next/navigation'

// interface AuthContextType {
//   user: User | null
//   loading: boolean
//   signOut: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   loading: true,
//   signOut: async () => {},
// })

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     // 初期認証状態のチェック
//     const checkUser = async () => {
//       try {
//         const {
//           data: { user },
//         } = await createClient.auth.getUser()
//         setUser(user)
//       } catch (error) {
//         console.error('Error loading user:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     // 認証状態の変更を監視
//     const {
//       data: { subscription },
//     } = createClient.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null)
//       setLoading(false)
//     })

//     checkUser()

//     return () => {
//       subscription.unsubscribe()
//     }
//   }, [])

//   const signOut = async () => {
//     try {
//       await createClient.auth.signOut()
//       router.push('/login')
//     } catch (error) {
//       console.error('Error signing out:', error)
//     }
//   }

//   return <AuthContext.Provider value={{ user, loading, signOut }}>{children}</AuthContext.Provider>
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }
