import React from 'react'

const ShimmerCard = () => {
  return (
    <>
    <div style={{border:'1px solid black', width:"220px",padding:"5px"}}>
        <div className="box" style={{width:'200px',height:'300px',backgroundColor:'gray'}}></div>
        <div className="small-box"  style={{width:'200px',height:'5px',backgroundColor:'gray',marginTop:'10px'}}></div>
        <div className="small-box"  style={{width:'200px',height:'5px',backgroundColor:'gray',marginTop:'10px'}}></div>
        <div className="small-box"  style={{width:'200px',height:'5px',backgroundColor:'gray',marginTop:'10px'}}></div>
    </div>
    </>
  )
}

export default ShimmerCard