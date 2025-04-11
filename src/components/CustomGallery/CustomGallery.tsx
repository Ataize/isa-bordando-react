import { products } from "../../data/products";
import "./CustomGallery.css";
const CustomGallery = () => {
  const custom = products
    .filter((product) => product.category === "personalizados")
    .map(({ imageUrl, price, name, id }) => (
      <div
        className="gallery__products"
        data-gallery-products
        id={String(id)}
        key={id}
      >
        <a href={`verProduto.html?id=${id}`}>
          <img
            className="gallery__image"
            src={imageUrl}
            alt="Imagem do produto"
            data-product-custom="imagem"
          />
          <p
            className="gallery__productDescription"
            data-produto-personalizado="nome"
          >
            {name}
          </p>
          <p className="gallery__price" data-galeria-personalizado="preco">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </a>
      </div>
    ));
  return (
    <section
      className="gallery custom"
      id="custom"
      data-produto-personalizado="todos"
    >
      <div className="gallery__section">
        <h2 className="gallery__title">Personalizados</h2>
        <a className="gallery__seeAll" href="todos.html">
          Ver tudo
        </a>
      </div>
      {custom}
    </section>
  );
};

export default CustomGallery;
