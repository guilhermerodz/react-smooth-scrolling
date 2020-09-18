# React Smooth Scrolling

[Live preview here](https://react-smooth-scrolling.netlify.app/)

## Introduction

This is a React Provider Component which wraps your entire application body and add _smooth scrolling_ effect to it.

## Quick Start

```jsx
import { SmoothProvider } from 'react-smooth-scrolling'

function App() {
  return (
    <SmoothProvider skew={true}>
      <MyCustomPage>
    </SmoothProvider>
  )
}
```

### Props

`ease (optional)`: Stiffness. Default value: `0.1`. Min: `0`; Max: `1`.

`skew`: Enable distortion.
