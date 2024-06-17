import React from "react";
import Layout from "@theme/Layout";
import { HomePage } from "../components";

export default function Home(): JSX.Element {
	return (
		<Layout
			description="Documentation of Hedystia packages, applications and others"
			wrapperClassName="pb-layout"
		>
			<HomePage />
		</Layout>
	);
}
