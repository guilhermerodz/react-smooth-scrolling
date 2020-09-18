import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { SmoothProvider } from '..'

export default {
  title: 'Smooth Scrolling'
} as Meta

const WithSmooth: React.FC = () => (
  <SmoothProvider skew={true}>
    {[1, 2, 3, 4, 5].map(n => (
      <div
        key={n}
        style={{
          width: '300px',
          height: '400px',
          background: 'black',
          marginTop: '200px'
        }}
      />
    ))}
  </SmoothProvider>
)

export { WithSmooth }
