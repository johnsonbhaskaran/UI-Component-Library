import Button from "../components/Button";

export default {
  title: "My/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Green = {
  args: {
    label: "Press me",
    backgroundColor: "seagreen",
    size: "sm",
  },
};
export const Blue = {
  args: {
    label: "Blew me",
    backgroundColor: "skyblue",
    size: "md",
  },
};
