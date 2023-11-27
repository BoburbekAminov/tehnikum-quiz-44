import React from 'react'

export const AppCheckbox = ({checkboxLebl, ...props}) => {


    return(
        <label className='AppCheckbox'>
            <input type="checkbox" {...props}/>
            <span>{checkboxLebl}</span>
        </label>
    )
}