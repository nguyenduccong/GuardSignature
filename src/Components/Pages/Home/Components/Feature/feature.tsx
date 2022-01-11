import React from 'react';
import img1 from '../../../../../Assets/images/ft-01.png';
import img2 from '../../../../../Assets/images/ft-02.png';
import img3 from '../../../../../Assets/images/ft-03.png';
import SectionFeature from './SectionFeature/SectionFeature';

const data = [
    {
        img: img1,
        title: `모두 시그니처만의
        효과적인 기능`,
        content: [
            {
                title: "템플릿 저장 및 불러오기",
                des: `자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 
                불러와 빠르게 작업할 수 있습니다.`
            }, {
                title: "폴더 설정",
                des: `별도로 관리가 필요한 문서들은 폴더 설정을 통해
                보다 체계적으로 관리할 수 있습니다.`
            },
            {
                title: "텍스트 및 체크박스 입력",
                des: `텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게
                입력하고 상대방의 동의 여부를 확인할 수 있습니다.`
            },
            {
                title: "다양한 파일형식 지원",
                des: `한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG,
                GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고
                사용할 수 있습니다.`
            },

        ],
    },
    {
        img: img2,
        title: `계약을 쉽고 빠르게
        체결하는 방법!`,
        content: [
            {
                title: "공인인증서 없는 본인인증",
                des: `공인인증서와 ActiveX가 필요 없습니다. 이메일 인증,
                휴대폰 인증, 암호인증 설정으로 간편하게 본인인증 해 보세요.`
            }, {
                title: "카카오톡으로 서명 요청하기",
                des: `카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은
                PC, 모바일 언제 어디에서나 계약서에 서명할 수 있습니다.`
            },
            {
                title: "계약 체결과 보안",
                des: `누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게
                계약을 체결하고, 이후에도 지속적으로 관리할 수 있습니다.`
            },
            {
                title: "가입 없이 즉시 서명",
                des: `계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후
                즉시 서명할 수 있습니다.`
            },

        ],
        reverse:true,
    },
    {
        img: img3,
        title: `수월하게 계약을
        완료하세요`,
        content: [
            {
                title: "감사추적인증서를 통한 증명",
                des: `계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약
                당사자의 행위를 쉽게 증명할 수 있습니다.`
            }, {
                title: "혼자 서명하기",
                des: `동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게
                서명할 수 있습니다.`
            },
            {
                title: "다양한 드라이브 업로드 지원",
                des: `Google Drive, Dropbox, Box, One Drive에 저장되어 있
                문서를 변환 없이 바로 업로드하여 이용하세요.`
            },
            {
                title: "계약 문서 관리",
                des: `내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드,
                공유하기, 삭제하기가 가능합니다.`
            },

        ],
    },
]

const Feature = () => {
    return (
        <div className="Feature">
            <div className="container">
                {data.map((item, idx) => (
                    <SectionFeature img={item.img} title={item.title} content={item.content} reverse={item.reverse} />
                ))}
            </div>
        </div>
    )
}

export default Feature
