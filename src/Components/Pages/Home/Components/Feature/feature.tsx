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
        reverse:true,
    },
    {
        img: img3,
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
