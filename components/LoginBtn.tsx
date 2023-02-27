import { signIn } from "next-auth/react";

import styles from "../styles/LoginBtn.module.css";

export const LoginBtn = () => {
	return (
		<button onClick={() => signIn()} className={styles.signInBtn}>
			Sign In
		</button>
	);
};
