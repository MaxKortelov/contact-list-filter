import React, {useState, useEffect} from 'react';
import styles from './UserList.module.css';
import FilterPage from './FilterPage/FilterPage';
import Users from './Users/Users';
import {CircularProgress} from '@material-ui/core';
import EditPage from './EditPage/EditPage'

function UserList() {

    const [status, setStatus] = useState({isLoaded: false, error: false, info: undefined});
    const [primaryList, setPrimaryList] = useState([]);
    const [workList, setWorkList] = useState([]);

    //Получение первичного списка юзеров
    useEffect(() => {
        fetch('https://www.json-generator.com/api/json/get/cfeMcllvAO?indent=2')
            .then(data => data.json())
            .then(json => {
                setPrimaryList(new Set(json));
                setWorkList(new Set(json));
                setStatus({isLoaded: true, error: false});
            })
            .catch(err => {
                setStatus({
                    isLoaded: true,
                    error: true,
                    info: 'Something went wrong. Please reload the page!'
                })
            })
    }, []);

    // Функция обновления отфильтрованного рабочего списка после фильтрации
    const filterList = (newList) => setWorkList(new Set(newList));

    //Функция удаления элемента из списка
    const deleteUser = (el) => {
        let newList = new Set(primaryList);
        newList.delete(el);
        setPrimaryList(newList);
    };

    //Открытие окна с редактированием или добавлением элемента
    const [edit, setEdit] = useState(false);
    const [element, setElement] = useState({});
    const editor = (el) => {
        if(!el) {
            setEdit(true);
            setElement({
                name: '',
                surname: '',
                company: '',
                unique: `${Math.random()}-${Math.random()}-${Math.random()}`
            });
        } else {
            setEdit(true);
            setElement(el);
        }
    };

    //Закрытие без сохранения
    const closeEdit = () => {
        setEdit(false);
        setElement({});
    };

    //Сохранение внесенных изменений
    const saveEdit = (name, surname, company, unique) => {
        const newElement = {name, surname, company, unique};
        let newList = new Set(primaryList);
        newList.delete(element);
        setElement({});
        newList.add(newElement);
        setPrimaryList(newList);
        setEdit(false);
    };

    return(
        <div className={styles.userListPage}>
            <FilterPage primaryList={primaryList} workList={workList} filterList={filterList} editor={editor} />
            {!status.isLoaded && !status.error && <CircularProgress className={styles.load} />}
            {status.error && primaryList === [] && <div className={styles.error}>{status.info}</div>}
            {status.isLoaded && primaryList !== [] && <Users
                workList={workList}
                deleteUser={deleteUser}
                editor={editor}
            />}
            {edit && <EditPage  element={element} closeEdit={closeEdit} saveEdit={saveEdit} />}
        </div>
    )
}

export default UserList;
