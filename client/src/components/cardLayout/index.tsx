import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import {
  Pagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { useState } from "react";
import Card, { CardProps } from "../card";
import ModalComponent from "../modal";

export type CardLayoutProps = {
  photos: CardProps[];
  currentPage: number;
  per_page: number;
  total_result: number;
  pagesCount: number;
  pages: number[];
  onPageChange: (page: number) => void;
};

const CardLayout = ({
  photos,
  currentPage,
  pagesCount,
  pages,
  onPageChange,
}: CardLayoutProps) => {
  const [imageClick, setImageClick] = useState<string | null>(null);
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
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      >
        <PaginationContainer justifyContent={"center"} >
          <PaginationPrevious>Previous</PaginationPrevious>
          <PaginationPageGroup>
            {pages.map((page: number) => (
              <PaginationPage
                _current={{
                  w: 7,
                  bg: "gray.300",
                  fontSize: "sm",
                  _hover: {
                    bg: "gray.800",
                  },
                }}
                key={`pagination_page_${page}`}
                page={page}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext>Next</PaginationNext>
        </PaginationContainer>
      </Pagination>
    </Box>
  );
};
export default CardLayout;
