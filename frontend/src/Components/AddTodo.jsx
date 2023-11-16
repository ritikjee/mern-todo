import React, { useState } from 'react'

function AddTodo({setShow}) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        e.preventDefault(),
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        
        <div className='overflow-y-auto flex shadow-2xl bg-black bg-opacity-70 items-center justify-center h-screen w-screen overflow-x-hidden fixed top-0 right-0 left-0 z-50  md:inset-0 '>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className='sm:flex sm:items-center sm:flex-col px-3 py-10'>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter title</span>
                            </label>
                            <textarea placeholder="Add Title" name={'title'} value={formData.title} className="textarea textarea-bordered textarea-xs w-full  sm:w-96" onChange={(e)=>{
                                handleChange(e)
                            
                            }}></textarea>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Enter description</span>
                            </label>
                            <textarea placeholder="Add Content" name='description' value={formData.description} className="textarea textarea-bordered textarea-xs w-full sm:w-96" 
                            onChange={(e)=>{
                                handleChange(e)
                            }}></textarea>
                        </div>
                        <div className='flex py-10 items-center justify-center gap-5'>
                            <button className='btn btn-error'
                            onClick={()=>{
                                setShow(false)
                            }}
                            >Cancel</button>
                            <button className='btn btn-success'
                            onClick={()=>{
                                addTodo(formData)
                                setShow(false)
                            }
                            }
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

async function addTodo(formData) {
    try {
        
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/addTodo`, {
            
            method: 'POST',
            body: JSON.stringify(
                formData
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    
        })
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

export default AddTodo