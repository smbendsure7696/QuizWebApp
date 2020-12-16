import react from 'react';
import {Link} from 'react-router-dom';
import './quiz.css';
export default class Quiz extends react.Component
{
    render(){
        return(        
                    <div class="container">
                        <div class="row quizMain">
                                <div class="card w-70 ">
                                    <div class="card-body quizCard">
                                        <h2 class="card-title">Quiz on Title</h2>
                                        <p className="quizTimer">00:00</p>
                                        <p class="card-text">Questions 1 to 10</p>
                                        <p class="card-text">QUESTION</p>    
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                                        </div>

                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio2">Toggle this custom radio</label>
                                        </div>

                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio3">Toggle this custom radio</label>
                                        </div>    

                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio4">Toggle this custom radio</label>
                                        </div> 
                                        
                                    </div>
                                   
                                </div> 
                                <div className="quizBtn">
                                    <Link to="/" class="btn btn-primary">Next</Link> 
                                    <Link to="/" class="btn btn-primary">Prev</Link> 
                                    <Link to="/" class="btn btn-primary">Submit</Link>    
                                </div>
                        </div>
                        
                    </div>            
                                    
        )
    }
}