import React, { Component, useState } from 'react'
import { Card, CardContent, TextField } from '@mui/material'


function Address({ fromData, setFormData }) {


    return (
        <div className="App">
            <Card>
                <CardContent>
                    <div className='address-info'>
                        <div className='print-info'>
                            <div><TextField label="Firstname" variant="outlined"
                                value={fromData.firstname}
                                onChange={(event) =>
                                    setFormData({ ...fromData, firstname: event.target.value || "" })
                                } />
                            </div>
                            <div><TextField label="Lastname" variant="outlined"
                                value={fromData.lastname}
                                onChange={(event) =>
                                    setFormData({ ...fromData, lastname: event.target.value || "" })
                                } />
                            </div>
                            <div><TextField label="Address" variant="outlined"
                                value={fromData.address}
                                onChange={(event) =>
                                    setFormData({ ...fromData, address: event.target.value || "" })
                                } />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

export default Address;