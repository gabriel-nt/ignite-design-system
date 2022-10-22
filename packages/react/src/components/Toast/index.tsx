import { ComponentProps } from 'react'

import { Text } from '../Text'
import { Heading } from '../Heading'

import { ToastContainer, CloseIcon } from './styles'

const Toast = () => {
  return (
    <ToastContainer>
      <CloseIcon weight="bold" />
      <Heading size="sm">Agendamento realizado</Heading>
      <Text
        size="sm"
        css={{
          color: '$gray200',
        }}
      >
        Quarta-feira, 23 de Outubro às 16h
      </Text>
    </ToastContainer>
  )
}

export { Toast }

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

Toast.displayName = 'Toast'
