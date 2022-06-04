import React, { Component, useState } from 'react'
import { Card, CardContent } from '@mui/material'
import { TextField } from '@mui/material'


function Payment({ fromData,setFormData}) {
    return (
        <div className="App">
            <Card>
                <CardContent>
                    <div className='print-info'>
                        <div>
                            <TextField label="Date" variant="outlined"
                            value={fromData.date}
                            onChange={(event) =>
                                setFormData({ ...fromData, date: event.target.value || "" })
                            } />
                        </div>
                        <div>
                            <TextField label="time" variant="outlined" 
                            value={fromData.time}
                            onChange={(event) =>
                                setFormData({ ...fromData, time: event.target.value || ""})
                            }/>
                        </div>
                        <div>
                            <TextField label="file" variant="outlined" 
                            value={fromData.files}
                            onChange={(event) =>
                                setFormData({ ...fromData, files: event.target.value || ""})
                            }/>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

export default Payment;