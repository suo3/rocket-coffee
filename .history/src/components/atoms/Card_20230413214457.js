import React from 'react'

export const Card = ({children,highlight, backgroundColor}) => {
  const cardClassName = highlight ? "card sale":"card";
  return <div className={cardClassName} style={{backgroundColor:backgroundColor}}>{children}</div>
}
