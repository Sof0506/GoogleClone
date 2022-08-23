import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import styles from '../styles/Home.module.css'
import {ViewGridIcon,MicrophoneIcon}from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
  const searchInputRef=useRef(null);
  const router=useRouter();
  const Search=(e)=>{
    e.preventDefault();

    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);


  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoBxdc41cpqz-7ipwR7smTudicsd8J0MBKL0yyup1qA&s" />
      </Head>
      {/*Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
      {/*Left */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>
      {/*Right*/}
      <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        {/*Icon */}
        <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer 
        rounded-full hover:bg-gray-100'/>

        {/*Avatar */}

        <Avatar 
      
        url="data:image/jpeg;base64,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"/>
      </div>
      </header>
      {/*Body */}
      <form className='flex flex-col items-center mt-30 flex-grow w-4/5'>
      <Image
      src="data:image/png;base64,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"
      width={350}
      height={120}
      
       />
       <div className='flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border-gray-300 px-5 py-3
         items-center sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500 '/>
        <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none'/>
        <MicrophoneIcon className='h-5'/>
       </div>
       <div className='flex flex-col w-1/2 space-y-2 justify-center mt-6 sm:space-y-0 sm:flex-row space-x-4'>
        <button onClick={Search} type="submit" className='button'>Google Search</button>
        <button onClick={Search} type="" className='button'>I'm feeling lucky</button>
       </div>
      </form>

      {/*Footer */}
      <Footer/>


      
    </div>
  )
}
