import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter / X',
      type: 'url',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),

    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
    }),

    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
    }),
  ],
})