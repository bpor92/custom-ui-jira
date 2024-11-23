import Resolver from '@forge/resolver';
import { storage } from '@forge/api';
import { DeveloperTeams } from '../types';

const resolver = new Resolver();

resolver.define('getText', () => {
    return 'Hello world!';
})

resolver.define('saveDevelopers', async (request) => {
  const data = request.payload as DeveloperTeams;
  await storage.set('developers', data);
})

resolver.define('deleteDevelopers', () => {
  storage.delete('developers');
})

resolver.define('getDevelopers', async () => {
  return await storage.get('developers');
})

export const handler = resolver.getDefinitions();
