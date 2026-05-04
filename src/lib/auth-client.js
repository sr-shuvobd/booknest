import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://booknest-bd.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()