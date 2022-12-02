import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
	return (
		<div className={`${styles.section} ${styles.bgWhite}`}>
			<div className={`${styles.subSection} flex-col text-center`}>
				<div>
					<h1 className={`${styles.h1Text} ${styles.blackText}`}>
						Unduh source code dibawah ini
					</h1>
					<p className={`${styles.pText} ${styles.blackText}`}>
						Melalui Github dibawah ini
					</p>
				</div>
				<button className={styles.btnPrimary}>
					<a
						href='https://github.com/guidofamula/nft-mobile-apps.git'
						target='_blank'
						rel='noreferrer'
					>
						Source Code
					</a>
				</button>
				<div className={styles.flexCenter}>
					<img
						src={assets.scene}
						alt='Download png'
						className={styles.fullImg}
					/>
				</div>
			</div>
		</div>
	);
};

export default Download;
