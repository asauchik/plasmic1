// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadHorizontalExclamationIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function DeviceIpadHorizontalExclamationIcon(
  props: DeviceIpadHorizontalExclamationIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v6M9 17h6m4-1v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadHorizontalExclamationIcon;
/* prettier-ignore-end */
