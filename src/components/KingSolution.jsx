import PropTypes from "prop-types";

function KingSolution(props) {
    return (
        <div>
            <h2> <u> {props.nm}</u></h2>
            <p>City: {props.cty}</p>
            <p>House: {props.hse}</p>
            <p>Years: {props.yrs}</p>
        </div>
    );
}
KingSolution.propTypes = {
    nm: PropTypes.string.isRequired,
    cty: PropTypes.string.isRequired,
    hse : PropTypes.string.isRequired,
    yrs : PropTypes.string.isRequired,
}
export default KingSolution;