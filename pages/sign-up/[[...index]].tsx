import styles from "../../styles/ClerkStyles.module.css";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
	<div className={styles.buttonContainer}>
		<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
	</div>
);
export default SignUpPage;
