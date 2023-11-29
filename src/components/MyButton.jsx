function MyButton() {

    function sayYo(){
        alert("Yoo!");
    }
    
    return ( <button onClick={sayYo}>
        CLICK ME!
    </button> );
}

export default MyButton;