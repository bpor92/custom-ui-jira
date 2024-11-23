export const AI = {
    OPENAI: 'OPENAI',
    ANTHROPIC: 'ANTHROPIC',
  } as const
  
  export type AIType = (typeof AI)[keyof typeof AI]
  
  export type DevMapping = {
    frontendDevelopers: Record<string, string[]>
    backendDevelopers: Record<string, string[]>
  }
  
  export type AnalyzeContext = {
    title: string
    content: string
  }
  
  export type DeveloperTeams = {
    front: string
    back: string
  }
  