import React from 'react';

import { HEADLINE, DESCRIPTION } from '../constants/text';

const Intro = ({ callback }) => (
    <div className="tapp__intro">
        <h1 className="headline">
            {HEADLINE}
        </h1>
        <p>
            {DESCRIPTION}
            <a href="#" onClick={callback}>hier</a>
        </p>
    </div>
);

export default Intro;
