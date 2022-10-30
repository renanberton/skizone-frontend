import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowElement(ev) {
    const hide_element = ev.target.nextSibling;
    hide_element.classList.toggle('hide-element');
    hide_element.classList.toggle('show-element');
}

function DarkVariantExample() {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/skins/awp.png"
            alt="First slide"
            height={'150px'}
            width={'150px'}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/skins/ak-47.png"
            alt="Second slide"
            height={'150px'}
            width={'150px'}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/skins/M4a4.png"
            alt="Third slide"
            height={'150px'}
            width={'150px'}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

function Home() {
    return (
        <div>
        <Header />
        <div className="container-home">
            <div className="box-title">
                <h1>
                    SKIN ZONE
                </h1>
                <p>
                    Somos uma empresa especializada em venda de skins para Counter-Strike:Global Ofensive
                </p>
            </div>

            <DarkVariantExample />
            
            <div className="faq">
                <h1>DÚVIDAS FREQUENTES</h1>
                <div className="accordion-faq" onClick={ShowElement}>
                        <div className='accordion-item' >
                            <div className='show-element'>
                            Quais as formas de Pagamento ?
                            </div>
                            <div className="hide-element" id="hide-element">
                                Boleto bancário, PIX, cartão de crédito e débito.
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className="show-element">
                                Quantos dias para receber minha skin ?
                            </div>
                            <div className="hide-element" id="hide-element">
                                Boleto bancário, PIX, cartão de crédito e débito.
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className="show-element">
                                Essa plataforma é segura para pagamentos ?
                            </div>
                            <div className="hide-element" id="hide-element">
                                Boleto bancário, PIX, cartão de crédito e débito.
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className="show-element">
                                Se eu não gostar, posso devolver ?
                            </div>
                            <div className="hide-element" id="hide-element">
                                Boleto bancário, PIX, cartão de crédito e débito.
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className="show-element">
                                Qual a garantia que o cliente possui ?
                            </div>
                            <div className="hide-element" id="hide-element">
                                Boleto bancário, PIX, cartão de crédito e débito.
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Home;