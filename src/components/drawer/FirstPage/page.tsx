import React from 'react'
import FirstPage from './FilePortion'
import Others from './Other'

function First() {
    return (
        <div>
            <FirstPage /> {/*includees images and cv*/}
            <Others />{/*includees name, email and location*/}
        </div>
    )
}

export default First
