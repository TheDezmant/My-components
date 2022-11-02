import React, { useState } from "react";
import SelectIconButton from "../../components/SelectIconButton";

const SelectIconTab = () => {
  const [selectedIcon, setSelectedIcon] = useState<any | null>(null);
  return (
    <div>
      <SelectIconButton onSelect={setSelectedIcon} />
      <br />
      <br />
      <div>{selectedIcon}</div>
    </div>
  );
};

export default SelectIconTab;
