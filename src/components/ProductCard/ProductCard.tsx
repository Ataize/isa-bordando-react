import { Link } from "react-router-dom";
import { Product } from "../../types/Product";

const ProductCard = ({ id, imageUrl, name, price }: Product) => {
  return (
    <div className="gallery__products" data-gallery-products id={String(id)}>
      <Link to={`/product/${id}`}>
        <img
          className="gallery__image"
          src={imageUrl}
          alt={`Imagem do produto${name}`}
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
      </Link>
    </div>
  );
};

export default ProductCard;
