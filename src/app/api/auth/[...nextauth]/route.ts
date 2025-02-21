import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
  ],
  pages: {
    signIn: '/', 
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`; 
    }
  }
});

export { handler as GET, handler as POST };
