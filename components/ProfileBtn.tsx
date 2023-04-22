// Next
import Image from "next/image";

// React
import { useState } from "react";

// CSS
import styles from "../styles/ProfileBtn.module.css";

// Clerk
import { SignOut } from "@clerk/types";

const ProfileBtn = ({
	name,
	email,
	image,
	signOut,
}: {
	name: string | null | undefined;
	email: string | null | undefined;
	image: string | null | undefined;
	signOut: SignOut;
}) => {
	const [displayDropDown, setDisplayDropDown] = useState(false);

	return (
		<>
			{image && (
				<>
					<div onClick={() => setDisplayDropDown(!displayDropDown)}>
						<Image
							width={40}
							height={40}
							alt="profileimg"
							className={styles.profileIcon}
							src={image}
						/>
					</div>
					{displayDropDown && (
						<div className={styles.dropDown}>
							{/* User Information */}
							<div className={styles.userInfo}>
								<div className={styles.UserInfoLeft}>
									<Image
										width={40}
										height={40}
										alt="profileimg"
										className={styles.profileIcon}
										src={image}
									/>
								</div>
								<div className={styles.userInfoRight}>
									<div className={styles.userInfoName}>
										{name}
									</div>
									<div>{email}</div>
								</div>
							</div>
							{/* Signout Button */}
							<button
								onClick={() => signOut()}
								className={styles.signOutBtn}>
								<div className={styles.signOutBtnText}>
									Sign Out
								</div>
							</button>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default ProfileBtn;
