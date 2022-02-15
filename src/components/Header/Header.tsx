import React from 'react';
import '../Header/Header.css';

enum HeaderTypeEnum{
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
}

interface Props {
    img?:string;
    alt?:string;
    title:string;
    classNameHeader?:string;
    classNameDiv?:string;
    classNameH?:string;
    type:HeaderTypeEnum;
}

export const Header : React.FC<Props> = (props:Props) => {
    const classH = props.classNameHeader;
    const title = props.title;
    const header = (type:HeaderTypeEnum) => {
        switch(type)
        {
            case 0: return <h1>{title}</h1>;
            case 1: return <h2>{title}</h2>;
            case 2: return <h3>{title}</h3>;
            case 3: return <h4>{title}</h4>;
            case 4: return <h5>{title}</h5>;
            case 5: return <h6>{title}</h6>;
            default: return <p>{title}</p>
        }
    }
    return(
        <header className={classH}>
            <div className={props.classNameDiv}>
                {
                    header(props.type)
                }
            </div>
        </header>
    );
}

export default Header;