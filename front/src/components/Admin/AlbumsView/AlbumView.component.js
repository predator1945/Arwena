import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});

function AlbumView(props) {

    const { classes } = props;


    return (
        <div>
            <Typography variant="display2" gutterBottom>
                Albums
            </Typography>
        </div>
    );
}

AlbumView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumView);
