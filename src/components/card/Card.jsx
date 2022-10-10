import "./card.css";
// import cardStyle from "./buton.modulus.css" gibi olur classname={cardStyle.title} gibi /yada/ classname={cardStyle["title"]} gibi
import Buton from "../button/Button"

const Card = ({Language, btn, img}) => {
    //console.log(props)
   // const{language, btn, img} = props; //!destr.
return (
    <div className="title"> 
        <h1>{Language}</h1>
        <img src={img} alt="img" />
        <Buton btn={btn} />
    </div>

)
}

export default Card;