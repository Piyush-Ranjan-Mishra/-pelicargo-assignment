import {
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TuneIcon from "@mui/icons-material/Tune";
import Locale from "../../utils/locale";
import InfoIcon from "@mui/icons-material/Info";
import debounce from "lodash.debounce";
import AvatarComponent from "../avatar";

type SearchBoxProps = {
  setQuery: (query: string) => void;
};

const SearchBox = ({ setQuery }: SearchBoxProps) => {
  const handleChange = debounce((e: any) => {
    const { value } = e.target;
    setQuery(value);
  }, 1000);
  const bg = useColorModeValue("#d9d9d9", "gray.700");
  const iconBG = useColorModeValue("white", "gray.900");

  return (
    <Box display={"flex"} justifyContent="center" data-testid='search-box'>
      <InputGroup
        className="searchbox-wrapper"
        bg={bg}
        width={"100%"}
        m={[2, 0]}
      >
        <InputLeftAddon
          bg={iconBG}
          borderRadius={4}
          px={0}
          children={
            <Box className="searchbox-left-icon" bg={iconBG}>
              <TuneIcon />
              {Locale.searchBox.filter}
            </Box>
          }
          display={["none", "flex"]}
        />
        <Input
          outlineColor={bg}
          outline="none"
          border="none"
          boxShadow={"none"}
          placeholder={Locale.searchBox.placeholder}
          onChange={handleChange}
          bg={bg}
          flex={1}
        />
        <InputRightAddon
          bg={iconBG}
          borderRadius={4}
          px={0}
          display={["none", "flex"]}
          children={
            <Box className="searchbox-right-icon" bg={iconBG}>
              <InfoIcon />
            </Box>
          }
        />
      </InputGroup>
      <Box display={["flex", "none"]}>
        <AvatarComponent />
      </Box>
    </Box>
  );
};

export default SearchBox;
