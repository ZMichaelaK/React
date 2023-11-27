function Trainee2(props){
console.log("Props:", props);
console.log("Name:", props.name);
console.log("Age", props.age);
console.log("Specialism", props.specialism);
    return(
       <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Specialism: {props.specialism}</p>
        <p><h5> but she likes watching coding </h5></p>
        </div>
    );
}
export default Trainee2;


