export const mapAccessibilityToValue = (level: string) => {
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

export const getPriceDescription = (price: number) => {
  if (price === 0) {
    return "Free 🎉";
  } else if (0.1 <= price && price <= 0.33) {
    return "A steal of a deal! 💰";
  } else if (0.34 <= price && price <= 0.66) {
    return "Reasonably priced treasure! 💎";
  } else if (0.67 <= price && price <= 1) {
    return "A luxurious indulgence! 💸";
  }
};

// Helper function to convert accessibility value to description
export const getAccessibilityDescription = (accessibility: number) => {
  if (0 < accessibility && accessibility < 0.33) {
    return "Piece of a cake 🍰";
  } else if (0.34 < accessibility && accessibility < 0.66) {
    return "A challenge worth savoring! 🧩";
  } else if (0.67 < accessibility && accessibility < 1) {
    return "A real brain teaser! 🤯";
  }
};
