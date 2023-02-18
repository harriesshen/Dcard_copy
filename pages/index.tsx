import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faIndent,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Content from './content'
import { GetStaticProps } from 'next'
import useSWR from 'swr'
const inter = Inter({ subsets: ['latin'] })


interface bulletin {
  id: number, //文章ID
  title: string, //標題
  excerpt: string, //內文
  forumName: string, //文章類型
  likeCount: number, //愛心
  commentCount: number, //評論
}
interface content {
  res: bulletin[];
}

export const getStaticProps: GetStaticProps<any> = async () => {
  // const data = await fetch(' https://www.dcard.tw/service/api/v2/posts/241249872/comments')
  // console.log('1', data)
  // const res = await data.json();
  // console.log('2', res)
  return {
    props: {
      // res
    }
  }
}
export default function Home() {
  // const {data: cachedData} = useSWR('data',()=>getStaticProps())
  return (
    <>
      <Head>
        <title>Dcard_example</title>
        <meta name="description" content="Dcard by harries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.dcardHeader}>
          <div className={styles.leftBox}>
            <Image src='https://www.dcard.tw/_next/static/media/logo.8b5bbef2.svg' alt='Dcard' width={74} height={28} />
            <div className={styles.inputGroup}>
              <input placeholder='&nbsp;搜尋文章' type='search' className={styles.headerInput} />
              <button className={styles.headerBtn}><FontAwesomeIcon icon={faMagnifyingGlass} size={'lg'} /></button>
            </div>
          </div>
          <a className={styles.res_login}>註冊／登入</a>
          <button className={styles.download}><div className={styles.downloadText}>下載APP</div></button>
        </div>
      </header>
      <Content />
    </>
  )
}
