import React from 'react';
import { ReactComponent as Twitter } from '../../images/socialNetworks/twitter.svg';
import { ReactComponent as Fb } from '../../images/socialNetworks/fb.svg';
import { ReactComponent as In } from '../../images/socialNetworks/in.svg';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import IconLink from './IconLink';
import styles from './Styles.module.scss';

const networks = [
    {
        icon: <Twitter />,
        link: '#',
    },
    {
        icon: <Fb />,
        link: '/',
    },
    {
        icon: <In />,
        link: '/mission',
    }
]

const Footer = () => {
    return (
        <footer>
            <Section extraClass={styles.footerBg}>
                <div className={styles.wrapp}>
                    <div className={styles.firstBloc}>
                        <Typography type='h4' weight='bold' mb='24' transform='uppercase'>
                            Contacts
                        </Typography>
                        <div>
                            <Typography type='p' weight='regular'>
                                2019 Rootz Foundation.
                            </Typography>
                            <Typography type='p' weight='regular'>
                                All rights reserved
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Typography type='h4' size='medium' weight='bold' mb='24'>
                            Headquarters
                        </Typography>
                        <Typography type='p' weight='regular'>
                            1234 Taliban
                        </Typography>
                        <Typography type='p' weight='regular'>
                            Los Angeles, La 1234567
                        </Typography>
                        <Typography type='p' weight='regular'>
                            (123) 456-7890
                        </Typography>
                    </div>
                    <div>
                        <Typography type='h4' size='medium' weight='bold' mb='24'>
                            Social media
                        </Typography>
                        <div className={styles.networks}>
                            {networks.map(item =>
                                <IconLink icon={item.icon} link={item.link}  key={item.link} />)}
                        </div>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
