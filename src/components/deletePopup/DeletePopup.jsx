import React from 'react'
import { closeDeletePopup } from '../../store/features/popup/popup.slice'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteEmployee } from '../../store/features/empolyee/employee.thunk'

const DeletePopup = () => {

    const dispatch = useDispatch()
    const popup = useSelector(state => state.popup.deletePopup)

    // console.log(popup) --> it give id or true --> extra information check popup thunk

    const handleConfirmation = async () => {
        await dispatch(DeleteEmployee(popup))
        dispatch(closeDeletePopup())
    }


    if (!popup) return null

    return (
        <div onClick={() => dispatch(closeDeletePopup())} className='fixed top-0 left-0 w-full h-full z-20 flex
        bg-white/80 items-center justify-center'>

            <div onClick={(e) => e.stopPropagation()} className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title"> Delete </h2>
                    <p> Are you sure want to delete this ? </p>

                    <div className="justify-end card-actions mt-6">
                        <button onClick={()=>dispatch(closeDeletePopup())} 
                        className="btn btn-primary"> No </button>
                         
                        <button onClick={handleConfirmation} className="btn btn-primary"> Yes </button>  
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeletePopup