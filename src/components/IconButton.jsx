import React from 'react'
import Button from './Button'

export default function IconButton({ Icon, small, ...props }) {
  return (
    <Button {...props} iconButton small={small}>
      <Icon size="20px" />
    </Button>
  )
}
