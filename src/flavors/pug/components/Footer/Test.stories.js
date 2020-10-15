/* import Footer from './index.html'
import '../../../../core/components/Footer.styl'

export default {
	title: 'Componentes/Footer'
}

export const Pug = () => {
    const data = [
        {text: 'Home', link: '/'},
        {text: 'Blog', link: '/blog'},
        {text: 'Nome da Página', class: 'color-black'},
    ]

    return Footer({data})
} */

import { storiesOf } from "@storybook/html";
import 'core/components/Footer.styl'

storiesOf("Demos", module).add("cenoura", () => {
  return require("./Test.html");
});
