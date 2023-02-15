import {
  IconButton,
  Avatar,
  useColorMode,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
} from "@chakra-ui/react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { useState } from "react";
import Locale from "../../utils/locale";
import LeftDrawer from "../leftDrawer";
const AvatarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      justify={"start"}
      ml={1}
      mr={[2, 10]}
      direction={["row", "column"]}
      data-testid="avatar"
    >
      <Avatar
        onClick={() => setIsOpen(true)}
        mr={1}
        name="Piyush Mishra"
        src="https://bit.ly/mishhy"
      />
      <IconButton
        onClick={toggleColorMode}
        mr={1}
        minW={10}
        aria-label="Dark mode"
      >
        {colorMode === "light" ? (
          <LightbulbOutlinedIcon aria-label="Dark mode" />
        ) : (
          <LightbulbIcon aria-label="Light mode" />
        )}
      </IconButton>
      <Box display={["block", "none"]}>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay />
          <DrawerContent mx={0} py={0} px={0}>
            <DrawerBody mx={0} py={0} px={0}>
              <LeftDrawer selected={Locale.menu.firstHalf[0]} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Stack>
  );
};
export default AvatarComponent;
