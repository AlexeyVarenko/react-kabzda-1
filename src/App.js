
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
