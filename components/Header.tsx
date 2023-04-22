// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles/Header.module.css";
import loginStyles from "../styles/LoginBtn.module.css";

// Components
import ProfileBtn from "./ProfileBtn";
import CreateWord from "./CreateWord";

// Clerk
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";

const Header = () => {
	// User Session
	const { isLoaded, isSignedIn, user } = useUser();
	// Signout
	const { signOut } = useClerk();

	return (
		<nav className={styles.navbar}>
			{/* Website Logo */}
			<Link className={styles.logoContainer} href="/">
				<Image
					style={{ objectFit: "contain" }}
					src="/chineseLogo.jpg"
					alt="logo"
					fill
				/>
			</Link>

			{/* Search Bar */}
			<form className={styles.searchBar}>
				<Image
					src="/searchIcon.svg"
					width="20"
					height="20"
					alt="search"
				/>
				<input
					className={styles.searchBarInput}
					type="text"
					placeholder="Search Words"
				/>
				<button type="submit" hidden />
			</form>

			{/* Create Icon */}
			<div className={styles.plusIcon}>
				<CreateWord />
			</div>

			{/* Profile / Login Button */}
			{!isSignedIn && (
				<SignInButton>
					<button className={loginStyles.signInBtn}>Sign In</button>
				</SignInButton>
			)}
			{isSignedIn && (
				<ProfileBtn
					name={user?.username}
					email={user?.primaryEmailAddress?.emailAddress}
					image={user?.profileImageUrl}
					signOut={signOut}
				/>
			)}
		</nav>
	);
};

export default Header;
