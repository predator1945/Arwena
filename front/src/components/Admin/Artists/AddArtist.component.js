import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import history from './../../../history'

class AddArtist extends Component {

    state = {
        name: "",
    }

    handleOnClick(type) {

        switch (type) {
            case "cancel":
                history.push("/admin/artists")
                break

            case "add":
                
                break;
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {

        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Add Artist
                </Typography>

                <TextField
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <br />
                <Button variant="contained"
                    onClick={() => this.handleOnClick("cancel")}
                >
                    Cancel
                </Button>
                <Button variant="contained" color="primary" >
                    Add
                 </Button>

            </div>
        )
    }
}


export default AddArtist;