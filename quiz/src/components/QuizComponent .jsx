import '../App.css';
import React from "react"

export default class QuizComponent extends React.Component {
    render(){
        return(
            <div className='Quiz' >
                <h1>Question❔</h1>
                <h2>Which is the only mammal that can Jump ?</h2>
                <div className='grid' >
                    <button>Dog</button>
                    <button>Elephant</button>
                    <button>Goat</button>
                    <button>Lion</button>
                </div>
                <div className='Quiz-button' >
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
        )
    }
}
