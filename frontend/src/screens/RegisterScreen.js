import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterScreen = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password and confirm Password are not matched");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, userInfo, redirect]);

  return (
    <div>
      <form className='form' onSubmit={SubmitHandler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          error && <MessageBox variant='danger'>{error}</MessageBox>
        )}
        <div>
          <label htmlFor='name'>Name </label>
          <input
            type='text'
            id='name'
            placeholder='Enter name'
            required
            onChange={(e) => setName(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='Enter email'
            required
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='confirmPassword'
            id='confirmPassword'
            placeholder='Enter password again'
            required
            onChange={(e) => setConfirmPassword(e.target.value)}></input>
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account ?
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
