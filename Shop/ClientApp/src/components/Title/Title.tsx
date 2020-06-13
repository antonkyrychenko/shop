import React, { FC } from 'react';
import useTitleStyles from './TitleStyles';

const Title: FC = (props) => {
    const classes = useTitleStyles();

    return (
        <p className={classes.root}>{props.children}</p>
    );
};

export default Title;