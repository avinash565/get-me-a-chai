import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"


export const authoptions = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github" || account.provider == "google") {
        await connectDB()
        // check if user exists in the database
        const currentuser = await User.findOne({ email: user.email })
        console.log(currentuser)
        if (!currentuser) {
          // create a new user
          const newuser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })

        }
        return true

      }
    },
    async session({ session, token, user }) {
      const dbuser = await User.findOne({ email: session.user.email })
      console.log(dbuser)
      session.user.name = dbuser.username
      return session
    }
  }
})

export { authoptions as GET, authoptions as POST } 