import { Box, Image } from "@chakra-ui/react";
export type CardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  onClick: (url: string | null) => void;
};

const Card = ({ title, description, imageUrl, icon, onClick }: CardProps) => {
  return (
    <Box maxW="sm" className="card" onClick={() => onClick(imageUrl)}>
      <Image src={imageUrl} alt={title} width="sm" height={280} />
      <Box
        className="card-title"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        {title}
      </Box>
      <Box className="card-description">{description}</Box>
    </Box>
  );
};

export default Card;
