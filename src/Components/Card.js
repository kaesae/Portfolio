const Card = ({ id, title, desc, subtitle }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">{title}
                    <div>{subtitle}</div></div>
                <div className="card-back">{desc}   </div>
            </div>
        </div>
    )
}

export default Card;