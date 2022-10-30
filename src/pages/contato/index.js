import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Contato() {
    return (
        <div>
        < Header/>
        <section className="contato">
            <h1>Fale Conosco</h1>
            <form action="" id="form">
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Digite seu nome' />
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='Digite seu e-mail' />
                <label htmlFor="">Telefone</label>
                <input type="text" placeholder='Digite seu telefone' />
                <label htmlFor="">Mensagem</label>
                <input type="text" placeholder='Digite sua mensagem.' />
                <button type="submit" form="form" value="ENVIAR">ENVIAR</button>
            </form>
        </section>
        < Footer />
        </div>
    )

}

export default Contato;