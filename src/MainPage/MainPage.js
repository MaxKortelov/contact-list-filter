import React, {useState, useEffect} from 'react';
import {Octokit} from '@octokit/rest';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './MainPage.module.css';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// Компонент страницы приветствия
function MainPage() {

    // Загрузка данных об авторе страницы и вывод данных на экран
    const [status, setStatus] = useState({isLoaded: false, error: false});
    const [info, setInfo] = useState([]);

    useEffect(() => {
        function getData() {
            const octokit = new Octokit();
            octokit.users.getByUsername({
                username: "MaxKortelov"
            })
                .then(json => {
                    setInfo(json.data);
                    setStatus({isLoaded: true, error: false});
                })
                .catch(err => {
                    setInfo('Something went wrong. Please reload the page!');
                    setStatus({isLoaded: false, error: true});
                })
        }
        getData();
    }, []);

    return(
        <div className={styles.mainblock}>
            <div className={styles.groupTitle}>
                <div className={styles.greeting}>Welcome to test web-page</div>
                <div className={styles.information}>Please go to USERLIST to see all functionality</div>
            </div>
            {!status.isLoaded && !status.error && <CircularProgress />}
            {status.isLoaded && <Card className={styles.card}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={info.avatar_url}
                    title="Max Kortelov"
                />
                <Typography gutterBottom variant="h5" component="h2">
                    {info.login}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {info.bio}
                </Typography>
            </Card>}
            {status.error && <div className={styles.error}>{info}</div>}
        </div>
    );
}

export default MainPage;