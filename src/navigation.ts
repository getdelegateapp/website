import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Features', href: getPermalink('/#features') },
    { text: 'Support', href: getPermalink('/support') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'App',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Questions', href: getPermalink('/#questions') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Help',
      links: [
        { text: 'Support', href: getPermalink('/support') },
        {
          text: 'Report a problem',
          href: 'https://github.com/getdelegateapp/support/issues/new?template=bug.yml',
        },
        {
          text: 'Request a feature',
          href: 'https://github.com/getdelegateapp/support/issues/new?template=feature.yml',
        },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Rocket Tutoring LLC. Delegate is an independent app and isn't affiliated with or endorsed by Manager.io.`,
};
