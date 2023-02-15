import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import Card, { CardProps } from "../card";
import ModalComponent from "../modal";

export type CardLayoutProps = {
  photos: CardProps[];
  page: number;
  per_page: number;
  total_result: number;
  onPageChange: (page: number) => void;
};

const CardLayout = ({ photos, page, onPageChange }: CardLayoutProps) => {
  const [imageClick, setImageClick] = useState<string | null>(null);
  const handleChange = (_: any, value: number) => {
    onPageChange(value);
  };
  return (
    <Box className="card-layout-wrapper">
      <Grid templateColumns={["repeat(1, 2fr)", "repeat(3, 1fr)"]} gap={6}>
        {photos?.map((el: CardProps) => (
          <GridItem key={el.id}>
            <Card {...el} onClick={setImageClick} />
          </GridItem>
        ))}
      </Grid>
      <ModalComponent isOpen={!!imageClick} onClose={() => setImageClick(null)}>
        {imageClick && <Image src={imageClick} alt={"modal"} />}
      </ModalComponent>

      {/* <Pagination
        count={10}
        page={page | 1}
       
        onChange={handleChange}
      /> */}
    </Box>
  );
};
export default CardLayout;
