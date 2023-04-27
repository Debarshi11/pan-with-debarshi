import React from 'react';
import Card from './Card';

 function Tours({tours,removeTour}) {
  return (
    <div className='container'>
        <h2 className='title'>Plan with Debarshi</h2>
        {console.log(removeTour)}
        <div className='cards'>
            {
                tours.map((tour,index)=>{
                    return <Card {...tour} key={tour.id} removeTour={removeTour}/>
                })
            }
        </div>
    </div>
  )
}

export default Tours;