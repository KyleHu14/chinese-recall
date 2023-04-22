import styles from "../../styles/ClerkStyles.module.css";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
	<div className={styles.buttonContainer}>
		<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
	</div>
);
export default SignInPage;
