
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './../src/redux/App-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              < Route path="/dialogs/*"
                element={<DialogsContainer />} />

              <Route path='/profile/:userId'
                element={<ProfileContainer />} />
              <Route path='/profile/*'
                element={<ProfileContainer />} />

              < Route path="/users/*"
                element={<UsersContainer />} />

              < Route path="/news/*"
                element={<News />} />

              < Route path="/login/*"
                element={<Login />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
