import {defineField, defineType} from 'sanity'

export const testDocument = defineType({
  name: 'testDoc',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      type: 'image'
    })
  ]
})
