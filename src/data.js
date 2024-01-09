import AnchorCom from "./Pages/Anchor";
import BtnFloat from "./Pages/BtnFloat";
import Btn from "./Pages/Button";
import Diviner from "./Pages/Diviner";
import FlexBox from "./Pages/FlexBox";
import FormCom from "./Pages/Form";
import Grid from "./Pages/Grid";
import Home from "./Pages/Home";
import LayoutCom from "./Pages/Layout";
import MenuCom from "./Pages/Menu";
import PaginationCom from "./Pages/Pagination";
import Qrcode from "./Pages/QRcode";

const data = [
  {
    name: "Home",
    path: "",
    elem: <Home />,
  },
  {
    name: "Button",
    path: "/button",
    elem: <Btn />,
  },
  {
    name: "Button Float",
    path: "/buttonfloat",
    elem: <BtnFloat />,
  },
  {
    name: "Divider",
    path: "/divider",
    elem: <Diviner />,
  },
  {
    name: "Flex",
    path: "/flex",
    elem: <FlexBox />,
  },
  {
    name: "Grid",
    path: "/grid",
    elem: <Grid />,
  },
  {
    name: "Layout",
    path: "/layout",
    elem: <LayoutCom />,
  },
  {
    name: "Anchor",
    path: "/anchor",
    elem: <AnchorCom />,
  },
  {
    name: "Menu",
    path: "/menu",
    elem: <MenuCom />,
  },
  {
    name: "Pagination",
    path: "/pagination",
    elem: <PaginationCom />,
  },
  {
    name: "Form",
    path: "/form",
    elem: <FormCom />,
  },
  {
    name: "QRcode",
    path: "/qrcode",
    elem: <Qrcode />,
  },
];

export default data;
