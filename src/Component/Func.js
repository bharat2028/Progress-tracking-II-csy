import image from './image/skcetedu.jpg';
import image1 from './image/skcet react.jpg'
function Func(){
  return <Gree name="Romeo"/>
}
function Gree(props)
{
  return(
    <>
        <h1>hi, I am {props.name} ! nice to meet you juliot</h1>
        <img src={image}/><br></br><hr></hr>
        <img src={image1}/>
        </>
  );
}
export default Func;