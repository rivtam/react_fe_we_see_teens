import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import { RecoilRoot, useRecoilSnapshot } from "recoil";

import { SnackbarProvider } from "notistack";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.


// setup fake backend
import { fakeBackend } from '../helpers';
fakeBackend();


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {

  

  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <SessionProvider>

      <Component {...pageProps} />
      </SessionProvider>
      </SnackbarProvider>
    </RecoilRoot>
  )
}