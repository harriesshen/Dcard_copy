import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faIndent,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import styles from '../styles/content.module.css'
import { MouseEvent, useState } from 'react';
import { GetStaticProps } from 'next';

const content = () => {
  // const result: Array<bulletin> = res
  const addUnderline = (e: MouseEvent) => {
    // var element = e.target.id;
    const navList = document.getElementsByClassName('content_Nav__LeJZO')
    const targetId = e.currentTarget.id
    // console.log(navList);
    console.log();
    if (e.currentTarget.className.indexOf('content_navUnderline__xAFmU') > -1) {
      return false;
    }
    var i = 0
    while (navList.length > i) {
      var id = navList[i].id
      if (id == targetId) {
        e.currentTarget.classList.add('content_navUnderline__xAFmU')
      } else {
        var element = document.getElementById(id);
        element?.classList.remove('content_navUnderline__xAFmU')
      }
      i++
    }
  }
  return (
    <div className={styles.bodyBorder}>
      <div className={styles.bodyLeft}>
        <div className={styles.optionDiv}>
          <a href='/Allboard' className={styles.link}>
            <FontAwesomeIcon icon={faIndent} size={'xl'} />
            <span className={styles.optionText}>所有看板</span>
          </a>
        </div>
      </div>
      <div className={styles.bodyContent}>
        <div className={styles.contentBorder}>
          <div className={styles.contentNav}>
            <a className={`${styles.Nav} ${styles.navUnderline}`} id='all' onClick={e => addUnderline(e)}>全部</a>
            <a className={styles.Nav} id='follow' onClick={e => addUnderline(e)}>追蹤</a>
            <a className={styles.Nav} id='title' onClick={e => addUnderline(e)}>主題</a>
          </div>
        </div>
        <div className={styles.bulletinBorder}>
          {
            // res?.map((item: any, index: any) => (
            //   <div key={index} className={styles.bulletin}>
            //     {item.excerpt}
            //   </div>
            // ))
          }

        </div>

      </div>
    </div>
  )


}

export default content