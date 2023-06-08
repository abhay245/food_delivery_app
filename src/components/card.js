import React from 'react'
import {Link} from 'react-router-dom'
export const Card = () => {
  return (
<div className="card m-3" style={{'width': '18rem'}}>
  <img src="https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/' className="btn btn-primary">Add to Cart</Link>
  </div>
  <div className='container w-100'>
    <select className='m-2 h-100 rounded'>
        {Array.from(Array(6),(e,i)=>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            )
        })}
    </select>
    <select className='m-2 h-100 success rounded'>
        <option value='half'>Half</option>
        <option value='full'>Full</option>
    </select>
    <span className='total price'>Total Price:</span>

  </div>
</div>
  )
}
