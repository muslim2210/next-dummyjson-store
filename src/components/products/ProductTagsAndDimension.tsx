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
      <div className="">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

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
