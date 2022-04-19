import React, { useEffect, useState } from 'react'

import { ListContacts } from '../components/ListContacts';
import { NewContact } from '../components/NewContact';

import { GetAllContacts } from '../helpers/getContacts';

//import { GetAllContacts } from '../helpers/getContacts';

export const Contacts = ({token}) => {
  const [contacts, setContact] = useState([]);

   useEffect(() => {
     GetAllContacts().then((data) => {
       setContact(data);
     });
   }, []);

  return (
    <>
      <h1>Lista de Contactos</h1>
      <hr />
      <div className="row">
        <div className="col">
          <ListContacts contacts={contacts} setContact={setContact} />
        </div>
        <div className="col">
          <NewContact setContact={setContact} />
        </div>
      </div>
    </>
  );
}
