import { FC } from "react"
import { Card } from "react-bootstrap"
import { IGif } from "../../../types/gif"


interface IPropsCardGif {
    gif: IGif
}

export const CardGif: FC<IPropsCardGif> = ({gif}) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={gif.urlGif} />
            <Card.Body>
                <Card.Title>{gif.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
