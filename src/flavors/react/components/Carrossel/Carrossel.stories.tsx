import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Carrossel from "./index";

//@ts-ignore
import "core/components/Carrossel.styl";

export default {
  title: "Components/Carrossel",
  component: Carrossel,
  parameters: {
    docs: {
      description: {
        component: `
          Use types to make the best use of the carousel 
          swipe, mixed for mobile and desktop for obviously computers.

          Important to remember that you must style your children on your own
      `,
      },
    },
  },
} as Meta;

const Template = (args) => <Carrossel {...args} />;

export const CarrosselSwipe = Template.bind({});
CarrosselSwipe.args = {
  type: 'swipe',
  children: [
    'Swipe carrossel 1',
    'Swipe carrossel 2'
  ]
};

export const CarrosselMixed = Template.bind({});
CarrosselMixed.args = {
  type: 'mixed',
  children: (
    [
      { label: 'Setembro', value: 'R$494,64', year: '2020' },
      { label: 'Outubro', value: 'R$300,64', year: '2020' }
    ].map(({ label, value, year }) => {
      return (
        <div key={label}>
          <div>
            <p>{label}</p>
            <p>{year}</p>
          </div>

          <div>
            <p>
              {value}
            </p>
          </div>
        </div>
      )
    })
  )

};

export const CarrosselDesktop = Template.bind({});
CarrosselDesktop.args = {
  type: 'desktop',
  title: 'Promoções e descontos',
  children: [
    'Swipe carrossel 1',
    'Swipe carrossel 2',
    'Swipe carrossel 3'
  ]
 
};