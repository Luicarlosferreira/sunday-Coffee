import { AccordionContainer } from "./styles";
import { Fade } from "react-awesome-reveal";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionsAbout = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fade>
      <AccordionContainer>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>About</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We are a company specialized in the coffee industry. We make the
              best coffee, and we want to satisfy all our customers' desires for
              a good breakfast.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>Since</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We've been on the market for a long time. Our specialty is to
              immortalize ourselves in people's lives. Since 1970 acting with
              the best coffee.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Come work with us
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Come work with us and be happy. Serve and bring out the best
              flavor in our coffee.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Policy
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Legal Notice and Privacy Policy.</Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionContainer>
    </Fade>
  );
};
