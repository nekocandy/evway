import { Schema } from 'redis-om'

export const evModelsSchema = new Schema('evModels', {
  id: {
    type: 'string',
  },
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
