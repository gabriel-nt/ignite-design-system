import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@gabriel-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing the Box element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
