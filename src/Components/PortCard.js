import React from 'react'

function PortCard(props) {
    return (
        <>
          <div className="col-md-4">
          <div className="card" style={{width: "18rem"}}>
  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
 
</div>
          </div>
        </>
    )
}

export default PortCard;
