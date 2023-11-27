function Footer(props) {
    console.log("Props:", props);
    console.log("Name", props.name);
    console.log("Age", props.age);
    console.log("Specialism:", props.specialism);
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Name: {props.age}</p>
            <p>Name: {props.specialism}</p>
        </div>
    );
}
export default Footer;