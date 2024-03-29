import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Accordion from './index'

//@ts-ignore
import 'core/components/Accordion.styl'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'Accordion component',
      },
    },
  },
} as Meta

function openCallback(item) {
  alert(item.name)
}

function closeCallback(item) {
  alert(item.name)
}

const Template = (args) => (
  <Accordion {...args}>
    <Accordion.Item titleChild="title one">test</Accordion.Item>
    <Accordion.Item titleChild="title two">test 2</Accordion.Item>
    <Accordion.Item titleChild="title three">test 3</Accordion.Item>
    <Accordion.Item titleChild="title four">test 4</Accordion.Item>
    <Accordion.Item
      titleChild="title five - With open callback"
      openCallback={() => openCallback({ name: 'ola' })}
    >
      With open callback
    </Accordion.Item>
    <Accordion.Item
      titleChild="title six - with close callback"
      closeCallback={() => closeCallback({ name: 'tchau' })}
    >
      With close callback
    </Accordion.Item>
  </Accordion>
)

export const AccordionBasic = Template.bind({})
AccordionBasic.args = {
  onlyOneItemOpen: false,
  colorScheme: '',
}

export const AccordionWithScheme = Template.bind({})
AccordionWithScheme.args = {
  colorScheme: 'purple-head',
}
