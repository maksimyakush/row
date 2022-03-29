import React from "react";
import classnames from "classnames";
import styles from "./Row.module.scss";

const Row = ({
  mt,
  mb,
  ml,
  mr,
  m,
  p,
  pt,
  pb,
  pl,
  pr,
  as = "div",
  justifyContent,
  children,
  display,
}) => {
  const justifyContentClass = `justify_content__${justifyContent}`;
  const props = {
    className: classnames(
      styles[`mb_${mb}`],
      styles[`mt_${mt}`],
      styles[`mt_${ml}`],
      styles[`mt_${mr}`],
      styles[`mt_${m}`],
      styles[`pt_${pb}`],
      styles[`pt_${pt}`],
      styles[`pt_${pl}`],
      styles[`pt_${pr}`],
      styles[`pt_${p}`],
      styles[justifyContentClass],
    ),
  };
  const elements = React.createElement(as, { ...props }, children);
  return (<div {...props}> {elements}</div>);
};

export { Row };
