import { storiesOf } from "@storybook/html";

storiesOf("Demo", module).add("button", () => {
  return require("./Card.html");
});
