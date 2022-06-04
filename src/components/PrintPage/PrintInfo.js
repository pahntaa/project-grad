import React, { Component, useState } from 'react'
import { Card, CardContent, TextField } from '@mui/material'

function PrintInfo({ fromData, setFormData }) {
    return (
        <div className="App">
            <Card>
                <CardContent>
                    <div className='print-info'>
                        <div>
                            <TextField id="test1" label="Fistname" variant="outlined"
                                value={fromData.tests}
                                onChange={(event) =>
                                    setFormData({ ...fromData, tests: event.target.value || ""})
                                } />
                            <TextField label="Lastname" variant="outlined" 
                                value={fromData.test}
                                onChange={(event) =>
                                    setFormData({ ...fromData, test: event.target.value || ""})
                                }/>
                                
                        </div>
                        <div>
                            <TextField label="file" variant="outlined" 
                            value={fromData.files1} 
                            onChange={(event) =>
                                setFormData({ ...fromData, files1: event.target.value || ""})
                            }/>
                        </div>
                        <div><TextField label="Description" variant="outlined" 
                            value={fromData.description}
                            onChange={(event) => 
                            setFormData({ ...fromData, description: event.target.value || ""})
                            }
                            /></div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

export default PrintInfo;