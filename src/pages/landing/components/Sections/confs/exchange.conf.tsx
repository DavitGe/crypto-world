export const exchangeConf = {
  title: "Exchange",
  heading: "Lightning-fast crypto trading",
  bgColor: "rgba(236, 245, 254, 0.5)",
  color: "#0c6cf2",
  iconBgColor: "rgb(236, 245, 254)",
  button: {
    text: "Trade Now",
    color: "#fff",
  },
  shapeSrc: "/public/assets/landing/shapes/shape-exchange.png",
  icon: (
    <svg width="137" height="32" fill="none">
      <mask
        id="a"
        height="30"
        maskUnits="userSpaceOnUse"
        width="30"
        x="1"
        y="1"
      >
        <rect
          fill="#c4c4c4"
          height="28"
          rx="3"
          stroke="#f5a250"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="28"
          x="2"
          y="2"
        ></rect>
      </mask>
      <g mask="url(#a)" stroke="#0c6cf2" stroke-width="2">
        <g stroke-linecap="round">
          <rect
            fill="#fff"
            height="28"
            rx="3"
            stroke-linejoin="round"
            width="28"
            x="2"
            y="2"
          ></rect>
          <path
            d="m27 7 3-1v24h-28v-5l3-7 4 1 7-8 7-1z"
            fill="#0c6cf2"
            fill-opacity=".36"
            stroke-linejoin="round"
          ></path>
          <path d="m16 16v14"></path>
          <path d="m9 22v8"></path>
          <path d="m16 2v4"></path>
          <path d="m23 14v16"></path>
        </g>
        <circle cx="16" cy="11" fill="#fff" r="2"></circle>
      </g>
    </svg>
  ),
  reverse: true,
  list: {
    data: [
      {
        title: "Trade in 3 fiat currencies",
        desc: "The Exchange supports USD, EUR, and GBP.",
        img: "/public/assets/landing/lists/exchange/list-exchange-trade.png",
        imgWidth: 360,
      },
      {
        title: "A matching engine that can keep up with you",
        desc: "The world's fastest crypto matching engine, built by and for traders.",
        img: "/public/assets/landing/lists/exchange/list-exchange-matching.png",
        imgWidth: 560,
      },
      {
        title: "24/7 live chat support",
        desc: "Chat with customer support directly in the exchange, anytime.",
        img: "/public/assets/landing/lists/exchange/list-exchange-support.png",
        imgWidth: 357,
      },
      {
        title: "Margin trading",
        desc: "5x your position with margin trading.",
        img: "/public/assets/landing/lists/exchange/list-exchange-margin.png",
        imgWidth: 895,
        overflow: true,
      },
    ],
    bgColor: "#f5fafe",
  },
};
