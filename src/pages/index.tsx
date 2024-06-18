import React from "react";
import Layout from "@theme/Layout";
import HomepageHeader from "../components/HomePage";

export default function Home(): JSX.Element {
	return (
		<Layout
			description="Documentación de BoxMine World"
			wrapperClassName="pb-layout"
		>
			<HomepageHeader />
		</Layout>
	);
}
