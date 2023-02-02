import { FunctionComponent } from "react"

interface Props {
    companyName: string
}

const Header: FunctionComponent<Props> = (props) => {
    return (
        <header className="masthead" style={{backgroundImage: `url("https://picsum.photos/1920/1080?${Date.now()}")`}}>
            <div className="container">
                <div className="masthead-subheading">{props.companyName}</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
    )
}

export default Header