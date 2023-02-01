import { FunctionComponent } from "react"

interface Props {
    icon: string
    title: string
    text: string
}

const ServiceItem: FunctionComponent<Props> = (props) => {
    return (
        <>
            <span className="fa-stack fa-4x">
                <span className="material-icons">{props.icon}</span>
            </span>
            <h4 className="my-3">{props.title}
            </h4>
            <p className="text-muted">{props.text}</p>
        </>
    )
}

export default ServiceItem