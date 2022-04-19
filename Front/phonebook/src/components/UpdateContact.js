import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useForm } from '../hooks/useForm';

export const UpdateContact = ({ modalEdit, id, firstname, lastname, p, setContact }) => {

    const [{ fname, lname, phone }, handleinputChanged, handleReset] = useForm({
      id: id,
      fname: firstname,
      lname: lastname,
      phon: p,
    });

    const handleUpdate = async () => {
      console.log(id, fname, lname, phone)
      // await fetch("http://localhost:4000/api/contacts", {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(),
      // })
      //   .then((response) => {
      //     console.log("recuperando contactos");
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setState(data);
      //     console.log(data);
      //   });
    };

  return (
    <Modal isOpen={modalEdit}>
      <ModalHeader>
        <p>Update Data Contact</p>
      </ModalHeader>
      <ModalBody>
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
      </ModalFooter>
    </Modal>
  );
};
