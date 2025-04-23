import Hero from "@/components/home/hero";
import TendingProducts from "@/components/home/product-list/tending-products";
import SummerSale from "@/components/home/product-list/summer-sale";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className='px-6'> 
        <TendingProducts />
        <SummerSale />
      </div>
      {/* <ProductCard /> */}
    </main>
  );
}
