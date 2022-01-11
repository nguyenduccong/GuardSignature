import React from 'react'
import { Menu } from 'antd';
import Logo from '../../../Assets/images/logo-icon-1.png';
const Header = () => {
    return (
        <div className="Header">
            <div className='container'>
                <div className="Header-Menu">
                    <div className="Logo">
                        <img src={Logo} alt="" />
                    </div>

                    <Menu mode="horizontal">
                        <Menu.Item key="mail">
                            서비스 소개
                        </Menu.Item>
                        <Menu.Item key="mail2">
                            법적효력·보안
                        </Menu.Item>
                        <Menu.Item key="mail3">
                            활용 분야
                        </Menu.Item>
                        <Menu.Item key="mail4">
                            이용 혜택
                        </Menu.Item>
                        <Menu.Item key="mail5">
                            요금 안내
                        </Menu.Item>
                        <Menu.Item key="mail6">
                            고객센터
                        </Menu.Item>
                    </Menu>

                    <div className="Login">
                        <span>로그인</span>
                        <span>회원가입</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
