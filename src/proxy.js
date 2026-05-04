import { NextResponse } from 'next/server'
import { authClient } from './lib/auth-client';
import { auth } from './lib/auth';
import { headers } from 'next/headers';


export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(session){
        return NextResponse.next();
    }
    
  return NextResponse.redirect(new URL('/login', request.url))
}
 
 
export const config = {
  matcher: ['/details/:path*' , '/myprofile'],
}