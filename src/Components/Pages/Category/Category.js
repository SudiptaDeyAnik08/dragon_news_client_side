import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewSummaryCard from '../../Share/NewSummaryCard/NewSummaryCard';

function  Category() {

  const categoryNews = useLoaderData();

  return (
    <div><h2>This is category {categoryNews.length}</h2>
    
    {
      categoryNews.map( news => <NewSummaryCard key={news._id} news = {news}></NewSummaryCard>)
    }

    </div>
  )
}

export default Category