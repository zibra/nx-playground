import type { StorybookConfig } from '@storybook/react-vite'

import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

const config: StorybookConfig = {
  stories: [
    '../../../apps/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    })
  },
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
