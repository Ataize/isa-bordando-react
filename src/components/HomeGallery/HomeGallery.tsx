import { products } from "../../data/products";
import GallerySection from "../GallerySection/GallerySection";

const HomeGallery = () => {
  const personalizados = products.filter(
    (product) => product.category === "personalizados"
  );
  const diversos = products.filter(
    (product) => product.category === "diversos"
  );
  const prontaEntrega = products.filter(
    (product) => product.category === "Pronta Entrega"
  );
  return (
    <>
      <GallerySection
        title="Personalizados"
        id="personalizados"
        products={personalizados}
      />
      <GallerySection title="Diversos" id="diversos" products={diversos} />
      <GallerySection
        title="Pronta Entrega"
        id="pronta-entrega"
        products={prontaEntrega}
      />
    </>
  );
};

export default HomeGallery;
