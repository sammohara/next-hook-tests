import React, { useState, forwardRef, useImperativeHandle} from 'react';
import styles from '../styles/Home.module.css';

type Props = {
    buttonLabel: string;
};

const TestButton = ({ buttonLabel }: Props, ref) => {
    const [message, setMessage] = useState('Testing');
    useImperativeHandle(ref, () => ({
        setFromOutside(msg) {
            setMessage(msg)
        }
    }), []);

    return (
        <>
            <button className={styles.button}> { buttonLabel } </button>
            <p>{message}</p>
        </>
    );
};

export default forwardRef(TestButton);
