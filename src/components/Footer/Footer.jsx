
import React from 'react';
import style from './Footer.module.scss';
import { RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill, RiGithubFill } from 'react-icons/ri';


export default function Footer() {
let date = new Date();
let year = date.getFullYear();

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.right}>
          <ul className={style.sns}>
            <li><RiInstagramFill size="30" title="인스타그램" color="rgb(11, 60, 3)" /></li>
            <li><RiFacebookBoxFill size="30" title="페이스북" color="rgb(11, 60, 3)" /></li>
            <li><RiYoutubeFill size="30" title="유투브" color="rgb(11, 60, 3)" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}