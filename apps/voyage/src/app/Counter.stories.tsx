import type { Meta, StoryObj } from '@storybook/react'
import { Counter } from './Counter'

const meta: Meta<typeof Counter> = {
  title: 'Voyage/Counter',
  component: Counter,
}

export default meta
type Story = StoryObj<typeof Counter>

export const Primary: Story = {}
