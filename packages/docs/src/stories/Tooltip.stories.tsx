import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@gabriel-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: '21 de Outubro - Indisponível',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
