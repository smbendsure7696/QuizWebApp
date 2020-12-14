import react from 'react';
import {Link} from 'react-router-dom';
import './quiz.css';
export default class Quiz extends react.Component
{
    render(){
        return(
            <div class="d-flex" id="wrapper">

                <div id="page-content-wrapper" > 

                    
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">

                            

                        
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-12">
                            
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                            
                            </div>
                        </div>
                        <div class="quizefooter">
                            <div class="row">
                            <div class="col-lg-9">
                                <Link to="/">
                                <button type="button" class="btn btn-primary btn-sm buttonback btn mt-3 btn-block rounded-pill text-uppercase tab">Previous</button>
                                </Link>
                                <Link to="/">
                                <button type="button" class="btn btn-primary btn-sm buttonnext btn mt-3 btn-block rounded-pill text-uppercase tab">Next</button>
                                </Link>
                            </div>
                            <div class="col-lg-3">
                                <Link to="/">
                                <button type="button" class="btn btn-primary btn-sm buttonskip btn mt-3 btn-block rounded-pill text-uppercase tab">Skip</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                        
                    </div>            
                                        
                </div>

            </div>
        )
    }
}