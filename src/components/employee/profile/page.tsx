import React from 'react'
import EmployeeTitle from './Profile'
import Skills from './Skills'
import Info from './Info'

function MainProfile() {
    return (
        <div className=' max-w-[600px] w-full py-10 px-5 bg-transparent'>
            <EmployeeTitle />
            <Skills />
            <Info />
        </div>
    )
}

export default MainProfile
