const Card = ({ id, title, desc, image }) => {
    return (
        <div className="card">
            <div>
                {id + '. ' + title}
            </div>
            <div>
                {desc}
            </div>
            <img className="cardPhoto" src={image} />
        </div>
    )
}

export default Card;