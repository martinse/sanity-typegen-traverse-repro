import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nkkx39jv',
    dataset: 'production'
  },
  typegen: {
    path: './src/**/*.{ts,tsx,js,jsx}',
    schema: './src/lib/sanity/schema.json',
    generates: './src/lib/sanity/types.ts',
    overloadClientMethods: false
  }

})
