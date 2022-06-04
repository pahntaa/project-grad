import React, { Component, useEffect, useState } from 'react'
import { Card, CardContent, Button } from '@mui/material'
import '../PrintPage/printform.css'
import PrintInfo from './PrintInfo';
import Address from '../personalinfo/Address';
import Payment from '../personalinfo/Payment';
import Successful from '../personalinfo/successful';
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'


function PrintForm() {
    const [page, setPage] = useState(0);
    const database = collection(db, "printform");
    const [data, setData] = useState([]);
    const [fromData, setFormData] = useState({
        tests: '',
        test: '',
        files1: '',
        description: '',
        firstname: '',
        lastname: '',
        address: '',
        date: '',
        time: '',
        files: '',
    });
    const FormTitles = ["Print Form", "Address", "Payment"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PrintInfo fromData={fromData} setFormData={setFormData} />
        } else if (page === 1) {
            return <Address fromData={fromData} setFormData={setFormData} />
        } else if (page === 2) {
            return <Payment fromData={fromData} setFormData={setFormData} />
        }
        return <Successful />
    }

    const createData = async () => {
        await addDoc(database,{order:fromData})
    }
    

    useEffect(() => {
        // const getData = async () => {
        //     const data = await getDocs(database)
        //     console.log(data);
        //     setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        // };

        // getData();
    }, []);

    const clearData = () => {
        setFormData({
            tests: '',
            test: '',
            files1: '',
            description: '',
            firstname: '',
            lastname: '',
            address: '',
            date: '',
            time: '',
            files: '',
        })
    }

    return (
        <div className="App">
            <Card>
                <CardContent>
                    <div className="form">
                        <div className="progressbar">
                            <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : page === 2 ? "100%" : "100%" }}></div>
                        </div>
                        <div className="form-container">
                            <div className="header">
                                <h3>{FormTitles[page]}</h3>
                            </div>
                            <div className="body">
                                {PageDisplay()}
                            </div>
                            <div className="footer" >
                                <Button variant="contained" color='error'
                                    disabled={page === 0}
                                    onClick={() => { setPage((currpage) => currpage - 1) }}
                                >Prev</Button>
                                <Button variant="contained" color="success"
                                    onClick={() => {
                                        if (page === FormTitles.length - 1) {
                                            alert("Form Submit")
                                            console.log(fromData)
                                            createData()
                                            clearData()
                                        } else
                                            setPage((currpage) => currpage + 1)
                                    }}>
                                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                                </Button>

                            </div>
                        </div>
                    </div>
                </CardContent>
                {/* //getfunction */}
                {/* <div>
                    <div>{data.map((data) => {
                        return (
                            <div>
                                {" "}
                                <h3>: {data.tests}</h3>
                                <h3>: {data.firstname}</h3>
                            </div>
                        )
                    })}
                    </div>
                </div> */}
            </Card>

        </div>
    );
}

export default PrintForm;