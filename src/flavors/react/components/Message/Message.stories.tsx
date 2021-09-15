import React, { Fragment } from "react";
import { Meta } from "@storybook/react/types-6-0";
import Message from "./index";
import Button from "../Button";

//@ts-ignore
import "core/components/Message.styl";

export default {
  title: "Components/Message",
  component: Message,
  parameters: {
    docs: {
      description: {
        component: `
				As mensagens de alerta ajudam o usuário a saber o que está acontecendo na interface durante ou após uma interação, seja de erro, sucesso ou alerta. As mensagens possuem cores e símbolos de acordo com o tipo de mensagem. 
        `,
      },
    },
  },
} as Meta;

const Template = (args) => <Message {...args} />;

export const MessageDanger = Template.bind({});
MessageDanger.args = {
  type: "danger",
	text: "O código que você digitou é inválido. Tente novamente."
};

export const MessageInfo = Template.bind({});
MessageInfo.args = {
  type: "info",
	text: "Foi enviado um e-mail para alterar sua senha."
};

export const MessageSuccess = Template.bind({});
MessageSuccess.args = {
  type: "success",
	text: "Sua senha foi alterada com sucesso."
};	

export const MessageWarning = Template.bind({});
MessageWarning.args = {
  type: "warning",
	text: "Os dados inseridos podem estar errados."
};

export const MessageFixed = Template.bind({});
MessageFixed.args = {
  type: "warning",
	text: "Os dados inseridos podem estar errados.",
	position: "fixed",
};

export const MessageAppend = Template.bind({});
MessageAppend.args = {
  type: "danger",
	text: "Os dados inseridos podem estar errados.",
  children: (
		<Message.Child 
			title="Ajuda iq" 
			content={
				<Fragment>
					<p>Atualize seu número de telefone celular na Enel - SP para conseguir conectar essa conta no iq.</p>	
					<p><a href="">Atualizar cadastro na Enel - SP.</a></p>
					<p>Após atualizar, conecte novamente.</p>
				</Fragment>
			} 
			buttons={
				<Fragment>
					<Button type="secondary" justify="center">
						Fazer eu mesmo
					</Button>
					<Button justify="center">
						Recuperar senha com iq
					</Button>
				</Fragment>
			}
		/>
	),
};

export const MessageAppendFixed = Template.bind({});
MessageAppendFixed.args = {
  type: "danger",
	text: "Os dados inseridos podem estar errados.",
	position: "fixed",
  children: (
		<Message.Child 
			title="ajuda iq" 
			content={
				<p>Fácil, simples e seguro. Com o iq você consegue redifinir a sua senha da <b>provider name</b> usando o token via SMS.</p>	
			}
		/>
	),
};
