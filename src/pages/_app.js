import { SessionProvider } from "next-auth/react"
import Header from "../components/Header"
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css"
import Router from "next/router"
import { useEffect } from "react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router
}) {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  useEffect(() => {
    Router.events.on("routeChangeComplete", routeChange );
    Router.events.on("routeChangeStart", routeChange );
    Router.push(window.location.pathname);
  }, [])

  return (
    <SessionProvider session={session}>
      <Header/>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </SessionProvider>
  )
}
