import React, { useEffect, useState } from "react";
import { GetAllContacts } from "../helpers/getContacts";
import { useForm } from "../hooks/useForm";

export const NewContact = ({setContact}) => {
    const [state, setState] = useState('');
    const [{ fname, lname, phone }, handleinputChanged, handleReset] = useForm({
      fname: "",
      lname: "",
      phone: 0,
    });

    useEffect(() => {
      GetAllContacts().then((data) => {
        setContact(data);
      });
    }, [state]);
    
    

    const NewContact = (e) => {
      e.preventDefault();
      fetch("http://localhost:4000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ Fname: fname, Lname: lname, Phone: phone }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setState(data)
          handleReset();
        });
    };



  return (
    <>
      <h3>New Contact</h3>
      <form onSubmit={NewContact}>
        <div className="col-auto">
          <label className="visually-hidden">First Name</label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={fname}
            onChange={handleinputChanged}
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lname"
            value={lname}
            onChange={handleinputChanged}
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={phone}
            onChange={handleinputChanged}
          />
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-info"
          onClick={NewContact}
        >
          Add
        </button>
      </form>
    </>
  );
};
