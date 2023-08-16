import type { Meta, StoryObj } from '@storybook/react'

import { SampleComponent } from '@core'

const meta: Meta<typeof SampleComponent> = {
  title: 'Core/SampleComponent',
  component: SampleComponent,
}

export default meta
type Story = StoryObj<typeof SampleComponent>

export const Primary: Story = {
  args: {
    foo: 'bar',
  },
}
