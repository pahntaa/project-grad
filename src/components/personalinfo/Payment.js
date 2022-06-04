import React, { Component, useState } from 'react'
import { Card, CardContent } from '@mui/material'
import {TextField} from '@mui/material'


function Payment() {
    return (
        <div className="App">
            <Card>
                <CardContent>
                    <div className='print-info'>
                        <div><TextField id="outlined-basic" label="Date" variant="outlined" /></div>
                        <div><TextField id="outlined-" label="time" variant="outlined" /></div>
                        <div><TextField id="outlined" label="file" variant="outlined" /></div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

export default Payment;