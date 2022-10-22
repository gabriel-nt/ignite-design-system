import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  padding: '$3 $4',
  background: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',
  fontSize: '$sm',
  width: 'auto',
  lineHeight: '$short',
  fontFamily: '$default',
  fontWeight: '$regular',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  '&::after': {
    content: `' '`,
    bottom: '-35%',
    marginLeft: '-5px',
    left: '50%',
    borderWidth: '8px',
    borderStyle: 'solid',
    position: 'absolute',
    transform: 'rotate(-180deg)',
    borderColor: 'transparent transparent $gray900 transparent',
  },
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Tooltip'
