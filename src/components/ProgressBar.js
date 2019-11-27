import React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"
import './style.css';



class ProgressBars extends React.Component{
    
    render(){
        const bikenow = 80;
        const grandmaNow=10;
        const hpNow=20;
        return(
            <div className="progressBars">
                <div class="progressLabel">
                    <h4>Bike target: $100    Due: June 1th 2020</h4>
                    </div>
            <ProgressBar animated variant="success" now={bikenow} label={`${bikenow}%`}/>
            <div className="progressLabel">
                    <h4>Grandma's Birthday Gift: $30 Due: Janurary 1th 2020</h4>
                    </div>
            <ProgressBar animated variant="warning" now={grandmaNow} label={`${grandmaNow}%`}/>
            <div className="progressLabel">
                    <h4>Harry Potter book: $20 Due: March 1th 2020</h4>
                    </div>
            <ProgressBar animated variant="info" now={hpNow} label={`${hpNow}%`}/>
            </div>
            
            
        )
    }
}
export default ProgressBars