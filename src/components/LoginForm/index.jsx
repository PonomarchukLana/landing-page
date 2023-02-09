import React from "react";
import Typography from '../Typography';
import Button from '../Button';
import Input from "../Input";
import styles from './Styles.module.scss';

const LoginForm = () => {
    return (
        <div className = { styles.formWrapp } >
                <Typography type='h3' weight='semiBold' size='large' mb='24' align='center'>
                    Log in
                </Typography>
                <div>
                    <Input type='text' fullWidth mb='16' placeholder='Name' min='1' max='20' />
                    <Input type='email' fullWidth mb='32' placeholder='Email' />
                </div>
                <Button colored fullwidth click={() => console.log('Book a demo')}>Book a demo</Button>
        </div >
    );
};

export default LoginForm;
