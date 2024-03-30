/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div className="px-4 py-8 border-2 rounded-lg shadow-inner border-zinc-500 w-[165px]">
            <h1>{props.Heading}</h1>
            <p className="text-4xl">{props.cardData}</p>
            <p className="text-sm">{props.dataUnit}</p>
        </div>
    );
}


export default Card;