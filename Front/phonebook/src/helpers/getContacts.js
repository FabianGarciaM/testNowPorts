
export const GetAllContacts = async () => {
  let contacts = [];
  await fetch("http://localhost:4000/api/contacts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      contacts = data
    });
    return contacts;
};