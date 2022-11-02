import React, { FC } from "react";
import { AvatarGroupProps } from "./types";
import "./style.css";
import "../Avatar/style.css";

const AvatarGroup: FC<AvatarGroupProps> = ({ children, total }) => {
  return (
    <div className={"m-wrapper-avatar-group"}>
      {children?.map(
        (child, i) =>
          i < total && (
            <div style={{ zIndex: 99 - i }} key={i}>
              {child}
            </div>
          )
      )}
      {children?.length && total < children?.length && (
        <div className={"m-total"}>+{children?.length - total}</div>
      )}
    </div>
  );
};

export default AvatarGroup;
