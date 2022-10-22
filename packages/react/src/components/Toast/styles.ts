import { X } from 'phosphor-react'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

export const slideOut = keyframes({
  from: {
    transform: 'translateX(0%)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastContainer = styled('div', {
  display: 'flex',
  gap: '$1',
  position: 'absolute',
  bottom: 20,
  right: 20,
  animation: `${slideIn} 200ms ease-out`,
  flexDirection: 'column',
  padding: '$3 $6',
  minWidth: 300,
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
})

export const CloseIcon = styled(X, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
  color: '$gray200',
})
