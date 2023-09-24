import { Schema } from 'redis-om'

export const evModelsSchema = new Schema('evModels', {
  name: {
    type: 'text',
  },
  addedBy: {
    type: 'string',
  },
  addedAt: {
    type: 'number',
  },
}, {
  dataStructure: 'JSON',
})
