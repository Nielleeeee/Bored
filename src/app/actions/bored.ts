"use server";

import {
  mapAccessibilityToValue,
  getPriceDescription,
  getAccessibilityDescription,
} from "@/lib/functions";

export const getBored = async () => {
  const response = await fetch("https://www.boredapi.com/api/activity/");

  const data = await response.json();

  return data;
};

export const getBoredSpecifc = async ({
  type,
  participants,
  price,
  accessibility,
}: BoredTypesProps) => {
  let url = "https://www.boredapi.com/api/activity?";

  if (type) url += `&type=${type}`;

  if (participants) url += `&participants=${participants}`;

  if (price) {
    if (price === "0") {
      url += `&price=0`;
    } else {
      const minPrice = 0.1;
      const maxPrice = 1;
      url += `&minprice=${minPrice}&maxprice=${maxPrice}`;
    }
  }

  if (accessibility) {
    let [minAccessibility, maxAccessibility] =
      mapAccessibilityToValue(accessibility);
    url += `&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  data.price = getPriceDescription(data.price);
  data.accessibility = getAccessibilityDescription(data.accessibility);

  return data;
};
