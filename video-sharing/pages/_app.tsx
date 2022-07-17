import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  //difine server sider rendering at the start(true)
  const [isSSR, setIsSSR] = useState(true);
  //define when it's not serverside rendered(false)
  useEffect(() => {
    setIsSSR(false);
  }, []);

  //if server side rendered won't show the components
  if(isSSR) return null
  return (
    <div>
      <Navbar />
      <div className='flex gap-6 md:ga-20'>
        <div className='h-[92vh] overflow-hiden xl:hover:overflow-auto'>
          <Sidebar/>

        </div>
        <div className='mt-4 flax flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
     </div> 
  ); 
}

export default MyApp
