import React, { ReactNode, ElementType } from 'react';
import classnames from 'classnames';
import styles from './Row.module.scss';

// https://stackoverflow.com/a/70307091
// Range Proposal here
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
type PropTypes = {
  mt?: Range<1, 41>;
  mb?: Range<1, 41>;
  mr?: Range<1, 41>;
  ml?: Range<1, 41>;
  m?: Range<1, 41>;
  pt?: Range<1, 41>;
  pb?: Range<1, 41>;
  pr?: Range<1, 41>;
  pl?: Range<1, 41>;
  p?: Range<1, 41>;
  as?: ElementType;
  gap?: Range<1, 41>;
  justifyContent?: 'space-between';
  alignItems?: 'center';
  children: ReactNode;
};

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
  as = 'div',
  gap,
  justifyContent,
  alignItems,
  children,
}: PropTypes) => {
  const justifyContentClass = `justify_content__${justifyContent}`;
  const alignItemsClass = `align_items__${alignItems}`;
  const props = {
    className: classnames(
      styles.row,
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
      styles[`gap_${gap}`],
      styles[justifyContentClass],
      styles[alignItemsClass],
    ),
  };
  const elements = React.createElement(as, { ...props }, children);
  return elements;
};

export { Row };
