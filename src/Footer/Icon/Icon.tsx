import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Icon.module.scss'

type iconPropsType={
    icon:IconProp
}

function Icon(props:iconPropsType) {
    return (
   <div className={styles.socialIcons}>
       <FontAwesomeIcon className={styles.icon} icon={props.icon} />
   </div>
);
}

export default Icon;
