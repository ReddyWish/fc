import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../hooks/useQualities";

const Quality = ({ id }) => {
  const { getQuality, isLoading } = useQualities();
  const quality = getQuality(id);
  console.log(quality);
  if (!isLoading) {
    return <span className={"badge m-1 bg-" + quality.color}>{ quality.name }</span>;
  } else return "loading...";
};

Quality.propTypes = {
  id: PropTypes.string
};

export default Quality;
