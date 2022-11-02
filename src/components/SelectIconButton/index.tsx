import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import "./styles.css";
import * as MDIcons from "react-icons/md";
import IconImage from "./IconImage";
import { IconName } from "./IconImage/types";
import { SelectIconButtonProps } from "./types";
import useTheme from "../../hooks/useTheme";

const SelectIconButton = ({ onSelect }: SelectIconButtonProps) => {
  const { theme } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIconName, setSelectedIconName] = useState<IconName | null>(
    null
  );

  const onButtonClickHandler = () => setModalIsOpen(true);

  const onOkClick = () => {
    if (selectedIconName && onSelect) {
      const IconComponent = MDIcons[selectedIconName];
      onSelect(IconComponent);
    }
  };

  return (
    <>
      <Button onClick={onButtonClickHandler}>Выбор иконки</Button>
      <Modal
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        className="icon-modal"
        title="Выберите иконку"
        showButtons
        onOkClick={onOkClick}
      >
        <div className="icon-modal-content">
          {Object.keys(MDIcons).map((iconName) => (
            <div
              className="icon-wrapper"
              style={{
                border: `2px solid ${
                  selectedIconName === iconName ? theme.colors.primary : "white"
                }`,
              }}
              onClick={() => setSelectedIconName(iconName as IconName)}
            >
              <IconImage
                key={iconName}
                name={iconName as IconName}
                iconProps={{ size: 32 }}
              />
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SelectIconButton;
