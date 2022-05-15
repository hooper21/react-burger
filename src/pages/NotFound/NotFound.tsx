import { useHistory } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './NotFound.module.css';

const NotFound = () => {
    
    const history = useHistory();

    return (
        <div className={`${styles.container} mt-30`}>
            <h1 className='text text_type_main-medium'>Упс! Ошибка: <span className='text text_type_digits-medium'>404</span></h1>
            <p className={`${styles.p} text text_type_main-default`}>Такой страницы не существует. <br /> Проверьте адрес или попробуйте сначала</p>
            <Button type='primary' size='medium' onClick={() => history.replace('/')}>Создать бургер</Button>
        </div>
    )
}

export default NotFound;