import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createContactRequest from '../api/createContactRequest';
import { TokenContext } from '../App';

export const CreateContactForm = () => {
    const [text, setText] = useState('');
    const [token] = useContext(TokenContext);

    const queryClient = useQueryClient();

    const { mutate: createContact } = useMutation(
        (newContact) => createContactRequest(newContact, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('Contacts');
            },
        }
    );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!text) return;
                createContact({
                    text,
                });
                setText('');
            }}
        >
            <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
                style={{
                    padding: '8px',
                    marginRight: '6px',
                }}
            />
            <button
                style={{
                    padding: '5px',
                    height: '35px',
                    outline: 'none',
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#00c348',
                }}
            >
                Create
            </button>
        </form>
    );
};