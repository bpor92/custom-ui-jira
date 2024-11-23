import { DeveloperTeams } from "../types"
import { ref, Ref } from 'vue'
import { FileUtil } from '../utils/file-util'
import { ValidationUtil } from '../utils/validation-util'
import { invoke } from '@forge/bridge';

type Developers = {
  setDevelopers: (event: Event) => Promise<void>
  developers: Ref<DeveloperTeams | null>
  getDevelopers: () => Promise<void>
  deleteDeveloper: () => Promise<void>
}

export const useDevelopers = (): Developers => {
  const developers = ref<DeveloperTeams | null>(null)

  const setDevelopers = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (!file) return
    try {
      const content = await FileUtil.readFile(file)
      const parsedContent = JSON.parse(content)
      if (ValidationUtil.isValidMapping(parsedContent)) {
        await invoke('saveDevelopers', parsedContent)
        getDevelopers()
      } 
    } catch (error) {
      console.error('File processing error:', error)
    }
  }

  const getDevelopers = async () => {
    const result = await invoke<DeveloperTeams>('getDevelopers')
    developers.value = result
  }

  const deleteDeveloper = async () => {
    await invoke('deleteDevelopers')
    getDevelopers()
  }

  return {
    setDevelopers,
    developers,
    getDevelopers,
    deleteDeveloper,
  }
}
