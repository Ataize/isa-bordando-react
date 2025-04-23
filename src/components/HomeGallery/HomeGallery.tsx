import { products } from "../../data/products";
import { HomeGalleryProps } from "../../types/Product";
import GallerySection from "../GallerySection/GallerySection";

const HomeGallery = ({ searchTerm }: HomeGalleryProps) => {
  // Função para filtrar os produtos pela categoria e pelo termo de pesquisa
  const filterProducts = (category: string, searchTerm: string) => {
    return products
      .filter((product) => product.category === category) // Filtra pela categoria
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra pelo nome, caso contenha o termo de busca
      );
  };

  // Filtragem para cada categoria
  const personalizados = filterProducts("personalizados", searchTerm);
  const diversos = filterProducts("diversos", searchTerm);
  const prontaEntrega = filterProducts("Pronta Entrega", searchTerm);

  // Verifica se há produtos para mostrar
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
