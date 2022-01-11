import React from 'react'
import icon from '../../../../../Assets/images/arrow-button.png'
const Banner = () => {
    return (
        <div className="Banner">
            <div className="container" style={{height:"100%"}}>
                <div className="Banner-Box">
                    <div className="Banner-Content">
                        <div className="Banner-Content-Title">
                            모든 계약을 쉽고 <br />
                            간단하게, 빠르게 처리하세요.
                        </div>

                        <div className="Banner-Content-Description">
                            가드 시그니처를 이용하면 어떤 계약이든
                            복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
                            문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                        </div>
                    </div>
                    <div className="Banner-Button">
                        <span>지금 확인하기</span>
                       <img src={icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
