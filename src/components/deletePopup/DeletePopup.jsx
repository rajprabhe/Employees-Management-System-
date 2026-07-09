import React from 'react'
import { closeDeletePopup } from '../store/features/popup/popup.slice'
import { useDispatch, useSelector } from 'react-redux'

const DeletePopup = () => {

    const dispatch = useDispatch()
    const popup = useSelector(state => state.popup.deletePopup)

    if (!popup) return null

    return (
        <div onClick={() => dispatch(closeDeletePopup())} className='fixed top-0 left-0 w-full h-full z-20 flex
        bg-white/80 items-center justify-center'>

            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Medium Card</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup