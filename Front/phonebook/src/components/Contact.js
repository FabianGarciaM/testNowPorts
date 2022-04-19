import React, { useEffect, useState } from 'react'
import { GetAllContacts } from '../helpers/getContacts';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useForm } from '../hooks/useForm';

export const Contact = ({ _id, FirstName, LastName, Phone, setContact }) => {

    const [{ id, fname, lname, phone }, handleinputChanged, handleReset] = useForm({
      id: _id,
      fname: FirstName,
      lname: LastName,
      phone: Phone,
    });
    const [state, setState] = useState('');
    const [modalEdit, setModalEdit] = useState(false);
    const nodeRef = React.useRef(modalEdit);
    useEffect(() => {
      GetAllContacts().then((data) => {
        setContact(data);
      });
    }, [state]);
    

  const handleUpdate = async () => {
      console.log(fname, lname, phone)
    await fetch("http://localhost:4000/api/upcontacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id, fname, lname, phone }),
    })
      .then((response) => {
        console.log("recuperando contactos");
        return response.json();
      })
      .then((data) => {
        setState(data);
        console.log(data);
      });
  };

  const handleDelete = async () => {
    await fetch("http://localhost:4000/api/dcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: _id }),
    })
      .then((response) => {
        console.log("recuperando contactos");
        return response.json();
      })
      .then((data) => {
        setState(data);
        console.log(data);
      });
  };

  return (
    <>
      <tr>
        <td>{FirstName}</td>
        <td>{LastName}</td>
        <td>{Phone}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={() => {
              setModalEdit(!modalEdit);
            }}
          >
            update
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={handleDelete}
          >
            delete
          </button>
        </td>
      </tr>
      <Modal ref={nodeRef} isOpen={modalEdit}>
        <ModalHeader>
          <p>Update Data Contact</p>
        </ModalHeader>
        <ModalBody >
          <div>
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
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-sm btn-outline-success"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => setModalEdit(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
