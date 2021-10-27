import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Register/Register';
import AddEvent from './Pages/Add Event/AddEvent';
import Admin from './Pages/Admin/Admin';
import SignUp from './Pages/SignUp/SignUp';
import MyEvent from './Pages/MyEvent/MyEvent';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <PrivetRoute path="/regi/:name">
            <Register/>
          </PrivetRoute>

          <Route path="/sign">
            <SignUp/>
          </Route>

          <Route path="/myEvnt">
            <MyEvent/>
          </Route>

          <Route path="/addEvnt">
            <AddEvent/>
          </Route>

          <Route path="/admin">
            <Admin/>
          </Route>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
