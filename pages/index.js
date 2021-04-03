

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../libs/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <Alert type='success'>Coucou</Alert>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a><h3>{title}</h3></a>
              </Link>
              <p>{id}</p>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />  
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
