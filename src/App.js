import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/Home/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Home/Services/Services';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Doctors from './Components/Doctor/Doctors/Doctors';
import MakeAppointment from './Components/MakeAppointment/MakeAppointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route path="/service">
            <Services />
          </Route>
          <PrivateRoute path="/appointment/:serviceId">
            <Appointment />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/doctor">
            <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute path="/makeAppointment">
            <MakeAppointment />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
