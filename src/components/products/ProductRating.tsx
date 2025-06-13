import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingProps {
  rating: number; 
}

const ProductRating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating); // Bintang penuh
  const hasHalfStar = rating - fullStars >= 0.5; // Setengah bintang
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Bintang kosong

  return (
    <div className="flex items-center gap-1 mt-2">
      {[...Array(fullStars)].map((_, idx) => (
        <FaStar key={`full-${idx}`} className="text-yellow-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {[...Array(emptyStars)].map((_, idx) => (
        <FaRegStar key={`empty-${idx}`} className="text-yellow-400" />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
};

export default ProductRating;
