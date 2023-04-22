// Next
import Image from "next/image";
import Link from "next/link";

// React
import { useState } from "react";

// Styles
import styles from "../styles/CreateWord.module.css";

const CreateWord = () => {
	const [displayDropDown, setDisplayDropDown] = useState(false);

	return (
		<>
			<div
				className={styles.plusContainer}
				onClick={() => {
					setDisplayDropDown(!displayDropDown);
				}}>
				<Image
					style={{ objectFit: "contain" }}
					src="/plus.svg"
					alt="icon"
					fill
				/>
			</div>
			{displayDropDown && (
				<div className={styles.dropDown}>
					<Link
						href="/create/word"
						style={{ color: "inherit", textDecoration: "inherit" }}>
						<div className={styles.dropDownOptionOne}>Word</div>
					</Link>
					<div className={styles.dropDownOption}>Set</div>
				</div>
			)}
		</>
	);
};

export default CreateWord;
