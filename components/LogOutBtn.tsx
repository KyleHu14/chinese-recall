import { signOut } from "next-auth/react";

import styles from "../styles/LoginBtn.module.css";

export const LogOutBtn = () => {
	return (
		<button onClick={() => signOut()} className={styles.signInBtn}>
			Sign Out
		</button>
	);
};
