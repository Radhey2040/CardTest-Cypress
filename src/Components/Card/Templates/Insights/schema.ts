import { StaticImageData } from "next/image";
export interface Card {
  heading?: string;
  date?: string;
  link?: string;
  excerpt?: string;
  author?: string;
  // image?: StaticImageData;
}

export const CardDefaults: Card = {
  heading: "Nova Scotia releases preliminary 2023 assessment values",
  date: "NOVEMBER 4, 2022",
  link: "Click Here",
  excerpt:
    "Nova Scotia has released its preliminary assessment values for2023 and now is the time to pre-negotiate a corrected assessment",
  author: "Rob Newman and Mathew Milet",
  // image: MyImage,
};
