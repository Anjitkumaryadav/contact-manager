    import React from 'react'

    function ContactList({contact}) {
        const contactList = contact.map((val) =>{
            return (
                <div className='flex justify-between border-black border-2 bg-red-200 rounded-md mb-1 px-2 py-1'>
                    <div>{val.name}</div>
                    <div>{val.email}</div>
                </div>
            )
        })
        return (
        <div>
            <div className='font-semibold mt-5'>Contact List</div>
            <div className=''>{contactList}</div>
        </div>
    )
    }

    export default ContactList