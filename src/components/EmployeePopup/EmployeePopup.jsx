import React from 'react'

const EmployeePopup = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full z-20 flex
                bg-white/80          items-center justify-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend"> Employee Details</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    )
}

export default EmployeePopup