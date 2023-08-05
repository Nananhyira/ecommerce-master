export const Button = {
  baseStyle: {
    borderRadius: "10px",
    fontWeight: 700,
  },
  sizes: {
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "brand.500",
      border: "3px solid",
      borderColor: "brand.600",
      _hover: {
        bg: "brand.600",
      },
      _focus: {
        bg: "brand.400",
      },
    },
    outline: {
      border: "3px solid",
      borderColor: "brand.600",
      color: "brand.500",
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};
