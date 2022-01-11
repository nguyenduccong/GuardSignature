import React from 'react'
import Title from '../../../../Common/Title/title';
import icon1 from '../../../../../Assets/images/-e-reason_icon_1.svg';
import icon2 from '../../../../../Assets/images/-e-reason_icon_2.svg';
import icon3 from '../../../../../Assets/images/-e-reason_icon_3.svg';
import icon4 from '../../../../../Assets/images/-e-reason_icon_4.svg';
import icon5 from '../../../../../Assets/images/-e-reason_icon_5.svg';
import icon6 from '../../../../../Assets/images/-e-reason_icon_6.svg';
import WC1 from '../../../../../Assets/images/WC-01.png';
import Button from '../../../../Common/Button/Button';

const data1 = [
    {
        icon: icon1,
        title: "쉽고 편리하게",
        des: `번거로운 절차 없이 누구나
        빠르게 계약을 체결할 수 있습니다.`
    },
    {
        icon: icon3,
        title: "안전한 보안",
        des: `데이터는 암호화되어 전송되고
        안전한 곳에 저장됩니다.`
    },
    {
        icon: icon5,
        title: "다양한 파일형식",
        des: `한글, 오피스부터 PDF, JPG와
        같은 이미지 파일도 변환없이 지원`
    },
]

const data2 = [
    {
        icon: icon2,
        title: "간단한 본인인증",
        des: `공인인증서와 ActiveX없이도
        본인인증을 할 수 있습니다..`
    },
    {
        icon: icon4,
        title: "효율적인 작업",
        des: `자주 사용하는 문서들을 저장하고
        불러와 작업할 수 있습니다.`
    },
    {
        icon: icon6,
        title: "계약서 관리",
        des: `관리가 필요한 문서를 한 눈에 보고
        체계적으로 관리할 수 있습니다.`
    },
]

const WhyChoose = () => {
    return (
        <div className="WhyChoose section bgGray">
            <Title
                title="가드 시그니처를 선택하는 이유"
                des={`많은 기업들이 가드 시그니처를 선택하는 이유,
                아래 버튼을 눌러 상세한 정보를 알아보세요.`}
                wDes={'340px'}
            />
            <div className="container">
                <div className="BoxList">
                    <div className="ColList">
                        {data1.map((item, idx) => (
                            <div className="Item left">
                                <img src={item.icon} alt="" />
                                <div className="title">{item.title}</div>
                                <div className="des">{item.des}</div>
                            </div>
                        ))}
                    </div>

                    <div className="Image">
                            <img src={WC1} alt="" />
                    </div>

                    <div className="ColList">
                        {data2.map((item, idx) => (
                            <div className="Item right">
                                <img src={item.icon} alt="" />
                                <div className="title">{item.title}</div>
                                <div className="des">{item.des}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="f-center">
                <Button text={"가이드 다운로드"}></Button>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose
