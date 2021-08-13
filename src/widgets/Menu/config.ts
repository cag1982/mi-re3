export const links = [
  {
    label: "Vaults",
    icon: "VaultsIcon",
    href: "/",
    tag: {
      title: 'auto-compound',
      variant: 'primary'
    },
  },
  {
    label: "Trade",
    icon: "MetamaskIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/",
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Github",
    icon: "GithubIcon",
    href: "https://github.com/SandmanFarmio",
  },
  {
    label: "Docs",
    icon: "DocsIcon",
    href: "https://docs.sandman.farm",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://sandmanfarm.medium.com/",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/sandmanfarm",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Official",
        href: "https://t.me/SandManFarm",
      },
    //   {
    //     label: "Spanish",
    //     href: "https://t.me/DojoFarmSpanish",
    //   },
    //   {
    //     label: "Price Discussion",
    //     href: "https://t.me/DojoFarmPrice",
    //   },
      {
        label: "Announcements",
        href: "https://t.me/SandManFarmAnn",
      },
    ],
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
