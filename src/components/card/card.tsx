import "./card.css"

interface Cardprops{
    price: number,
    title: string,
    image: string
}

export function Card({price, image, title} : Cardprops){
    return(
        <div className="card">
            <img src="" alt="" />
            <h2></h2>
            <p><b>Valor</b></p>
        </div>
    )
}