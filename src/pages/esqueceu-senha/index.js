import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

function EsqueceuSenha() {
    return (
        <div>
        < Header/>
        <section className="esqueceu-senha">
            <h1>ESQUECI MINHA SENHA</h1>
            <span>Digite seu e-mail e nós enviaremos uma nova senha.</span>
            <form action="" id="form">
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='Digite seu e-mail' />
                <button type="submit" form="form" value="ENVIAR">ENVIAR</button>
            </form>
        </section>
        < Footer />
        </div>
    )

}

export default EsqueceuSenha;