function But(){

    const hold = (e) =>  e.target.movementY = 30   ;
    return(
        <button onClick={(e)=>hold(e)}>Click me ❤️</button>
    );
}

export default But;