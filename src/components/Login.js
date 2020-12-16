import react from 'react';
import './style.css';
import MainPage from './MainPage'
export default class Login extends react.Component
{
    constructor()
    {
        super();
        this.state = {
            username:"",
            password:"",
            success : "",
            currUname : ""
        }
        this.onchange = this.onchange.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    onchange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    login(e)
    {
        
        const uname = this.state.currUname;
        const pass = this.state.password;

        if(uname.trim()!=="" && pass.trim()!=="")
        {
            if(uname==="Shubham" && pass==="gs")
                this.setState({
                    success:true,
                    username:uname,
                    currUname:"",
                    password:""
                })
            else
                alert("userName or Password is incorrect");
        }
        else
        {
            alert("ussename and password must not be empty");
        }
    }

    logout(e)
    {
        this.setState({
            success:false
        })
    }

    render(){
        return (
            this.state.success ? <MainPage username = {this.state.username}
                logout = {this.logout}
            /> : (
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first">
                    </div>
                    <form onSubmit={this.login}>
                    <input type="text" class="fadeIn second" name="currUname" placeholder="User Name"
                        value = {this.state.currUname} 
                        onChange={this.onchange}
                    />
                    <input type="password" class="fadeIn third" name="password" placeholder="password" 
                        value = {this.state.password}
                        onChange={this.onchange}
                    />
                    <input type="submit" class="fadeIn fourth"/>
                    </form>


                    <div id="formFooter">
                         <a class="underlineHover" href="/signUp">SignUp</a>
                    </div>

                </div>
            </div>)
        )
    }
}