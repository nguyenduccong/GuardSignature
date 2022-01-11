import React from 'react'
import Title from '../../Common/Title/title'
import Banner from './Components/Banner/Banner'
import ContractingProcess from './Components/ContractingProcess/ContractingProcess'
import Feature from './Components/Feature/feature'
import Service from './Components/service/service'
import WhyChoose from './Components/WhyChoose/WhyChoose'

const Home = () => {
    return (
        <div>
            <Banner />
            <ContractingProcess />
            <Service />
            <div className="section EAQ">
                <div className="container">
                    <div className="EAQ-Content">
                        <div className="EAQ-Content-Title">Easy and quick</div>
                        <div className="EAQ-Content-Des">
                            가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을 진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고,<br />
                            서명을 요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이 서명이 가능합니다. <br />
                            계약이 진행되는 모든 과정을 효과적으로 체크할 수 있고, 언제 어디서든 5분이면 계약이 완료됩니다.
                            <br />
                            <br />  
                            가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고 관리하세요.
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <WhyChoose />
        </div>
    )
}

export default Home
