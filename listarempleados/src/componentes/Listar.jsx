import React from 'react'



const Listar = (props) => {
  return (
    <div>           
        <div class="card" style={{width: "18rem"}}>
          <div className="row">
            <div className="col-4">
                <img src={props.img} className="card-img-top" alt="..." />
            </div>
            <div className="col-8">
                 <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.comment}</p>
                    <a href="#" class="btn btn-primary">{props.profesion}</a>
                  </div>
            </div>
          </div>                     
        </div>        
    </div>
  )
}

export default Listar
