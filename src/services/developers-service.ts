import { storage } from '@forge/api';
import { DeveloperTeams } from '../types';
import { Request } from '@forge/resolver';

export const saveDevelopers = async (request: Request): Promise<void> => {
  const data = request.payload as DeveloperTeams;
  return await storage.set('developers', data);
}

export const deleteDevelopers = async (): Promise<void> => {
  return await storage.delete('developers');
}

export const getDevelopers = async (): Promise<DeveloperTeams> => {
  return await storage.get('developers');
}
