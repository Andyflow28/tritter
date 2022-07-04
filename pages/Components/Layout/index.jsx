import Head from "next/head";
import styles from "../../../styles/Layout.module.css";
import NavBar from "./NavBar";

const Layout = ({children}) => {
    return(
    <>
  <Head>
    <meta charset="UTF-8"/>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Head>

      <NavBar></NavBar>

  <main className={styles.container}>
    {children}
  </main>
  </>
    )
};

export default Layout;
