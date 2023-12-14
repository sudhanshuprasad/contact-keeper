import React, { useEffect } from 'react'
import EditDelete from './EditDelete'


const Contact = (props) => {

    return (
        <div>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.app.goo.gl/avtsFy5xFBCtsjby7" alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {props?.name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {props?.phone}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {props?.email}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <EditDelete id={props.id} updateContact={props.updateContact} deleteContact={props.deleteContact}></EditDelete>
                    </div>
                </div>
            </li>
        </div>
    )
}

Contact.defaultProps = {
    name: "Unnamed human",
    PhNumber: 1111111111,
    email: "mail@gml.com",
}


export default Contact
