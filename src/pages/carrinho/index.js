import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ItemCarrinho from '../../components/item-carrinho';

function Carrinho() {
    let product = localStorage.getItem('Products');
    let item = JSON.parse(product);
    console.log(item);
    return (
        <div>
        < Header/>
        <section className="cart">
            <h1>Minha Conta</h1>
            <div className="box-carrinho">
                < ItemCarrinho name={item[0].name} price={item[0].price} />
            </div>
            <button>FINALIZAR COMPRA</button>

        </section>
        < Footer />
        </div>
    )

}

export default Carrinho;