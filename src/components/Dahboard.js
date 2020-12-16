import react from 'react';
//import {Link} from 'react-router-dom';
import NavBar from './NavBar';
export default class Dashboard extends react.Component
{
    render(){
        return(        
                    <div class="">
                        <NavBar user = {this.props.username} logout = {this.props.logout}
                        quizLoad = {this.props.quizLoad}/>
                        <div className="row">
                            <div className="col-12">
                                <div class="row dashboardMain mentee-detail-banner-row">
                                    <div class="col-2 mentee-section-col d-flex flex-column">
                                            <div class="section-title">Attendance</div>
                                            <div class="sub-title">Overall</div>
                                            <div class="sub-title">(134/134)</div>
                                            <div class="section-jumbotron">100%</div>
                                            <div class="sub-title">Last 7 lectures</div>
                                            <div class="sub-title">(6/7)</div>
                                            <div class="section-jumbotron">85%</div>
                                    </div>
                                    <div class="col-2 mentee-section-col d-flex flex-column">
                                            <div class="section-title">Attendance</div>
                                            <div class="sub-title">Overall</div>
                                            <div class="sub-title">(134/134)</div>
                                            <div class="section-jumbotron">100%</div>
                                            <div class="sub-title">Last 7 lectures</div>
                                            <div class="sub-title">(6/7)</div>
                                            <div class="section-jumbotron">85%</div>
                                    </div>
                                    <div class="col-2 mentee-section-col d-flex flex-column">
                                            <div class="section-title">Attendance</div>
                                            <div class="sub-title">Overall</div>
                                            <div class="sub-title">(134/134)</div>
                                            <div class="section-jumbotron">100%</div>
                                            <div class="sub-title">Last 7 lectures</div>
                                            <div class="sub-title">(6/7)</div>
                                            <div class="section-jumbotron">85%</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                                
                                    
        )
    }
}