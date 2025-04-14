import { Product } from "../../types/Product";

const ProductCard = ({ id, imageUrl, name, price }: Product) => {
  return (
    <div className="gallery__products" data-gallery-products id={String(id)}>
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
  );
};

export default ProductCard;
