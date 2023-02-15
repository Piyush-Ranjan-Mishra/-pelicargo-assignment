import { Box, Image } from "@chakra-ui/react";
import LanguageIcon from "@mui/icons-material/Language";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DashboardIcon from "@mui/icons-material/Dashboard";

export type CardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  onClick: (url: string | null) => void;
};

const icons = [<LanguageIcon />, <WebAssetIcon />, <DashboardIcon />];

const Card = ({ title, description, imageUrl, icon, onClick }: CardProps) => {
  return (
    <Box
      maxW="sm"
      className="card"
      onClick={() => onClick(imageUrl)}
      border="none"
    >
      <Image
        src={imageUrl}
        alt={title}
        width="sm"
        height={150}
        fallbackSrc={
          process.env.REACT_APP_IMAGE_PLACEHOLDER ||
          "https://via.placeholder.com/150"
        }
      />
      <Box className="card-image-icon">
        {icons[Math.floor(Math.random() * 3)]}
      </Box>
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
