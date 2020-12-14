import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';  

export default class NavBar extends React.Component
{
    render(){
        return(
            // <ul classNameName="horizontal">
            //     <li classNameName="active atag"><Link to ="/">Home</Link></li>
            //     <li classNameName="atag"><Link to="/expenses">Expenses</Link></li>
            // </ul>
            <nav className="navbar navbar-expand-lg  navbar-dark color fixed-top bg-dark">
                <Link className="navbar-brand text-success" to="/">Train your skill</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/my">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="my">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-1">
                        <li className="nav-item">
                            
                            <Link className="nav-link" to="/">Home</Link>
					    </li>
                        <li className="nav-item dropdown">
							<Link to ="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Online Test</Link>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li className="dropdown-submenu">
                                    <Link to ="/" className="dropdown-item dropdown-toggle">
                                    Aptitude
                                    </Link>
								
									<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item" to="/quiz">
												Arithmetic
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/quiz">
												Data Interpretation
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/quiz">
												Logical
											</Link>
										</li>
									</ul>
								</li>
								<li className="dropdown-submenu">
									<Link className="dropdown-item dropdown-toggle" to="/">
										Programming
									</Link>
									<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item" to="/quiz">C</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/quiz">C++</Link>
										</li>
										<li className="dropdown-submenu">
											<Link className="dropdown-item dropdown-toggle" to="/">Java</Link>
											<ul className="dropdown-menu">
												<li>
													<Link className="dropdown-item" to="/quiz">
														Core Java
													</Link>
												</li>
												<li>
													<Link className="dropdown-item" to="/quiz">
														Advanced Java
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link className="dropdown-item" to="/quiz">Python</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
                       
                    </ul>
                    
						<ul className="navbar-nav mr-auto" id="atend">
							<li className="nav-item dropdown dmenu">
								<Link className="nav-link dropdown-toggle" to="" id="navbardrop" data-toggle="dropdown">
									{this.props.user}
								</Link>
								<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item" to="/progress">
												Progress
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/profile">
												Profile
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/logout" onClick={(e)=>{this.props.logout()}}>
												LogOut
											</Link>
										</li>
								</ul>
							</li>
						</ul>
					
                </div>
            </nav>         
        )
    }
}