import React, { useState } from 'react';
import { ReactComponent as Line } from '../../images/line.svg';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import styles from './Styles.module.scss';

const Accordion = ({ title, content }) => {
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent(!showContent);
    }

    return (
        <div className={styles.item}>
            <div className={styles.contentBox}>
                <Typography type='h3' weight='bold' mb='16'>
                    {title}
                </Typography>
                <div className={`${styles.content} ${showContent ? '' : styles.collapsed}`}>
                    <Typography type='p' weight='regular' mb='24' small>
                        {content}
                    </Typography>
                </div>
            </div>
            <Button colored round click={handleClick}>
                <Line className={`${styles.line} ${showContent ? styles.rotate : ''}`} />
                <Line />
            </Button>
        </div>
    );
};

export default Accordion;
