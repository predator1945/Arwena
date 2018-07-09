import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SongsView extends Component {

    uploadFile() {
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("file", imagefile.files[0]);
        axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Songss
                </Typography>
                <input
                    accept="image/*"
                    style={{"display": "none"}}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                        File
                     </Button>
                </label>
                xx
                <Button variant="contained" color="secondary"
                    onClick={() => this.uploadFile()}
                >
                    Add
                </Button>
            </div>
        )
    }
}

export default SongsView;