import { storiesOf } from "@storybook/html";
import 'core/components/Example.styl'

storiesOf("Example", module).add("primary", () => {
  return require("./index.html");
});