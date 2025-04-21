import { products } from "../../data/products";
import { HomeGalleryProps } from "../../types/Product";
import GallerySection from "../GallerySection/GallerySection";

const HomeGallery = ({ searchTerm }: HomeGalleryProps) => {
  const filterProducts = (category: string, searchTerm: string) => {
    return products
      .filter((product) => product.category === category)
      .filter((product: { name: string }) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };
  const personalizados = filterProducts("personalizados", searchTerm);
  const diversos = filterProducts("diversos", searchTerm);
  const prontaEntrega = filterProducts("Pronta Entrega", searchTerm);

  const hasProducts =
    personalizados.length > 0 ||
    diversos.length > 0 ||
    prontaEntrega.length > 0;

  return (
    <>
      {!hasProducts && (
        <p className="no-products-message">Nenhum produto encontrado.</p>
      )}
      {personalizados.length > 0 && (
        <GallerySection
          title="Personalizados"
          id="personalizados"
          products={personalizados}
        />
      )}
      {diversos.length > 0 && (
        <GallerySection title="Diversos" id="diversos" products={diversos} />
      )}
      {prontaEntrega.length > 0 && (
        <GallerySection
          title="Pronta Entrega"
          id="pronta-entrega"
          products={prontaEntrega}
        />
      )}
    </>
  );
};

export default HomeGallery;
