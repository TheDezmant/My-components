import React, { FC, useCallback, useEffect, useState } from "react";
import style from "./style.module.css";
import { MdAddPhotoAlternate, MdDelete } from "react-icons/md";
import { UpLoadedPicturesProps } from "./types";

const UpLoadedPictures: FC<UpLoadedPicturesProps> = ({ getData }) => {
  const [addedPictures, setAddedPictures] = useState<string[]>([]);
  const [selectedElement, setSelectedElement] = useState<null | number>(null);

  const fileReader = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file as File);
    reader.onload = function () {
      setAddedPictures((prev) => [...prev, reader.result as string]);
    };
    reader.onerror = function () {
      return;
    };
  };
  const filterPicture = useCallback(
    (index: number) => {
      setAddedPictures(addedPictures.filter((picture, i) => index !== i));
    },
    [addedPictures]
  );
  useEffect(() => {
    getData(addedPictures);
  }, [addedPictures]);

  return (
    <div className={style.wrapper}>
      {addedPictures.map((picture, index) => (
        <div
          onMouseEnter={() => setSelectedElement(index)}
          onMouseLeave={() => setSelectedElement(null)}
          className={style.wrapperPicture}
          key={`picture${Math.random()}`}
        >
          <img
            className={style.picture}
            src={picture}
            alt={"Изображение товара"}
          />
          {selectedElement === index && (
            <div
              onClick={() => filterPicture(index)}
              className={style.selectedItem}
            >
              <MdDelete />
            </div>
          )}
        </div>
      ))}

      <div className={style.wrapperPicture}>
        <input
          onChange={fileReader}
          className={style.input}
          id={"uploaded"}
          type={"file"}
          accept="image/*,image/jpeg"
        />
        <label htmlFor={"uploaded"}>
          <div className={style.wrapperAddPicture}>
            <MdAddPhotoAlternate />
          </div>
        </label>
      </div>
    </div>
  );
};

export default UpLoadedPictures;
