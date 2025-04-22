import { GallerySectionProps } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./GallerySection.css";
const GallerySection = ({ title, id, products }: GallerySectionProps) => {
  return (
    <section className="gallery" id={id}>
      <div className="gallery__section--header">
        <h2 className="gallery__title">{title}</h2>
        <a className="gallery__seeAll" href="todos.html">
          Ver tudo
        </a>
      </div>
      <div className="gallery__container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );

  // const custom = products
  //   .filter((product) => product.category === "personalizados")
  //   .map(({ imageUrl, price, name, id }) => (
  //     <div
  //       className="gallery__products"
  //       data-gallery-products
  //       id={String(id)}
  //       key={id}
  //     >
  //       <a href={`verProduto.html?id=${id}`}>
  //         <img
  //           className="gallery__image"
  //           src={imageUrl}
  //           alt="Imagem do produto"
  //           data-product-custom="imagem"
  //         />
  //         <p
  //           className="gallery__productDescription"
  //           data-produto-personalizado="nome"
  //         >
  //           {name}
  //         </p>
  //         <p className="gallery__price" data-galeria-personalizado="preco">
  //           {price.toLocaleString("pt-BR", {
  //             style: "currency",
  //             currency: "BRL",
  //           })}
  //         </p>
  //       </a>
  //     </div>
  //   ));
  // return (
  //   <section
  //     className="gallery custom"
  //     id="custom"
  //     data-produto-personalizado="todos"
  //   >
  //     <div className="gallery__section">
  //       <h2 className="gallery__title">Personalizados</h2>
  //       <a className="gallery__seeAll" href="todos.html">
  //         Ver tudo
  //       </a>
  //     </div>
  //     {custom}
  //   </section>
  // );
};

export default GallerySection;
