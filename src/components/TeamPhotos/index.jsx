import React from "react";
import { classNames } from "../../utils/helpers/classNames.helpers";
import styles from './Styles.module.scss';

const TeamPhotos = ({ imgs }) => {
    return (
        <div className={styles.teamImgsWrapp}>
            {imgs && imgs.map((img, index) =>
                <div
                    key={`img ${index}`}
                    className={classNames(`${styles.imgWrapp} ${index == 0 ? styles.leftPhoto : ''} ${index == 1 ? styles.centeredPhoto : ''} ${index == 2 ? styles.rightPhoto : ''}`)}>
                    <img src={img} alt={`team member ${index + 1}`} className={`${styles.mask} ${styles[`mask${index + 1}`]}`} />
                </div>
            )}
        </div>
    );
};

export default TeamPhotos;
