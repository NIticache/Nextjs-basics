import React from 'react'

const productDetail = ({params}:{params:{productid:string}}) => {
console.log(params ,"params${id}")
  return (
    <div>
      Details of product {params?.productid}
    </div>
  )
}

export default productDetail
