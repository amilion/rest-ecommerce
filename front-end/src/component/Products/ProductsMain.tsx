import { useProducts } from "../../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./items/ProductCard";

function ProductsMain() {
  const { products, error } = useProducts();
  console.log(error);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ lg: 3, sm: 2, base: 1 }} spacing={10}>
        {products.map((product) => (
          <ProductCard result={product} key={product.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default ProductsMain;
