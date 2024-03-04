"use server";

const mapAccessibilityToValue = (level: string) => {
  switch (level) {
    case "1":
      return [0, 0.33];
    case "2":
      return [0.33, 0.66];
    case "3":
      return [0.66, 1];
    default:
      return [0, 1];
  }
};

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
    let [minPrice, maxPrice] = mapAccessibilityToValue(price);
    url += `&minprice=${minPrice}&maxprice=${maxPrice}`;
  }

  if (accessibility) {
    let [minAccessibility, maxAccessibility] =
      mapAccessibilityToValue(accessibility);
    url += `&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
