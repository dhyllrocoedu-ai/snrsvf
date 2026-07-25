import type { OpenNextConfig } from '@opennextjs/cloudflare'

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: 'cloudflare-edge',
      incrementalCache: 'cloudflare-kv',
      tagCache: 'cloudflare-kv',
    },
  },
}

export default config