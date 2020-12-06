import React, {useState, useEffect} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import styles from './FilterCompany.module.css';

function FilterCompany({workList, primaryList, onChangeCompany}) {

    // Material-UI состовляющие
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);

    // Создание списка компаний
    const [list, setList] = useState([]);

    useEffect(() => {
        const filterCompany = () => {
            let arr = [];
            primaryList.forEach(el => {if(arr.indexOf(el.company) === -1) arr.push(el.company)});
            setList([...arr]);
        };
        filterCompany();
    }, [primaryList]);

    //Рендеринг списка компаний
    const companies = list.map((el, id) => {
        return <MenuItem key={id}
                    onClick={() => handleClose(el)}
               >{el}</MenuItem>
    });

    // Выбор компании
    const [name, setName] = useState('company');
    const handleClose = (el) => {
        if(typeof el !== 'object') {
            el !== -1 ? onChangeCompany(el) : onChangeCompany(undefined);
            el !== -1 ? setName(el) : setName('company');
        }
        setAnchorEl(null);
    };

    return(
        <div className={styles.element}>
            <Button variant="contained"
                    color="primary"
                    onClick={handleClick}
            >
                Filter by {name}
            </Button>
            <Menu
                open={Boolean(anchorEl)}
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose(-1)}
                ><b>Clear</b></MenuItem>
                {list !== [] && companies}
            </Menu>
        </div>
    )
}

export default FilterCompany;
