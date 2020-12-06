import React, {useState} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import styles from './FilterDirection.module.css';

function FilterDirection({onChangeVector}) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [name, setName] = useState('A - Z');

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = (el) => {
        if(typeof el !== 'object') {
            el === 'A - Z' ? onChangeVector(true) : onChangeVector(false);
            setName(el);
        }
        setAnchorEl(null);
    };

    return(
        <div className={styles.element}>
            <Button variant="contained"
                    color="primary"
                    onClick={handleClick}
            >
                {name}
            </Button>
            <Menu
                open={Boolean(anchorEl)}
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose('A - Z')}
                          className={styles.aZ}
                >A - Z</MenuItem>
                <MenuItem onClick={() => handleClose('Z - A')}
                          className={styles.zA}
                >Z - A</MenuItem>
            </Menu>
        </div>
    )
}

export default FilterDirection;
