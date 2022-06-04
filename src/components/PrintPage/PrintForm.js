import React, { Component, useState } from 'react'
import { Card, CardContent } from '@mui/material'
import '../PrintPage/printform.css'
import PrintInfo from './PrintInfo';
import Address from '../personalinfo/Address';
import Payment from '../personalinfo/Payment';
import Successful from '../personalinfo/successful';


function PrintForm() {
    const [page, setPage] = useState(0);
    const [fromData, setFormData] = useState({
        tests:"",
        test2: "",
        file:"",
        description:"",
        fistname: "",
        lastname: "",
        address:"",
        date:"",
        time:"",
        files:""
    });

    const FormTitles = ["Print Form", "Address", "Payment"];

    const PageDisplay = () =>{
        if (page === 0){
            return <PrintInfo fromData={fromData} setFormData={setFormData}/>
        }else if(page === 1){
            return <Address/>
        }else if(page === 2){
            return <Payment/>
        }
        return <Successful/>
    }

    return (
        <div className="App">
            <Card>
                <CardContent>
                    <div className="form">
                        <div className="progressbar">
                            <div style={{width:page === 0? "33.3%" :page === 1 ? "66.6%":page === 2? "100%":"100%"}}></div>
                        </div>
                        <div className="form-container">
                            <div className="header">
                                <h1>{FormTitles[page]}</h1>
                            </div>
                            <div className="body">
                                {PageDisplay()}
                            </div>
                            <div className="footer" >
                                <button
                                disabled={page===0}
                                onClick={() => {setPage((currpage) => currpage-1)}}
                                    >Prev</button>
                                <button 
                                disabled={page===FormTitles.length - 1}
                                onClick={() => {setPage((currpage) => currpage+1)}}>
                                    Next</button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

export default PrintForm;