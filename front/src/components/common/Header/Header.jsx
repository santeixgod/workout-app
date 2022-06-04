import React from 'react';
import styles from './Header.module.scss';
import userImage from '../../../../src/images/user.svg';
import hamburgerImage from '../../../../src/images/hamburger.svg';

const Header = () => {
	return (
		<header className={styles.header}>
		
			<button type='button'>
				<img src={userImage} alt='Auth'/>
			</button>

			<button type='button'>
				<img src={hamburgerImage} alt='Menu'/>
			</button>
		
		</header>
	)
}

export default Header
