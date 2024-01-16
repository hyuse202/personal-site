import '@/styles/globals.css';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import  NextNProgress  from 'nextjs-progressbar';
import Header from '@/partials/Header';
import RouteTransitions from '@/components/RouteTransition';
import { SkeletonTheme } from 'react-loading-skeleton';
import Footer from '@/partials/Footer';
import { Toaster } from 'sonner';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <NextNProgress
                options={{
                    showSpinner: false,
                }}
                color="#a855f7"
                startPosition={0.1}
                stopDelayMs={100}
                height={3}
                showOnShallow={false}
      />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10,
          duration: 0.5,
        }}
      >
      <Header/>
      <RouteTransitions>
        <main className='pt-20 px-[15px] xs:px-[25px] mx-auto max-w-4xl'>
          <SkeletonTheme baseColor="#232329" highlightColor="#2a2a32">
          {/* <Script
              src="https://araxyso.xyz/theme.js"
              strategy="beforeInteractive"
          /> */}
          <Component {...pageProps} />
          {/* <Analytics /> */}
          <Toaster richColors theme="dark" closeButton />
          </SkeletonTheme>
          <Footer />
        </main>
      <Component {...pageProps} />
      </RouteTransitions>
      </motion.div>
    </main>
  );
}
