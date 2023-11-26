import 'bootstrap/dist/css/bootstrap.min.css';

function CardSize(props) {
  return (
    <>
     <div className="card" style={{ width: '18rem' }}>
       <div className="card-body">
         {props.children}
       </div>
      </div>;
    </>)
}

function Card(props) {
  if (props.img == ""){
    return (
      <CardSize> 
        <>   
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> {props.message}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a> 
        </>
      </CardSize>
    );
  }else{
    return (
      <CardSize> 
        <>
          <img src={props.img} className="card-img-top" alt="Image Card" ></img>     
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> {props.message}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
        </>
      </CardSize>
    );
  }
}



export default Card;