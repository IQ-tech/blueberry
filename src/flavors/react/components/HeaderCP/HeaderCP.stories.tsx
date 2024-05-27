import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import HeaderCP from '.'

import 'core/fonts.styl'
import 'core/components/HeaderCP.styl'
import 'core/main.styl'
import { NavigationLink } from './types'

export default {
  title: 'Components/Legacy/HeaderCP',
  component: HeaderCP,
  parameters: {
    docs: {
      description: {
        component: 'Legacy iq header',
      },
    },
  },
} as Meta

function handleActive(links: NavigationLink[]) {
  const teste = links.map((item) => {
    if (item.ariaLabel === 'score iq 360') item.isActive = true
    return item
  })

  return teste
}

const Template = (args) => (
  <HeaderCP {...args} mapLoggedOutMenuItems={handleActive} />
)

export const Default = Template.bind({})
