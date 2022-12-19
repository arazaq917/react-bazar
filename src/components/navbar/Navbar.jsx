import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import {Box, Button, Container, MenuItem, styled} from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarCard from "components/BazaarCard";
import CategoryMenu from "components/categories/CategoryMenu";
import { FlexBox } from "components/flex-box";
import Category from "components/icons/Category";
import NavLink from "components/nav-link/NavLink";
import { Paragraph } from "components/Typography";
import navbarNavigations from "data/navbarNavigations";
import useSettings from "hooks/useSettings";
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2";
import React from "react"; // NavList props interface

// const common css style
const navLinkStyle = {
  cursor: "pointer",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: 0,
  },
}; // style components

const StyledNavLink = styled(NavLink)(() => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  textTransform: 'capitalize',
  color: '#fff',
  borderRadius: 0,
  background: '#bab2b4',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingTop: '8px',
  paddingBottom: '8px',
  "&:hover": {
    color: "#fff",
  },
  ...navLinkStyle }));
const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": {
      display: "block",
    },
  },
}));
const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: "100%",
  paddingLeft: 8,
  display: "none",
  position: "absolute",
  [theme.breakpoints.down(1640)]: {
    right: "100%",
    left: "auto",
    paddingRight: 8,
  },
}));
const NavBarWrapper = styled(BazaarCard)(({ theme, border }) => ({
  height: "60px",
  display: "block",
  borderRadius: "0px",
  position: "relative",
  ...(border && {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  }),
  [theme.breakpoints.down(1150)]: {
    display: "none",
  },
}));
const InnerContainer = styled(Container)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const CategoryMenuButton = styled(BazaarButton)(({ theme }) => ({
  width: "278px",
  height: "40px",
  backgroundColor: theme.palette.grey[100],
}));
const ChildNavsWrapper = styled(Box)(() => ({
  zIndex: 5,
  left: "50%",
  top: "100%",
  display: "none",
  position: "absolute",
  transform: "translate(-50%, 0%)",
}));// ==========================================================

// ==========================================================
const Navbar = ({ navListOpen, hideCategories, elevation, border }) => {
  const { settings } = useSettings();

  const renderNestedNav = (list = [], isRoot = false) => {
    return (
        // <Box>
        //   <StyledButton>Shop Now</StyledButton>
        // </Box>
        <StyledNavLink href={'https://arazaq917.github.io/lamp-editor/'} >
          Create Your Own Lamp
        </StyledNavLink>
    )
  };

  return (
    <NavBarWrapper hoverEffect={false} elevation={elevation} border={border}>
      {!hideCategories ? (
        <InnerContainer>
          {/* Category megamenu */}
          <CategoryMenu open={navListOpen}>
            <CategoryMenuButton variant="text">
              <Category fontSize="small" />
              <Paragraph
                fontWeight="600"
                textAlign="left"
                flex="1 1 0"
                ml={1.25}
                color="grey.600"
              >
                Categories
              </Paragraph>

              {settings.direction === "ltr" ? (
                <ChevronRight className="dropdown-icon" fontSize="small" />
              ) : (
                <ChevronLeft className="dropdown-icon" fontSize="small" />
              )}
            </CategoryMenuButton>
          </CategoryMenu>

          {/* Horizontal menu */}
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      ) : (
        <InnerContainer
          sx={{
            justifyContent: "center",
          }}
        >
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
}; //  set default props data

Navbar.defaultProps = {
  elevation: 2,
  navListOpen: false,
  hideCategories: false,
};
export default Navbar;
