import React from 'react'
import Title from '../../../../../Common/Title/title'


interface ServiceProps {
    img:string,
    data:any,
    color?:boolean,
    reverse?:boolean
}
const SectionService: React.FC<ServiceProps> = (props) => {
    return (
       <div className={props.color?"section bgGray":"section"}>
           <div className="container">
                <div className={props.reverse?"ItemService reverse":"ItemService"}>
                    <img src={props.img} alt="" />
                    <div className="ItemService-text">
                        <Title 
                            top={props.data.top}
                            title={props.data.title}
                            des={props.data.des}
                            positionName={props.data.positionName}
                            wTitle={props.data.wTitle}
                            wDes={props.data.wDes}
                        />
                    </div>
                </div>
           </div>
       </div>
    )
}

export default SectionService
