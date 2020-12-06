import React, {useState} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import FilterDirection from './FilterDirection/FilterDirection';
import styles from './FilterName.module.css';

function FilterName({onChangeName, onChangeVector}) {

    const [anchorEl, setAnchorEl] = useState(null);

    const [name, setName] = useState('Sort by');
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = (el) => {
        if(typeof el !== 'object') {
            el !== -1 ? onChangeName(el.toLowerCase())
                : onChangeName(undefined);
            el !== -1 ? setName(el) : setName('Sort by');
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
                <MenuItem onClick={() => handleClose(-1)}
                ><b>Clear</b></MenuItem>
                <MenuItem onClick={() => handleClose('Name')}
                >Name</MenuItem>
                <MenuItem onClick={() => handleClose('Surname')}
                >Surname</MenuItem>
            </Menu>
            {name !== 'Sort by' && <FilterDirection onChangeVector={onChangeVector} />}
        </div>
    )
}

export default FilterName;
