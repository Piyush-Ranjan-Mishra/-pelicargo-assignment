import { usePagination } from "@ajna/pagination";
import { Box, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import callApi from "../../api";
import AvatarComponent from "../../components/avatar";
import CardLayout from "../../components/cardLayout";
import LeftDrawer from "../../components/leftDrawer";
import SearchBox from "../../components/searchbox";
import Locale from "../../utils/locale";

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [query, setQuery] = useState<string | null>(null);
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: parseInt(process.env.REACT_APP_PAGES_COUNT!),
    initialState: { currentPage: 1 },
  });
  useEffect(() => {
    setData(callApi(currentPage, query));
  }, [currentPage, query]);
  return (
    <Box display="flex">
      <Box display={["none", "flex"]}>
        <LeftDrawer selected={Locale.menu.firstHalf[0]} />
      </Box>
      <Spacer className="center-container">
        <Box maxW={1280}>
          <SearchBox setQuery={setQuery} />
          <CardLayout
            {...data}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pagesCount={pagesCount}
            pages={pages}
          />
        </Box>
      </Spacer>
      <Box className="right-container" display={["none", "flex"]} pt={30}>
        <AvatarComponent />
      </Box>
    </Box>
  );
};

export default Home;
