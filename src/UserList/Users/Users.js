import React, {useState, useEffect} from 'react';
import styles from './Users.module.css';
import {Avatar, IconButton, List, ListItem, ListItemAvatar,
        ListItemText, ListItemSecondaryAction} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Pagination from '@material-ui/lab/Pagination';

function Users({workList, deleteUser, editor}) {

    //Пагинация
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(10);

    const [list, setList] = useState([...workList]);
    useEffect(() => {
        setList([...workList]);
        let newPage = Math.ceil(workList.size / 10);
        setPages(newPage);
    }, [workList]);

    //Рендеринг элементов списка
    let listSet = new Set();
    list.forEach((el, id) => {
        if(page - 10 <= id && id < page) {
        listSet.add(
            <ListItem
                className={styles.user}
                key={el.unique}
            >
                <ListItemAvatar className={styles.avatar}>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary='First name:'
                    secondary={el.name}
                />
                <ListItemText
                    primary='Surname:'
                    secondary={el.surname}
                />
                <ListItemText
                    primary='Company:'
                    secondary={el.company}
                />
                <ListItemSecondaryAction className={styles.actions}>
                    <IconButton edge="end" aria-label="edit" onClick={() => editor(el)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end"
                                aria-label="delete"
                                onClick={() => deleteUser(el)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )}
    });

    return (
        <div className={styles.main}>
        <div className={styles.pagination}>
            <Pagination count={pages}
                        color="primary"
                        onChange={(e, num) => setPage(num * 10)}
                        disabled={pages === 1}
            />
        </div>
        <div>
            <List className={styles.users}>
                {listSet}
            </List>
        </div>
        </div>
    )
}

export default Users;
