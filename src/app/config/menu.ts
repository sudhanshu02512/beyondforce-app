let menu = [
    {
      title: 'Lightning Platform Layers',
      open: false,
      route: '/docs/lightning-platform-layers',
      description:'Explore the Lightning Platform Layers (LPL) and understand how they interact to build powerful applications.',
      items: [{ label: 'Introduction', route: '/docs/lightning-platform-layers/introduction' }],
    },
    {
      title: 'Apex',
      open: false,
      route: '/docs/apex',
      description:'Learn Apex fundamentals, triggers, SOQL, and best practices.',
      items: [{ label: 'Schema', route: '/docs/apex/schema' }],
    },
    {
      title: 'Lightning Web Components',
      open: false,
      route: '/docs/lightning-web-component',
      description:'Master Lightning Web Components (LWC) with guides on composition and sharing JavaScript code.',
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