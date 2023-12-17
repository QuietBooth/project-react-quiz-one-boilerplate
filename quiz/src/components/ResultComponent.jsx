import React from "react";

export default class ResultComponent extends React.Component{
    render(){
        return(
            <div className="Result" >
                    <h1>Result 🗒️</h1>
                <div className="Result-Box" >
                        <h2>You Need more Practice 😐 !</h2>
                        <h1>Your Score is 20%</h1>
                    <div className="detail-box" >
                        <div className="detail" >
                            <div className="detail-text-1" >
                                <h3>Total Number of Questions </h3>
                            </div>
                            <div className="detail-text-2" >
                                <h3>15</h3>  
                            </div>
                        </div>
                        <div className="detail" >
                            <div className="detail-text-1" >
                                <h3>Total Number of Questions </h3>
                            </div>
                            <div className="detail-text-2" >
                                <h3>15</h3>  
                            </div>
                        </div>
                        <div className="detail" >
                            <div className="detail-text-1" >
                                <h3>Total Number of Questions </h3>
                            </div>
                            <div className="detail-text-2" >
                                <h3>15</h3>  
                            </div>
                        </div>
                        <div className="detail" >
                            <div className="detail-text-1" >
                                <h3>Total Number of Questions </h3>
                            </div>
                            <div className="detail-text-2" >
                                <h3>15</h3>  
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div className="Result-Buttons" >
                        <button>Play Again</button>
                        <button>Back to Home</button>
                    </div>
            </div>
        )
    }
}