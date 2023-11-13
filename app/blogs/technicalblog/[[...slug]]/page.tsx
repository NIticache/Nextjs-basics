import React from 'react'

export default function Tblog({params}:{params:{slug:string}}) {
console.log(params,"params")
if(params?.slug?.length===1)
  return (
    <div>
      Viewing the  blog test1
    </div>
  )

if(params?.slug?.length===2)
  return (
    <div>
      Viewing the blog test1test2
    </div>
  )
else
  return (

    <div>
      Viewing the blog out of condition {params?.slug} {JSON.stringify(params)}
    </div>
  )



}


