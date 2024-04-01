import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const OPTIONS = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUPLIC_GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUPLIC_GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
};

export const handler = NextAuth(OPTIONS);
export {handler as GET , handler as POST}