import './Card.css'

export default function Card(props) {
    return (
        <>
            <div className='card-container'>
                <img src={props.pic} />
                <h2>{props.brand}</h2>
                <h3>{props.model}</h3>
            </div>
        </>
    )
}
