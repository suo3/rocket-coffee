import React from 'react';
import "../../theme.css";

export const Card = ({children,highlight, backgroundColor}) => {
  const cardClassName = highlight ? "card sale":"card";
  return <div className={cardClassName} style={{backgroundColor:backgroundColor}}>{children}</div>
}
