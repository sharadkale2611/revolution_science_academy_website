import React from 'react'
import CardData from './CardData'

export default function page() {
  const mydata = {}
  return (
    <>
      <CardData data={mydata} />
      <CardData data={mydata} />
      <CardData data={mydata} />
      <CardData data={mydata} />
    </>
  )
}
