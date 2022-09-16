import PropTypes from "prop-types";
import { useState } from "react";

const ListContacts = ({ contacts, onDelete }) => {
    const [query, setQuery] = useState("");

    const updateQuery = (query) => setQuery(query.trim());
    const clearQuery = () => updateQuery("");

    const results = query === "" ? contacts : contacts.filter((c) => c.name.toLowerCase().includes(query.toLocaleLowerCase()));

    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input
                    className="search-contacts"
                    type="text"
                    placeholder="Search Contacts"
                    value={query}
                    onChange={ (e) => updateQuery(e.target.value) } />
            </div>
            {
                results.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {results.length} of {contacts.length}</span>
                        <button onClick={clearQuery}>Show all</button>
                    </div>
                )
            }
            <ol className="contacts-list">
            {
                results.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        />
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button
                            className="contact-remove"
                        onClick={() => onDelete(contact)}>Remove</button>
                    </li>
                ))
            }
        </ol>
        </div>
        
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ListContacts;