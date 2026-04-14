import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/register',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Store user in database
      try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            provider: account?.provider,
            providerAccountId: account?.providerAccountId,
          }),
        })
      } catch (error) {
        console.error('Failed to store OAuth user:', error)
      }
      return true
    },
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
})

export { handler as GET, handler as POST }
