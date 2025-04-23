import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Produto não encontrado</p>;

  const similares = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <section className="produto-sec">
      <section className="produto">
        <img
          className="produto-imagem"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="produto-informacoes">
          <h1 className="gallery__title">{product.name}</h1>
          <p className="gallery__price">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="gallery__description">{product.description}</p>
        </div>
      </section>

      <section className="similares">
        <h2 className="gallery__title">Produtos Similares</h2>
        <div className="produtosSimilares">
          {similares.map((sim) => {
            return (
              <div key={sim.id} className="gallery__products">
                <Link to={`/product/${sim.id}`}>
                  <img
                    className="gallery__image"
                    src={sim.imageUrl}
                    alt={sim.name}
                  />
                  <p className="gallery__productDescription">{sim.name}</p>
                  <p className="gallery__price">
                    {sim.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
