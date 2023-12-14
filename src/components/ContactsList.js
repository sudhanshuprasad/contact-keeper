import React, { useEffect, useState } from 'react'
import Edit_Delete from './EditDelete'
import Contact from './Contact'

let data = []
const host = 'http://localhost:8080'

const Contacts = () => {

    useEffect(() => {
        let url = `${host}/contacts`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('data ', data)
                setContacts(data)
            });

    }, [])

    const check = ()=>{}

    const [contacts, setContacts] = useState([]);

    const updateContact = (id, data) => {
        let newData = contacts
        contacts.map((element, index) =>{
            if(element._id===id){
                newData[index].text=data?.name
                newData[index].PhNumber=data?.PhNumber
                newData[index].email=data?.email
                console.log(element)
            }
        })
        setContacts(newData)
    }

    const deleteContact = (id) => {
        console.log("deleting contact")
        let newData=contacts.filter((element)=>{
            console.log(id)
            if(element._id===id){
                console.log(element)
                return false;
            }
            else{
                return true;
            }
        })
        setContacts(newData)
    }

    return (
        <>
            <div className='flex content-center justify-center'>

                <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">The Contact List</h5>
                        <a href="/create" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        Add New
                    </a>
                    </div>
                    <div class="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {/* <Contact id="1" name="testing name" email="test@test.in" phone="1234567890" listUpdater={setContacts} />
                            <Contact id="2" name="testing name2" email="test@test.in" phone="1234567890" />
                            <Contact id="3" name="testing name3" email="test@test.in" phone="1234567890" /> */}
                            {/* <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Michael Gough
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $67
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Lana Byrd
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $367
                                </div>
                            </div>
                        </li>
                        <li class="pt-3 pb-0 sm:pt-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Thomes Lean
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $2367
                                </div>
                            </div>
                        </li> */}

                            {
                                contacts?.map((e) => (
                                    <Contact key={e._id} id={e._id} name={e.text} email={e.email} phone={e.PhNumber} updateContact={updateContact} deleteContact={deleteContact}>
                                        {/* {console.log(e)} */}
                                    </Contact>
                                ))
                            }

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacts