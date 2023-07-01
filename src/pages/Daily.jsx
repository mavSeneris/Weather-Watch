import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Daily() {
  const {city} = useOutletContext()

  return (
    <div><span style={{fontWeight : "700"}}>{city}</span> Daily forecast goes here</div>
  )
}
