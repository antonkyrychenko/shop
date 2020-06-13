import React, { FC } from 'react';
import useSubtitleStyles from './SubtitleStyles';

const Subtitle: FC = (props) => {
    const classes = useSubtitleStyles();

    return (
        <p className={classes.root}>{props.children}</p>
    );
};

export default Subtitle;