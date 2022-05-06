
export default {
    name: 'aboutNikko',
    title: 'About Nikko',
    type: 'document',
    fields: [
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'aboutIntro',
        title: 'About Intro',
        type: 'blockContent',
      },
      {
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [
          {
            title: 'Service',
            type: 'object',
            fields: [
              {
                name: 'serviceImage',
                title: 'Image',
                type: 'image',
              },
              {
                name: 'serviceTitle',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'serviceTools',
                title: 'Service Tools',
                type: 'array',
                of: [{type: 'string'}]
              }
            ]
          }
            ]
      }
    ],
  }
  