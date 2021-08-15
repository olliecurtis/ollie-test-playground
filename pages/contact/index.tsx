import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <p className={styles.description}>
        Get in contact with me using the options below
      </p>
    </Layout>
  )
}

export default Home
