import React from 'react'
import Head from "next/head"
import Header from '../components/Header'
import {API_KEY,CONTEXT_KEY} from "../keys"
import Response from "../response"
import { useRouter } from 'next/router'
import SearchRes from '../components/SearchRes'
function Search({results}) {
  const router = useRouter();
  console.log("Results",results);
  return (
    <div>
    <Head>
    <title>{router.query.term}--Google Search</title>
    </Head>
    {/*Header */}
    <Header/>
    <SearchRes results={results}/>

    {/*Search Results */}
    
    </div>
  )
}

export default Search;

export async function getServerSideProps(context){
  const useDummyData = false;
  const startIndex=context.query.start || "0";

  const data = useDummyData? Response: await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

    return {
      props:{
        results:data
      }
    } 
}