import Example from "./index.pug";
import "core/components/Grid.styl";

export default {
  title: "Componentes/layout/grid",
};

const data = {
  content: "my custom example-component",
};

export const Primary = () => Example({ data });

