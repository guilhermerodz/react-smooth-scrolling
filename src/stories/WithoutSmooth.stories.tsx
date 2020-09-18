import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Without Smooth Scrolling'
} as Meta

const WithoutSmooth: React.FC = () => (
  <>
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
  </>
)

export { WithoutSmooth }
