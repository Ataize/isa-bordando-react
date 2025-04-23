import { GallerySectionProps } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./GallerySection.css";
import { Link } from "react-router-dom";
const GallerySection = ({ title, id, products }: GallerySectionProps) => {
  return (
    <section className="gallery" id={id}>
      <div className="gallery__section--header">
        <h2 className="gallery__title">{title}</h2>
        <Link to={`/product/${products[0]?.id}`} className="gallery__seeAll">
          Ver tudo
        </Link>
      </div>
      <div className="gallery__container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
