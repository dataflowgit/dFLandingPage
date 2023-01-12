import card1icon from './images/img1.png'
import card2icon from "./images/img2.png";
import card3icon from "./images/img3.png";
import { Button } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';


// import card1micon from "@mui/icons-material/Description";

const news = [
  {
    id: 1,
    cardIcon:DeleteIcon,
    img: card1icon,
    title: "How To Apply",
    descption: "Select a regulator for more information on their requirements.",
    button:<Button variant="outlined">CLICK HERE</Button>,
  },
  {
    id: 2,
    cardIcon:DeleteIcon,
    img: card2icon,
    title: "Submit Missing Document/Information",
    descption:
      "Learn how to upload missing information or documentation to complete your verification.",
      button:<Button variant="outlined">CLICK HERE</Button>,
  },

  {
    id: 3,
    cardIcon:DeleteIcon,
    img: card3icon,
    title: "Apply For Report Transfer",
    descption:
      "Learn how to transfer your existing DataFlow report from one regulator to another.",
      button:<Button variant="outlined">CLICK HERE</Button>,
  },

  {
    id: 4,
    cardIcon:DeleteIcon,
    img: card3icon,
    title: "Check Status / Download Report",
    descption:
      "Learn how to transfer your existing DataFlow report from one regulator to another.",
      button:<Button variant="outlined">CLICK HERE</Button>,
  },

  {
    id: 5,
    cardIcon:DeleteIcon,
    img: card3icon,
    title: "Apply For Appeal / Re-Verification",
    descption:
      "Learn how to transfer your existing DataFlow report from one regulator to another.",
      button:<Button variant="outlined">CLICK HERE</Button>,
  },

  {
    id: 6,
    cardIcon:DeleteIcon,
    img: card3icon,
    title: "Submit Additional Document For Verification",
    descption:
      "Learn how to transfer your existing DataFlow report from one regulator to another.",
      button:<Button variant="outlined">CLICK HERE</Button>,
  },
];

export default news;
