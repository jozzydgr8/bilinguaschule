
import {JSX} from 'react'
type buttonProps = {
    title?:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void),
    className?:string,
    disabled?:boolean
    icon?: JSX.Element,
    iconTwo?: JSX.Element,
    children?:JSX.Element


}
export const FlatButton = ({iconTwo, children, title, onClick,className,disabled, icon}:buttonProps)=>{
    return(
        <button onClick={onClick} className={className} disabled={disabled}>
            {iconTwo} {title} {children} {icon}
        </button>
    )
}