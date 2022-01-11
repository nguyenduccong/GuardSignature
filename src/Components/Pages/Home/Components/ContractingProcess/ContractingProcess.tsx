import React from 'react'
import Title from '../../../../Common/Title/title';
import icon1 from '../../../../../Assets/images/upload-icon-1.png';
import icon2 from '../../../../../Assets/images/upload-icon-2.png';
import icon3 from '../../../../../Assets/images/upload-icon-3.png';
import icon4 from '../../../../../Assets/images/upload-icon-4.png';

const data = [
    {
        icon: icon1,
        title: '업로드하기',
        des: `필요한 계약서 파일을
        업로드합니다.`
    },
    {
        icon: icon2,
        title: '서명 요청하기',
        des: `업로드한 계약서 파일에
        서명 요청을 하세요.`
    },
    {
        icon: icon3,
        title: '서명 입력하기',
        des: `상대방이 간단한 절차를 통해
        서명할 수 있습니다.`
    },
    {
        icon: icon4,
        title: '계약 완료',
        des: `언제 어디서든
        5분 만에 계약 완료!`
    },
]

const ContractingProcess = () => {
    return (
        <div className="section ConTractProgress">
            <div className="container">
                <Title
                    title={'간단하게 끝내는 계약과정'}
                    des={`계약서 파일을 업로드하여 서명을 요청해 보세요.
                상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.
                언제 어디서든 5분만에 계약을 체결해 보세요.`}
                    wDes={'540px'}
                />

                <div className="BoxProcess">
                    {
                        data.map((item, idx) => (
                            <div className="ProcessItem" key={idx}>
                                <div className="ProcessItem-icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="ProcessItem-title">
                                    {item.title}
                                </div>
                                <div className="ProcessItem-des">
                                    {item.des}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ContractingProcess
