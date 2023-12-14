import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import readContactRequest from '../api/readContactRequest';
import { ContactItem } from '../components/contactItem';
import { CreateContactForm } from '../components/createContactForm';
import { TokenContext } from '../App';

export const ContactPage = () => {
    const [token] = useContext(TokenContext);
    console.log("process.env.REACT_APP_API_URL")

    const { isLoading, data: Contacts } = useQuery('Contacts', () => {
        readContactRequest(token)
    });

    return (
        <div>
            <h1>CONTACT KEEPEER</h1>
            {isLoading ? (
                <ClipLoader size={150} />
            ) : (
                Contacts?.map((Contact) => (
                    <ContactItem Contact={Contact} key={Contact?._id} />
                ))
            )}
            <CreateContactForm />
        </div>
    );
};