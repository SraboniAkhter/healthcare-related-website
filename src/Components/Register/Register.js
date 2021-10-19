import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [name,setName] = useState([]);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const {signInUsingGoogle , createIdWithEmailAndPassword} = useAuth();


    const handleRegistration = e => {
             e.preventDefault();

    }

    const handleNameChange = e => {
         setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
         setPassword(e.target.value);
    }
    const handleCreateUser = () => {
        createIdWithEmailAndPassword(email, password,name)
        console.log(email, password,name)
    }

    return (
        <div className="mx-5 mt-5">
            {/* login with form */}
  <form onSubmit={handleRegistration}>
     <h3 className="text-info">Please Register Here</h3>
    <div className="form-group row">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="name" className="form-control" id="inputName3" required placeholder="name"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="e-mail"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required placeholder="password"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <div className="col-sm-10">
        <div className="row mb-3 text-danger">{error}</div>
        <br />
      <button onClick={handleCreateUser} type="submit" className="btn btn-info text-white">Register</button>
    </div>
  </div>
</form>
            <div>------------or-----------</div>
             <button onClick={signInUsingGoogle} className="btn btn-info text-white"><FontAwesomeIcon className="icon me-2 text-white" icon={faGoogle} />SignIn with Google</button>
             <br />
             <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;