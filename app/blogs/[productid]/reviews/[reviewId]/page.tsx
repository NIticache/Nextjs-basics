import React from 'react'

const page = ({params}:{params:{productid:string,reviewId:string}}) => {
  return (
    <div>
     {params.reviewId} Review of product {params.productid} 
    </div>
  )
}

export default page
