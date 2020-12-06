import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { TextField, Button } from '@material-ui/core';
import styles from './EditPage.module.css';

function EditPage({element, closeEdit, saveEdit}) {

    //Изменение текстового поля
    const [name, setName] = useState(element.name);
    const [surname, setSurname] = useState(element.surname);
    const [company, setCompany] = useState(element.company);
    const unique = element.unique;

    return(
        <div className={styles.box} id="boox">
            <div className={styles.darkFont}
                 onClick={() => closeEdit()}
            />
            <CloseIcon fontSize="small"
                       color="action"
                       className={styles.close}
            />
            <div className={styles.editor}>
                <div className={styles.innerEditor}>
                    <TextField label="Name"
                               variant="outlined"
                               value={name}
                               id="name"
                               onChange={(e) => setName(e.target.value)}
                    />
                    <TextField label="Surname"
                               variant="outlined"
                               value={surname}
                               id="surname"
                               onChange={(e) => setSurname(e.target.value)}
                    />
                    <TextField label="Company"
                               variant="outlined"
                               value={company}
                               id="company"
                               onChange={(e) => setCompany(e.target.value)}
                    />
                    <div className={styles.buttonField}>
                        <Button variant="contained"
                                color="primary"
                                onClick={() => saveEdit(name, surname, company, unique)}
                        >Save</Button>
                        <Button variant="contained"
                                color="secondary"
                                onClick={() => closeEdit()}
                        >Close</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPage;
