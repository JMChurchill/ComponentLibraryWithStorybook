import React, { ReactNode } from 'react';
import styles from './ToolTip.module.css';

type ToolTipProps = {
  /** Contents */
  children: ReactNode;
  /** Tool tips message */
  text: string;
  /** Where should the tool tip be displayed relative to the contents */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /** Should the text wrap? */
  nowrap?: boolean;
};
const ToolTip = ({
  children,
  text,
  position = 'bottom',
  nowrap = false,
}: ToolTipProps) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span
        className={`${styles.tooltiptext} 
        ${nowrap && 'whitespace-nowrap'} 
        ${
          position === 'top'
            ? '-top-2 left-[50%] -translate-x-1/2 -translate-y-full'
            : position === 'bottom'
            ? '-bottom-2 left-[50%] -translate-x-1/2 translate-y-full'
            : position === 'left'
            ? '-left-2 top-[50%] -translate-x-full -translate-y-1/2'
            : '-right-2 top-[50%] -translate-y-1/2 translate-x-full'
        }
        `}
      >
        {text}
      </span>
    </div>
  );
};

export default ToolTip;
