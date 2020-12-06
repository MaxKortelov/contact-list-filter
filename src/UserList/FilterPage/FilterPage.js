import React, {useState, useEffect} from 'react';
import styles from './FilterPage.module.css';
import FilterCompany from './FilterCompany/FilterCompany'
import FilterName from './FilterName/FilterName'
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function FilterPage({primaryList, workList, filterList, editor}) {

    //Выбор компании
    const [company, setCompany] = useState(undefined);
    const onChangeCompany = (company) => setCompany(company);

    // Ключ для фильтрации по имени
    const [name, setName] = useState(undefined);
    const onChangeName = (name) => setName(name);

    // Направление в фильтрации
    const [vector, setVector] = useState(true);
    const onChangeVector = (boolean) => setVector(boolean);

    // Фильтр по имени и направлению
    const nameFilter = (list, key, direction) => {
        if(key) {
            let newList = [...new Set(list)].sort((a, b) => {
                let nameFirst = a[key].toUpperCase();
                let nameSecond = b[key].toUpperCase();
                return nameFirst < nameSecond ? -1 : 1
            });
            if(!direction) newList.reverse();
            return newList;
        }
    };

    //Фильтр Компаний
    const companyFilter = (company) => {
        let newList = new Set(primaryList);
        if(company) {
            company === -1 ? filterList(primaryList) :
                (newList.forEach(el => {
                        if (el.company !== company) newList.delete(el);
                    }
                ));
        }
        if (name) newList = nameFilter(newList, name, vector);
        filterList(newList);
    };

    // Фильтрация компаний после изменения первичного списка
    useEffect(() => { companyFilter(company)}, [primaryList, company, companyFilter]);

    return(
        <div className={styles.header}>
            <Button className={styles.add}
                    onClick={() => editor()}
            >
                <AddIcon />
            </Button>
            <div className={styles.filterFields}>
            <FilterCompany workList={workList}
                           primaryList={primaryList}
                           onChangeCompany={onChangeCompany}
            />
            <FilterName onChangeVector={onChangeVector}
                        onChangeName={onChangeName}
            />
            </div>
            <Button variant="contained"
                    onClick={() => companyFilter(company)}
            >Filter</Button>
        </div>
    )
}

export default FilterPage;
