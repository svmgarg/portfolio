import React from 'react';




function Footer  ()  {
  const style = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    borderStyle:'dashed',
    backgroundColor:'#000',
    color:'#848484'
  };

  return (
    <div  id="footer" style ={style}>
      <h1>Hello World</h1>
      <p>Welcome to my Footer</p>
    </div>
  )
}
export default Footer