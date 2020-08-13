import React from 'react'


const Page = ({theDate, children}) =>{

    console.log(children)
    return (
        <div>
            The Date is {theDate}

            {children}
            <div>This is the Footer.</div>
        </div>
    )
}


export default Page;