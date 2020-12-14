import react from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Quiz from './Quiz';
export default class MainPage extends react.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isQuiz: true
        }
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    {this.state.isQuiz ? null : <NavBar user = {this.props.username} logout = {this.props.logout}/> }
                    
                    <Switch>
                        <Route exact path="/quiz" component={Quiz}/>
                           
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}