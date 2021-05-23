import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.gifs.map(gif => <div><img key={gif.url} src={gif.url} alt="gif"/></div>)}
        
    </div>
  )
}

export default GifList