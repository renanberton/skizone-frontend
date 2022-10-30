import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Cadastro() {   
    return (        
    <div>
    < Header/>
        <section className="contato">
            <h1>CADASTRO</h1>
            <form action="" id="form">
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Digite seu nome' />
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='Digite seu e-mail' />
                <label htmlFor="">Telefone</label>
                <input type="text" placeholder='Digite seu telefone' />
                <label htmlFor="">Data de Nascimento</label>
                <input type="text" placeholder='Digite sua Data de Nascimento' />
                <label htmlFor="">Senha</label>
                <input type="text" placeholder='Digite sua senha' />
                <button type="submit" form="form" value="ENVIAR">CADASTRAR</button>
            </form>
        </section>
    < Footer />
    </div>

    )
}

export default Cadastro;