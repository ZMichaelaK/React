import PropTypes from "prop-types";

function King(props) {
    return (
        <div>
            <p> <h2>{props.nm} </h2></p>
            <p>City: {props.cty}</p>
            <p>House: {props.hse}</p>
            <p>Years: {props.yrs}</p>
        </div>
    );
}
King.propTypes = {
    nm: PropTypes.string.isRequired,
    cty: PropTypes.string.isRequired,
    hse : PropTypes.string.isRequired,
    yrs : PropTypes.string.isRequired,
}
export default King;