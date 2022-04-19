import React from 'react'
import { Contact } from './Contact';

export const ListContacts = ({ contacts, setContact }) => {

    if(!contacts){
        return (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <Contact key={c._id} setContact={setContact} {...c} />
              ))}
            </tbody>
          </table>
        );
    }else{
        return (<h4>No ahi data</h4>)
        
    }
};
