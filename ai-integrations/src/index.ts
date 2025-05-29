import { Configuration, OpenAIApi } from 'openai'

export function createOpenAI(apiKey: string) {
  const config = new Configuration({ apiKey })
  return new OpenAIApi(config)
}

export async function summarize(openai: OpenAIApi, text: string) {
  const res = await openai.createChatCompletion({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: `Summarize: ${text}` }],
  })
  return res.data.choices[0]?.message?.content || ''
}
