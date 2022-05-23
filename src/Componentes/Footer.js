import Empty from "./Empty"
import './Footer.css'
export default function Footer({image, title, time}){

    return (
        <div>
            {image ===""? <Empty /> :
        <div className="container-footer">
             <img src={image}  width="64px" height="90px"/>
            <h3>{title}</h3>
            <h3>{time}</h3>
        </div>}
        </div>
        
    )
}   