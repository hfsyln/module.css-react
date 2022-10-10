import butonStyle from "../button/button.module.css" //module sistemine göre

const Button = ({btn}) => {
    console.log(btn)
  return (
    <div className={butonStyle["title"]}>
        <button className={butonStyle["btn-blue"]}>{btn}</button>
    </div>
  )
}

export default Button;