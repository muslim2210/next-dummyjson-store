import Tags from "../fragments/Tags";

interface ProductTagsAndDimensionsProps {
  tags: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

const ProductTagsAndDimensions = ({ tags, dimensions }: ProductTagsAndDimensionsProps) => {
  return (
    <div className="my-6 space-y-4">
      {/* Tags */}
      <Tags data={tags} />

      {/* Dimensions */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Dimensions (cm):</h3>
        <div className="text-sm text-gray-600">
          <p>Width : <span className="font-medium">{dimensions.width} cm</span></p>
          <p>Height : <span className="font-medium">{dimensions.height} cm</span></p>
          <p>Depth : <span className="font-medium">{dimensions.depth} cm</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductTagsAndDimensions;
