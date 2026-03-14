let menu = [
    {
      title: 'LPL',
      open: false,
      items: [{ label: 'Introduction', route: '/docs/lightning-platform-layers/introduction' }],
    },
    {
      title: 'Apex',
      open: false,
      items: [{ label: 'Schema', route: '/docs/apex/schema' }],
    },
    {
      title: 'LWC',
      open: false,
      items: [
        {
          label: 'Composition',
          route: '/docs/lightning-web-component/composition',
        },
        {
          label: 'Sharing Javascript',
          route: '/docs/lightning-web-component/sharing-javascript-code',
        },
      ],
    },
  ];

export {menu as default};