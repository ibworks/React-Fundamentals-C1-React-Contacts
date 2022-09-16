import { useState } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";

const defaultContacts = [{
  id: "karen",
  name: "Karen Isgrigg",
  handle: "karen_isgrigg",
  avatarURL: "http://localhost:5001/karen.jpg",
},
{
  id: "richard",
  name: "Richard Kalehoff",
  handle: "richardkalehoff",
  avatarURL: "http://localhost:5001/richard.jpg",
},
{
  id: "tyler",
  name: "Tyler McGinnis",
  handle: "tylermcginnis",
  avatarURL: "http://localhost:5001/tyler.jpg",
}];

const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id));
  }

  const [contacts, setContacts] = useState(defaultContacts);

  return <div><ListContacts contacts={contacts} onDelete={removeContact} /></div>;
};

export default App;
