import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import Locale from "../../utils/locale";
import MenuItem from "../card/menuItem";
import TwitterIcon from "@mui/icons-material/Twitter";
type LeftDrawerProps = {
  selected: string;
};

const LeftDrawer = ({ selected }: LeftDrawerProps) => {
  const [selectedMenu, setSelectedMenu] = useState(
    selected || Locale.menu.firstHalf[0]
  );

  const onMenuSelect = (menuItem: string) => {
    setSelectedMenu(menuItem);
  };

  const bg = useColorModeValue("#f0eeee", "default");

  return (
    <Flex className="left-container" gap="2" bg={bg}>
      <Box>
        {Locale.menu.firstHalf.map((el: string) => (
          <MenuItem
            key={el}
            selectedMenu={selectedMenu}
            menuItem={el}
            onMenuSelect={onMenuSelect}
          />
        ))}
      </Box>
      <Box
        display={"flex"}
        flex={1}
        flexDirection="column"
        justifyContent={"flex-end"}
      >
        <Box>
          {Locale.menu.secondHalf.map((el: string) => (
            <MenuItem
              key={el}
              selectedMenu={selectedMenu}
              menuItem={el}
              onMenuSelect={onMenuSelect}
            />
          ))}
        </Box>
        <Box
          className="title"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          alignContent="center"
        >
          {Locale.title}
          <Box as="span" color={"grey"}>
            <TwitterIcon />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default LeftDrawer;
