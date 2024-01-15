import classes from './style.module.scss'
import image1 from "../images/bg-stars.svg"
import image2 from  "../images/pattern-hills.svg"

const Background = () => {
  return (
    <div className={classes.container} >
      <div className={classes.tittle}>
        <h1> WE ARE LAUNCHING SOON</h1>
      </div>
      <div className={classes.image}> 
      <img src= {image1} alt="" /> 
      </div>
      <div className={classes.image2}>
      <img src= {image2} alt="" />
      </div>
      
    </div>
  )
}

export default Background