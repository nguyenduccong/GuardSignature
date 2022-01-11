import React from 'react';

interface FeatureProps {
    img: any,
    title: string,
    content: any,
    reverse?: boolean
}

const SectionFeature: React.FC<FeatureProps> = (props) => {
    return (
        <div className={props.reverse ? "section Feature-Item reverse" : "section Feature-Item"}>
            <div className="Feature-Item-Content">
                <div className="title">{props.title}</div>

                <div className="BoxListFt">
                    {
                        props.content.map((item:any, idx:any) => (
                            <div className="ItemList" key={idx}>
                                <div className="title">{item.title}</div>
                                <div className="des">{item.des}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="Feature-Item-Img">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default SectionFeature
