import "./Footer.css";
import logo from "../../assets/logo-1.png";
const Footer = () => {
  return (
    <footer className="rodape">
      <section className="rodape__aluraGeek">
        <div className="rodape__divLogo">
          <img className="rodape__logo" src={logo} alt="Logo Isa Bordando" />
        </div>
        <nav className="rodape__informacoes">
          <a className="rodape__informacao" href="#">
            Quem somos
          </a>
          <a className="rodape__informacao" href="#">
            Política de privacidade
          </a>
          <a className="rodape__informacao" href="#">
            Programa fidelidade
          </a>
          <a className="rodape__informacao" href="#">
            Nossas lojas
          </a>
          <a className="rodape__informacao" href="#">
            Quero ser franqueado
          </a>
          <a className="rodape__informacao" href="#">
            Anuncie aqui
          </a>
        </nav>
        <form className="rodape__faleConosco">
          <p className="rodape__subtitulo">Fale conosco</p>
          <div className="rodape__formulario">
            <label className="rodape__nome" htmlFor="text">
              Nome
            </label>
            <input
              className="rodape__inputNome"
              type="text"
              data-tipo="nome"
              placeholder="André Lisboa"
              maxLength={40}
              title="O campo deve conter nomáximo 40 caracteres"
              required
            />
            <span className="input-mensagem-erro">
              Este campo não está válido
            </span>
          </div>
          <textarea
            className="rodape__mensagem"
            name="mensagem"
            id=""
            data-tipo="mensagem"
            cols={30}
            rows={5}
            minLength={2}
            maxLength={120}
            placeholder="Escreva sua mensagem"
            title="O campo deve conter no máximo 120 caracteres"
            required
          ></textarea>
          <span className="input-mensagem-erro">
            Este campo não está válido
          </span>
          <button className="rodape__btn Botao2" type="submit">
            Enviar mensagem
          </button>
        </form>
      </section>
      <section className="rodape__desenvolvedor">
        <p>Desenvolvido por Ataize Feitosa | 2022</p>
      </section>
    </footer>
  );
};

export default Footer;
