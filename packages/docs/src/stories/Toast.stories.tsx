import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@gabriel-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
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
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
