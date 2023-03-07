import { signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

import styles from "../styles/ProfileBtn.module.css";

export const ProfileBtn = ({
	name,
	email,
	image,
}: {
	name: string | null | undefined;
	email: string | null | undefined;
	image: string | null | undefined;
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
								className={styles.signOutBtn}
								onClick={() => signOut()}>
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
