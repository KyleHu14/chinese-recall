import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";
import styles from "../styles/Header.module.css";

import { LoginBtn } from "./LoginBtn";
import { LogOutBtn } from "./LogOutBtn";

export const Header = () => {
	const { data: session } = useSession();
	console.log(session);

	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<Image
					style={{ objectFit: "contain" }}
					src="/chineseLogo.jpg"
					alt="logo"
					fill
				/>
			</div>

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

			<div className={styles.plusIcon}>
				<Image
					style={{ objectFit: "contain" }}
					src="/plus.svg"
					alt="icon"
					fill
				/>
			</div>

			{!session?.user && <LoginBtn />}
			{session?.user && <LogOutBtn />}
		</nav>
	);
};
