import { CallOutlined, ExpandMore, MailOutline } from "@mui/icons-material";
import { Box, Container, MenuItem, styled } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import Image from "components/BazaarImage";
import BazaarMenu from "components/BazaarMenu";
import { FlexBox } from "components/flex-box";
import { Span } from "components/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import { layoutConstant } from "utils/constants";
const TopbarWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "bgColor",
})(({ theme, bgColor }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  background: '#BE7374' || theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
}));

const Topbar = ({ bgColor }) => {
  const [currency, setCurrency] = useState(currencyList[0]);
  const [language, setLanguage] = useState(languageList[0]);

  const handleCurrencyClick = (curr) => () => setCurrency(curr);

  const handleLanguageClick = (lang) => () => setLanguage(lang);

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);
  return (
    <TopbarWrapper bgColor={bgColor}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox className="topbarLeft" alignItems="center">
          <div className="logo">
            <Link href="/" passHref>
              <Image
                display="block"
                height="28px"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+000 0000 0000</Span>
          </FlexBox>

          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">info@lampinbox.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <BazaarMenu
            handler={
              <TouchRipple className="handler marginRight">
                <Image
                    display="block"
                    height="15px"
                    width="20px"
                    src={language.imgUrl}
                />
                <Span className="menuTitle">{language.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleLanguageClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazaarMenu>

          <BazaarMenu
            direction="right"
            handler={
              <TouchRipple className="handler">
                <Image
                    display="block"
                    height="15px"
                    width="20px"
                    src={currency.imgUrl}
                />
                <Span className="menuTitle">{currency.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {currencyList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleCurrencyClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazaarMenu>
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

const languageList = [
  {
    title: "EN",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "BN",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "HN",
    imgUrl: "/assets/images/flags/in.png",
  },
];
const currencyList = [
  {
    title: "USD",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "EUR",
    imgUrl: "/assets/images/flags/uk.png",
  },
  {
    title: "BDT",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "INR",
    imgUrl: "/assets/images/flags/in.png",
  },
];
export default Topbar;
