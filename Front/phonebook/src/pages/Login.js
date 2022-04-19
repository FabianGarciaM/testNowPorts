import React from 'react'
import { useForm } from '../hooks/useForm';

export const Login = ({setToken}) => {

  const [{user, password}, handleinputChanged] = useForm({
    user: "",
    password: ""
  });

  const handleSubmint = (e) =>{
    e.preventDefault();
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: user, password: password }),
    }).then(resp => {
      return resp.json();
    }).then(data =>{
        if(data.token !== undefined){
          setToken(data.token)
        }else{
          console.log(data.message)
        }
    });
    //handleReset;
  }

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmint}>
        <div className="col-auto">
          <label className="visually-hidden">Email</label>
          <input
            type="text"
            className="form-control"
            name="user"
            value={user}
            onChange={handleinputChanged}
            placeholder="Nombre"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleinputChanged}
            placeholder="Password"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            login
          </button>
        </div>
      </form>
      <hr></hr>
      {/* <button type="button" className="btn btn-primary">
        password
      </button>
      <button type="button" className="btn btn-primary">
        NewUser
      </button> */}
    </>
  );
}
