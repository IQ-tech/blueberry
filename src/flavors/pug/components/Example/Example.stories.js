import Example from "./index.pug";
import "core/components/Example.styl";

export default {
  title: "Componentes/pug",
};

const data = {
  content: "my custom example-component",
};

export const Primary = () => Example({ data });

