import React from 'react'

export const ProductList = ({status, ...otherProps}) => {
    if(status === statusTypes.loading) {
        return <Loading />
    }
  return (
    <div>ProductList</div>
  )
}

export const Loading = () => {
    return <h3>Loading...</h3>
}

export const statusTypes= {
  loading:"loading",
  errored:"errored",
  loaded:"Loaded"
}
