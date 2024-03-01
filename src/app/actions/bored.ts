"use server";

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
}: BoredTypes) => {
  let url = "https://www.boredapi.com/api/activity?";

  if (type) url += `&type=${type}`;
  if (participants) url += `&participants=${participants}`;
  if (price) url += `&price=${price}`;
  if (accessibility) url += `&accessibility=${accessibility}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
