
import ProfileNavigation from "../../../ui/ProfileNavigation/ProfileNavigation";

import styles from './ProfileOrders.module.css';

const ProfileOrders = () => {
    return (
        <div className={styles.container + " pr-5 pl-5"}>
            <ProfileNavigation />
            <div className={styles.content}>
                <p className={`${styles.text} text text_type_main-large text_color_inactive`}>История Ваших заказов</p>
            </div>
        </div>
    );
};

export default ProfileOrders;