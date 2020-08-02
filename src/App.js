import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";


// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <React.Suspense  fallback={<Preloader />}>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    {/*<Route path="/news" render={News}/>*/}
                    {/*<Route path="/music" render={Music}/>*/}
                    {/*<Route path="/settings" render={Settings}/>*/}
                    {/*<Route path="/friends" render={() => <Friends*/}
                    {/*    // store={props.store}*/}
                    {/*/>}/>*/}
                </div>
                </React.Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
            initialized: state.app.initialized
    });

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
