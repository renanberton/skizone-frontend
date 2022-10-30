import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Context } from '../skins';

function Conta() {
    return (
        <div>
        < Header/>
        <section className="conta">
            <h1>Minha Conta</h1>
            <form action="" id="form">
                <input type="text" placeholder='Digite seu e-mail' />
                <label htmlFor="">Senha</label>
                <input type="text" placeholder='Digite sua senha' />
                <a href="/resetSenha">esqueci minha senha</a>
                <button type="submit" form="form" value="ENVIAR">ENTRAR</button>
                <span>Ainda não possui uma conta ?</span>
                <a href="/cadastro">Cadastre-se</a>
            </form>
        </section>
        < Footer />
        </div>
    )
}

export default Conta;