
export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'projIndustry',
      title: 'Business Scope / Industry',
      type: 'string',
    },
    {
      name: 'projDescription',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'projCover',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'taskDuties',
      title: 'Task/Duties',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'projOutput',
      title: 'Project Output',
      type: 'array',
      of: [
        {
          title: 'Project Output',
          type: 'object',
          fields: [
            {
              name: 'outputImage',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'outputTitle',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'outputDescription',
              title: 'Description',
              type: 'blockContent',
            }
          ]
        }
          ]
    }
  ],
}
