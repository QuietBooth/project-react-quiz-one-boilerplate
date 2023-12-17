import '../App.css';
import React from "react"
import QuizComponent from './QuizComponent ';

export default class HomeComponent extends React.Component {
    render(){
        return(
            <div className='Home' >
                <h1>Quiz App  </h1>
                <button  onClick={<QuizComponent/>} className='Play-button' >Play</button>
            </div>
        )
    }
}