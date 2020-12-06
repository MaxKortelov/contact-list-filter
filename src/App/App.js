import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './App.module.css';
import MainPage from '../MainPage/MainPage'
import UserList from '../UserList/UserList'

// Компонент с роутингом между страницей приветствия и списком пользователей
function App() {

    //Проверка на какой странице находится пользователь
    const constcheckPage = () => {return window.location.href.indexOf('/users') === -1 ? true : false};

    const [pageState, setpageState] = useState(constcheckPage());

  return (
    <Router>
      {!pageState && <Link to="/" className={styles.mainPageBtn}>
        <Button onClick={() => setpageState(!pageState)}>Back</Button>
      </Link>}
      {pageState && <Link to="/users" className={styles.userListBtn}>
        <Button onClick={() => setpageState(!pageState)}>UserList</Button>
      </Link>}
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/users">
          <UserList />
        </Route>
    </Router>
  );
}

export default App;
