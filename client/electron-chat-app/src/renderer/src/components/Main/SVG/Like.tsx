/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */

import React, { useState } from "react";

const Like: React.FC = () => {
    const [fill, setFill] = useState<string | undefined>('none');
    const [clicked, setClicked] = useState<boolean>(false);

    const handleItemClick = (): void => {
        setFill(clicked ? 'none' : 'white');
        setClicked(prevClicked => !prevClicked);
    };

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg" onClick={handleItemClick}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.39322 9.66527C1.49906 6.8736 2.54406 3.68277 5.47489 2.7386C7.01656 2.2411 8.71822 2.53443 9.99989 3.4986C11.2124 2.5611 12.9766 2.24443 14.5166 2.7386C17.4474 3.68277 18.4991 6.8736 17.6057 9.66527C16.2141 14.0903 9.99989 17.4986 9.99989 17.4986C9.99989 17.4986 3.83156 14.1419 2.39322 9.66527Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3333 5.58334C14.225 5.87168 14.855 6.66751 14.9308 7.60168" stroke="#128C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default Like;
