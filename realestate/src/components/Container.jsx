import React from 'react'

export default function Container({children}) {
  return (
    <div className="max-w-screen-xl mx-auto py-10">{children}</div>
  )
}
