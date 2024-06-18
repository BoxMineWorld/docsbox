import React from "react";
import Link from "@docusaurus/Link";
import styles from "./style.module.css";
import clsx from "clsx";

export default function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <div className={styles["text-info"]}>
          <h2 className="text-h2">BoxMine Docs</h2>
          <p className="big-regular-text">Documentación de BoxMine World</p>
          <center>
            <div className={clsx(styles.button)}>
              <Link to="/docs/welcome">
                <button>Documentación</button>
              </Link>
            </div>
          </center>
        </div>
      </div>
    </header>
  );
}
