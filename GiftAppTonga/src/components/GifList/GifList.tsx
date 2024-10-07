import { CardGif } from "../ui/CardGif/CardGif"
import { useAppSelector } from "../../hooks/redux"

export const GifList = () => {

    const gif = useAppSelector((state) => state.gif.gif)

    return (
        <div style={{ columnCount: "3", columnGap: "2rem" }}>
            {gif.map((el, i) => (
                <div key={i} style={{ breakInside: "avoid", marginBottom: "1rem" }}>
                    <CardGif gif={el} />
                </div>
            ))}
        </div>
    )
}


