# AI Integrations

Utility modules for interacting with external AI services such as OpenAI GPT-4o and speech-to-text providers. These modules are kept separate so they can be shared between the backend and other services.

Example usage:

```ts
import { createOpenAI, summarize } from './ai-integrations'
const openai = createOpenAI(process.env.OPENAI_API_KEY!)
const summary = await summarize(openai, 'Your text here')
```
