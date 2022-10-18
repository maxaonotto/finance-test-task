import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";

const AddToPortfolioButton = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to follow
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <PlusCircle />
    </OverlayTrigger>
  );
};

export default AddToPortfolioButton;
