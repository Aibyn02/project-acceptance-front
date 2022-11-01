import React, {Component} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import img2 from "./imgs/aitu3.png";
import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import ProjectRequestModerator from "./components/project-request-moderator"
import BoardAdmin from "./components/board-admin.component";
import EventBus from "./common/EventBus";
import EditProject from "./components/Edit-Project";
import AcceptPage from "./components/accept-page";
import MainPage from "./components/main-page";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        const {currentUser, showModeratorBoard} = this.state;

        return (
            <div className="font-classic">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="https://astanait.edu.kz/en/main-page/" className="navbar-brand">
                        <img src={img2} className="logoaitu" alt="asd"/>
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Main
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Projects
                            </Link>
                        </li>

                        {showModeratorBoard && (
                            <li className="nav-item">
                                <Link to={"/mod"} className="nav-link">
                                    ModBoard
                                </Link>
                            </li>
                        )}

                        {showModeratorBoard && (
                            <li className="nav-item">
                                <Link to={"/requests"} className="nav-link">
                                    Requests
                                </Link>
                            </li>
                        )}

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    AddProject
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    SignUp
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/user" element={<BoardUser/>}/>
                        <Route path="/mod" element={<BoardModerator/>}/>
                        <Route path="/requests" element={<ProjectRequestModerator/>}/>
                        <Route path="/admin" element={<BoardAdmin/>}/>
                        <Route exact path="/edit-project/:id" element={<EditProject/>}/>
                        <Route exact path="/accept/:id" element={<AcceptPage/>}/>
                    </Routes>
                </div>

                <div>
                    <Routes>
                        <Route exact path="/" element={<MainPage/>}/>
                    </Routes>
                    <br/>
                </div>

                <div className="footer">
                    <div className="container-fluid">
                        <div className="row text-center text-white">
                            <div className="col">
                                <br/>
                                <br/>
                                <h5>Astana IT University</h5>
                                <br/>
                                <img src={img2} className="logoaitu " alt="asd"/>
                            </div>
                            <div className="col">
                                <br/>
                                <br/>
                                <h5>Mission of the University</h5>
                                <br/>
                                <p className="text-secondary">Astana IT University provides digital transformation through training, research and successful innovations.</p>
                            </div>
                            <div className="col">
                                <br/>
                                <br/>
                                <h5>Contacts</h5>
                                <br/>
                                <p className="text-secondary"> e-industry@astanait.edu.kz <br/>+7(7172)645-710 <br/> info@astanait.edu.kz</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
