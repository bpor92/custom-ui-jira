import Resolver from '@forge/resolver';
import { saveDevelopers, deleteDevelopers, getDevelopers } from '../services/developers-service'

const resolver = new Resolver();

resolver.define('saveDevelopers', saveDevelopers)
resolver.define('deleteDevelopers', deleteDevelopers)
resolver.define('getDevelopers', getDevelopers)

export const handler = resolver.getDefinitions()
