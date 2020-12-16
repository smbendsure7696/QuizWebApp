import react from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Quiz from './Quiz';
import Dashboard from './Dahboard';
export default class MainPage extends react.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isQuiz: false
        }
        this.quizLoad = this.quizLoad.bind(this);
    }

    quizLoad(e)
    {
        this.setState({
            isQuiz : true
        })
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    {this.state.isQuiz ? null : <NavBar user = {this.props.username} logout = {this.props.logout}
                        quizLoad = {this.quizLoad}
                        /> 
                    }
                    
                    <Switch>
                        <Route exact path="/" component={() => {
                            return <Dashboard user = {this.props.username} logout = {this.props.logout}
                            quizLoad = {this.quizLoad}/>
                            }}/>
                        <Route exact path="/quiz" component={Quiz}/>
                           
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}