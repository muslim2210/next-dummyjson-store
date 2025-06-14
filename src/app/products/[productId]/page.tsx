"use client";
import LoadingSpinner from "@/components/fragments/LoadingSpinner";
import Wrapper from "@/components/layouts/Wrapper";
import Gallery from "@/components/products/Gallery";
import ProductInfo from "@/components/products/ProductInfo";
import { useFetchProductDetail } from "@/lib/action/useFetchProducts";
import { use } from "react";

interface ProductPageParams {
  productId: number;
}

interface ProductPageProps {
  params: Promise<ProductPageParams>;
}


const ProductDetails = ({ params }: ProductPageProps) => {
  const { productId } = use(params);
  const { data, loading, error } = useFetchProductDetail(productId);

  if (error) return <p>{error.message}</p>;
  if (loading) {
    return (
      <LoadingSpinner />
    )
  } else {
    return (
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-2 lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] mt-10 md:mt-0 max-w-[400px] md:max-w-[700px] lg:max-w-full mx-auto lg:mx-0">
              {data && (
                <Gallery productMedia={data.images} />
              )}
            </div>
            {/* left column end */}
  
            {/* right column start */}
            <div className="flex-[1] mt-[-260px] md:mt-12 lg:mt-0 py-3">
              {data && (
                <ProductInfo productInfo={data} />
               )}
            </div>
            {/* right column end */}
          </div>
          {/* <RelatedProducts relatedProducts={relatedProducts} /> */}
        </Wrapper>
      </div>
    );
  }


};

export const dynamic = "force-dynamic";

export default ProductDetails;
