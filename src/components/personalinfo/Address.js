import React, { Component, useState } from 'react'
import { Card, CardContent,TextField} from '@mui/material'


function Address() {


    return (
        <div className="App">
            <Card>
                <CardContent>
                <div className='address-info'>
                <div className='print-info'>
                        <div><TextField id="outlined-basic" label="Firstname" variant="outlined" /></div>
                        <div><TextField id="outlined-" label="Lastname" variant="outlined" /></div>
                        <div><TextField id="outlined" label="Address" variant="outlined" /></div>
                    </div>
                   </div>
                </CardContent>
            </Card>

        </div>
    );
}

export default Address;