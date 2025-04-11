import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__apresentacao">
        <h1 className="banner__titulo">Bordados à mão</h1>
        <p className="banner__descricao">Muita técnica e amor em cada peça</p>
        <a className="banner__btn Botao2" href="#prontaEntrega">
          Pronta Entrega
        </a>
      </div>
    </section>
  );
};

export default Banner;
