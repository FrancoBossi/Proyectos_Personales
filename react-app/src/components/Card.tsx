import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
    children : ReactNode
}

function Card(props: Props) {
    const {children} = props;

    const width = {
        width: '1550px',
        height: '880px'
    }

    return <div className="card" style={width}>
    <div className="card-body">
        {children}
    </div>
  </div>
}

interface CardBodyProps{
    title: string;
    text: string;
}

 export function CardBody(props: CardBodyProps) {
    const {title, text} = props;
    return <Fragment>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    </Fragment> 
    
}

export default Card;