import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import HeaderClassic from '../HeaderClassic'

import 'core/fonts.styl'
import 'core/components/legacy/HeaderClassic.styl'
import 'core/main.styl'

export default {
  title: 'Components/Legacy/HeaderClassic',
  component: HeaderClassic,
  parameters: {
    docs: {
      description: {
        component: 'Legacy iq header',
      },
    },
  },
} as Meta

function loggedOutTest() {
  alert('OUT')
}

function loggedInTest() {
  alert('IN')
}

const Template = (args) => (
  <HeaderClassic
    {...args}
    customLogoLinks={{
      loggedOut: '/teste',
      loggedIn: '/teste2',
      loggedOutFunction: loggedOutTest,
      loggedInFunction: loggedInTest,
    }}
  />
)

export const Default = Template.bind({})
