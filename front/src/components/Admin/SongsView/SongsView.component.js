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
                <TextField
                    id="file"
                    label="Name"
                    margin="normal"
                    type="file"
                />
                xx
                <Button variant="contained" color="secondary"
                    onClick={() => this.uploadFile()}
                >
                    Upload
                </Button>
                {/* <form action="/upload" method="POST" enctype="multipart/form-data">
                    <div class="custom-file mb-3">
                        <input type="file" name="file" id="file" class="custom-file-input" />
                        <label for="file" class="custom-file-label">Choose File</label>
                    </div>
                    <input type="submit" value="Submit" class="btn btn-primary btn-block" />
                </form> */}
                <hr />
            </div>
        )
    }
}

export default SongsView;