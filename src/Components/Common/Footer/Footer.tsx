import React from 'react'
import { Link } from 'react-router-dom';
import icon1 from '../../../Assets/images/-e-sns_icon_1.svg';
import icon2 from '../../../Assets/images/-e-sns_icon_2.svg';
import icon3 from '../../../Assets/images/-e-sns_icon_3.svg';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="boxMenu">
                    <div className="menuFooter">
                        <Link to="/">이용약관</Link>
                        <Link to="/">개인정보처리방침</Link>
                        <Link to="/">고객센터</Link>
                    </div>
                    <div className="boxIcon">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                </div>
                <div className="boxInfo">
                    <span>(주) 가드시그니처</span> | <span>대표자 : 홍길동</span> | <span>사업자 등록번호 : 356-00-00000</span> <br />
                    <span>사업자 등록번호 : 356-00-00000</span> | <span>FAX : 070-0000-0000</span>
                    <br />
                    <span>서울특별시 강남구 도산대로 8길 17 3층 </span> <br /><br />

                    <span>Copyright© GUARDSIGNATURE All rights reserved.</span>
                </div>

            </div>
        </div>
    )
}

export default Footer
