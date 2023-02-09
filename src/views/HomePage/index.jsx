import React from 'react';
import { ReactComponent as Location } from '../../images/location-icon.svg';
import { ReactComponent as Headline } from '../../images/headline.svg';
import { ReactComponent as Parrot } from '../../images/parrot.svg';
import { ReactComponent as Card } from '../../images/card.svg';
import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Typography from '../../components/Typography';
import Input from "../../components/Input";
import Button from '../../components/Button';
import TeamPhotos from '../../components/TeamPhotos';
import LoginForm from '../../components/LoginForm';
import Accordion from '../../components/Accordion';
import Carousel from '../../components/Carousel';
import styles from './Styles.module.scss';

const faq = [
    {
        question: 'What can I do to protect our planet?',
        answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    },
    {
        question: 'How to save nature ecology?',
        answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    },
    {
        question: 'What is nature conservation?',
        answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    }
];

const HomePage = () => {
    return (
        <>
            <div className={styles.mainScreen}>
                <Section fullScreen>
                    <Grid sm='12' lg='6'>
                        <Headline className={`${styles.fullWidth} ${styles.heightContent}`} />
                        <Typography type='p' size='small' weight='regular' mb='40'>
                            The scale of the challenges facing our planet can seem daunting, but we can all do something.
                        </Typography>
                        <Input
                            type='text'
                            fullWidth
                            placeholder='Find the place to help'
                            icon={<Location />}
                            button={<Button colored click={() => console.log('search')}>
                                search
                            </Button>} />
                    </Grid>
                    <Grid sm='12' lg='6' mbSm='40'>
                        <div className={styles.mainImg}>
                            <Parrot className={styles.rightImg} />
                            <div className={styles.leftImg}>
                                <Card />
                                <div className={styles.content}>
                                    <Typography type='p' size='medium' color='light' weight='bold'>
                                        Members
                                    </Typography>
                                    <Typography type='p' size='large' color='light' weight='bold'>
                                        29 128
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Section>
            </div>
            <Section indents>
                <div className={`${styles.alignCenter} ${styles.smallTitleWrapp}`}>
                    <Typography type='h2' weight='bold' mb='16' align='center'>
                        Our top team
                    </Typography>
                    <Typography type='p' weight='regular' mb='16' align='center'>
                        Learn more about how you can save our planet's nature.
                    </Typography>
                </div>
                <TeamPhotos imgs={[require('../../images/img-1.png'), require('../../images/img-2.png'), require('../../images/img-3.png')]} />
            </Section>
            <Section indents>
                <div className={`${styles.dFlex} ${styles.justifyBetween} ${styles.alignCenter} ${styles.loginSection} ${styles.pinkBg}`}>
                    <Grid md='12' lg='6' mbMd='40'>
                        <Typography type='h2' weight='bold' mb='40'>
                            Get started today!
                        </Typography>
                        <Typography type='p' weight='regular'>
                            Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet.
                        </Typography>
                    </Grid>
                    <Grid md='12' lg='6'>
                        <LoginForm />
                    </Grid>
                </div>
            </Section>
            <Section indents extraClass={`${styles.dFlex} ${styles.justifyBetween} ${styles.wrap}`}>
                <Grid md='12' lg='6' mbMd='40'>
                    <Typography type='h2' weight='bold' mb='40'>
                        Ready to Get started?
                    </Typography>
                    <Typography type='p' weight='regular' mb='56'>
                        When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.
                    </Typography>
                    <Button colored click={() => console.log('Contact us')}>Contact us</Button>
                </Grid>
                <Grid md='12' lg='6'>
                    {faq.map(item =>
                        <Accordion title={item.question} content={item.answer} key={item.question} />)}
                </Grid>
            </Section>
            <Section fullWidth extraClass={styles.pinkBg}>
                <Carousel />
            </Section>
            <Section>

            </Section>
        </>
    );
};

export default HomePage;
