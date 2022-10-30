function BoxSkins(props) {

const productsArray = [];
function cartItem() {
    const products = [{
        name: props.name,
        price: props.price,
        description:props.description,
    }];
    
    const productsJSON = JSON.stringify(products);
    localStorage.setItem('Products', productsJSON);

    const productsStorage = localStorage.getItem('Products');
    productsArray.push(productsStorage);
    console.log(JSON.parse(productsStorage));
}


    return (
        <div className="skins">
        <div className="box-img">
            <img src={props.img} alt="" />
        </div>
            <h2>{props.name}</h2>
            <span>{props.description}</span>
            <p>{props.price}</p>
            <button>COMPRAR</button>
            <button className='carrinho' onClick={cartItem}>ADICIONAR AO CARRINHO</button>
        </div>
    )

}

export default BoxSkins;