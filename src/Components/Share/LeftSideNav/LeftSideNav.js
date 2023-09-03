import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function LeftSideNav() {
  const [categoryes,setCategory] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/new-category')
    .then(res => res.json())
    .then(data =>setCategory(data))
  },[])
  return (
    <div> All Category Length :{categoryes.length}
    
      <div>
        {
          categoryes.map(categorye => <p key={categorye.id}> <Link to={`/category/${categorye.id}`}>{categorye.name}</Link> </p>)
        }
      </div>

     </div>
  )
}

export default LeftSideNav