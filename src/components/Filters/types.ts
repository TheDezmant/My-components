export interface FilterValues {
  brandIds?: number[];
  colorIds?: number[];
  price?: number;
}

export const filterNames: { [name: string]: keyof FilterValues } = {
  BRAND_IDS: "brandIds",
  COLOR_IDS: "colorIds",
  PRICE: "price",
};
