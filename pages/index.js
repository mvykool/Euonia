import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <Head>
    <title>Euonia | Home</title>
    <meta name='keywords' content="" />
   </Head>
    <div className='home'>
      <div className='layer'>

        <div className='home-container'>
         <div className='home-box-title'>
         <h1 className='home-title'>Euonia</h1>
          <div className='home-text'>
            <p>[u-noy-a] Greek</p>
            <p>(n.) a pure and well balanced mind, a good spirit.
            </p>
            <span>Beautiful thinking</span>
            <h3>Discover and learn about ancient Greek and Roman art, their history, places, and Gods.  
             </h3>
          </div>
         </div>

         <div className='home-box'/>
         
         <div className='home-img'>
         <Image src="/img.png" width={510} height={700} className="home-hero"/>
         </div>
        </div>

      </div>
    </div>
    </div>
  )
}
