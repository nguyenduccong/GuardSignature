import React from 'react'


interface TitleProps {
    top?:string;
    title: string;
    des?: string;
    positionName?:
    | "row-center"
    | "row-start"
    | "row-end"
    | "col-center"
    | "col-sp";
    wDes?: string;
    wTitle?: string;
}
const Title: React.FC<TitleProps> = (props) => {
    return (
        <div className={props.positionName?`BoxTitle ${props.positionName}`:"BoxTitle row-center"}>
            <div className="top">{props.top}</div>
            <div className="title" style={{width:props.wTitle}}>{props.title}</div>
            <div className="description" style={{width:props.wDes}}>{props.des}</div>
        </div>
    )
}

export default Title
