import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewSummaryCard from '../../Share/NewSummaryCard/NewSummaryCard';

function Home() {
  const allNews = useLoaderData();
  return (
    <div><h2>Dragon News...! Home: {allNews.length } </h2>
    {
      allNews.map( news => <NewSummaryCard key={news._id} news={news}></NewSummaryCard>)
    }

    </div>
  )
}

export default Home