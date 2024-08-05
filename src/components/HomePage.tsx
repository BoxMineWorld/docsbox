import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./style.module.css";
import clsx from "clsx";

const FeatureList = [
	{
		title: "Servicio 24/7",
		description: (
			<>
				Hacemos todo lo posible para mantener nuestros servicios funcionando
				24/7 los 365 dias del año.
			</>
		),
	},
	{
		title: "Los mejores precios.",
		description: (
			<>Tratamos de dar los mejores precios para los servicios que damos.</>
		),
	},
	{
		title: "Sus datos estan asegurados.",
		description: (
			<>
				Estamos costantemente creando respaldos para mantener sus datos lo mas
				seguro posibles.
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header>
			<div className={clsx(styles.heroBanner)}>
				<div className={clsx("container", styles.container)}>
					<div className={styles["text-info"]}>
						<h1 className="text-h1">{siteConfig.title}</h1>
						<p className="big-regular-text">{siteConfig.tagline}</p>
						<div className={styles.buttons}>
							<Link to="/docs/welcome" className={styles.button}>
								Explorar documentación
							</Link>
						</div>
					</div>
					<div className={styles.heroImage}>
						<img src="/img/logo.ico" alt="BoxMine World" />
					</div>
				</div>
			</div>

			<div className={clsx(styles.announcementBar)}>
				<div className="container">
					<p>
						🎉 ¡Nuevas funciones disponibles! Echa un vistazo a nuestra última
						actualización.
					</p>
				</div>
			</div>

			<main>
				<section className={styles.features}>
					<div className="container">
						<div className="row">
							{FeatureList.map((props, idx) => (
								<Feature key={idx} {...props} />
							))}
						</div>
					</div>
				</section>

				<section className={styles.getStarted}>
					<div className="container">
						<h2>Listo para empezar?</h2>
						<p>¡Sumérgete en BoxMine World y crea experiencias increíbles!</p>
						<Link to="/docs/welcome" className={styles.button}>
							Explorar documentación
						</Link>
					</div>
				</section>
			</main>
		</header>
	);
}
