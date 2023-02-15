import { Box, useColorModeValue } from "@chakra-ui/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightModeIcon from "@mui/icons-material/LightMode";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import RedoIcon from "@mui/icons-material/Redo";
type MenuItemProps = {
  menuItem: string;
  selectedMenu: string;
  onMenuSelect: (string: string) => void;
};

const Icons: any = {
  Explore: <RedoIcon />,
  Topics: <DashboardIcon />,
  Digest: <LightModeIcon />,
  Bookmarks: <TurnedInIcon />,
};

const MenuItem = ({ menuItem, selectedMenu, onMenuSelect }: MenuItemProps) => {
  const bg = useColorModeValue("#dbdbdb", "gray.700");
  return (
    <Box
      className={menuItem === selectedMenu ? "menu-items-bold" : "menu-items"}
      onClick={() => onMenuSelect(menuItem)}
      bg={menuItem === selectedMenu ? bg : "transparent"}
    >
      {Icons[menuItem]}
      {menuItem}
    </Box>
  );
};

export default MenuItem;
