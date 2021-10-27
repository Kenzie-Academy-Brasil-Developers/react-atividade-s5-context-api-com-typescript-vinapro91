import "./styles.css";
interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  price?: number;
}
export const Card = ({ title, description, price, image }: CardProps) => {
  return (
    <div className="Card">
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <img alt={title} src={image} />
    </div>
  );
};
