import PropTypes from "prop-types";

function Zwa(props) {
    console.log("Props:", props);
    console.log("Name", props.name);
    console.log("Age", props.age);
    console.log("Specialism:", props.specialism);
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Specialism: {props.specialism}</p>
            <img src="https://th.bing.com/th/id/OIP.2G1UfbH_HyId0yjkLtZYQQHaFj?rs=1&pid=ImgDetMain" alt="giant cat" />
        </div>
    );
}
Zwa.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    specialism : PropTypes.string,
}
export default Zwa;