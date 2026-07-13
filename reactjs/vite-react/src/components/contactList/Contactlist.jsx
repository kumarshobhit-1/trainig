import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


export const Contactlist = () => {

    const [record, setRecord] = useState([])
    // const [color, setColor] = useState("Red")
    // const [course, setCourse] = useState("Python")
    useEffect(() => {

        // console.log("use Effcet");
        axios.get("http://localhost:3001/contact")
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                setRecord(res.data)
            })
    }, [])

    const deleteButton = (id) => {
        const ok = confirm("Are you sure you want to delete this record?")
        if (!ok) {
            return
        }
        axios.delete(`http://localhost:3001/contact/${id}`)
            .then((res) => {
                // console.log(res);
                // alert("Record Deleted")
                toast.success("Record deleted Successfully");
                window.location.reload()
            }
        )
    }

    const editButton = (id) => {
        window.location.href = `/contact/${id}`
    }
    // const colorChnage = () => {
    //     setColor("Blue")
    // }

    // const chnagecOurse = () => {
    //     setCourse("javasCript")
    // }
    return (

        <div className="container">
            <Toaster position="top-right" />
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <Link to="/contact" className='btn btn-success'>Add Contact</Link>
                    <br />
                    <div className="my_title">
                        Contact List
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                {/* <th>LAST Name</th> */}
                                <th>Email Id</th>
                                <th>Subject</th>
                                <th>Message</th>
                                {/* <th>Acctions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((item) =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.full_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.message}</td>
                                        <td>
                                            <button onClick={() => editButton(item.id)} className='btn btn-primary'>Edit</button>&nbsp;
                                            <button onClick={() => deleteButton(item.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>

    )
}