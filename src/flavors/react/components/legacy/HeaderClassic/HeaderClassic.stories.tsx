import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import HeaderClassic from '../HeaderClassic'

import 'core/fonts.styl'
import 'core/components/legacy/HeaderClassic.styl'
import 'core/main.styl'
import { NavigationLink } from './types'

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

function handleActive(links: NavigationLink[]) {
  const teste = links.map((item) => {
    if (item.ariaLabel === 'score iq 360') item.isActive = true
    return item
  })

  return teste
}

const Template = (args) => (
  <HeaderClassic {...args} mapLoggedOutMenuItems={handleActive} />
)

export const Default = Template.bind({})
