import { Button } from "@mui/material";

export const CommonButton = ({ children, ...buttonCustomization }) => {
  return (
    <Button
     {...buttonCustomization}
    >
      {children}
    </Button>
  );
};