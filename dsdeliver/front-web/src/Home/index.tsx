import './styles.css';
import { ReactComponent as MainLogo } from './main.svg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-container">
          <h1 className="home-title">
            Faça seu pedido 
            <br /> que entregamos 
            <br /> pra vocè!!!
          </h1>
          <h3 className="home-subtitle">
            Escolha o seu produto e em poucos minutos
            <br /> levaremos na sua porta
          </h3>
          <a href="orders" className="home-btn-order">
            FAZER PEDIDO
          </a>
        </div>
        <div className="home-image">
          <MainLogo />
        </div>
      </div>
    </div>
  )
}

export default Home;