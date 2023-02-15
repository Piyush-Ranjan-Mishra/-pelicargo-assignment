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
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    setData(callApi(page, query));
  }, [page, query]);
  return (
    <Box display="flex">
      <Box display={["none", "flex"]}>
        <LeftDrawer selected={Locale.menu.firstHalf[0]} />
      </Box>
      <Spacer className="center">
        <Box maxW={1280}>
          <SearchBox setQuery={setQuery} />
          <CardLayout {...data} onPageChange={setPage} />
        </Box>
      </Spacer>
      <Box display={["none", "flex"]} pt={30}>
        <AvatarComponent />
      </Box>
    </Box>
  );
};

export default Home;
