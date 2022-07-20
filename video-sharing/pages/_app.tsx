import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }: AppProps) {
  //difine server sider rendering at the start(true)
  const [isSSR, setIsSSR] = useState(true);
  //define when it's not serverside rendered(false)
  useEffect(() => {
    setIsSSR(false);
  }, []);

  //if server side rendered won't show the components
  if (isSSR) return null;
  return (
    <div>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar/>
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
     </div> 
  ); 
}

export default MyApp
