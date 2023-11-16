function Card({ title, description, completed, id }) {



    return (
        <div className={`card mx-4 lg:w-96 my-5 ${completed ? 'bg-green-200' : 'bg-yellow-200'}`}>
            <div className="card-body text-black">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error"
                        onClick={() => {
                            deleteTodo(id)
                        }
                        }
                    >Delete</button>
                    {completed ?
                        <button className="btn btn-warning"
                            onClick={() => {
                                markUnDone(id)
                            }
                            }
                        >Undone</button> :
                        <button className="btn btn-success"
                            onClick={() => {
                                completeTodo(id)

                            }}
                        >Completed</button>
                    }
                </div>
            </div>
        </div>
    )
}

async function deleteTodo(id) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/deleteTodo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
    const json = await response.json()
    console.log(json)
}

async function completeTodo(id) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/updateTodo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
    const json = await response.json()
    console.log(json)
}

async function markUnDone(id) {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/updateTodo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
        const json = await response.json()
        console.log(json)

    } catch (error) {
        console.log("message:" + error.message)
    }
}


export default Card