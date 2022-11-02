//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const MostPopularBanner = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "88"}
      height={height || "88"}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="17"
        y="26"
        width="16"
        height="10"
        transform="rotate(-180 17 26)"
        fill="#E52525"
        className={fillColor}
      />
      <rect
        x="72.5"
        y="87.5"
        width="9.5"
        height="11"
        transform="rotate(-180 72.5 87.5)"
        fill="#E52525"
        className={fillColor}
      />
      <path
        d="M13.6716 3.32843C15.2337 1.76633 17.7663 1.76633 19.3284 3.32843L85.0894 69.0894C86.6515 70.6515 86.6515 73.1841 85.0894 74.7462L72.3614 87.4741L0.943651 16.0563L13.6716 3.32843Z"
        fill="#EA5252"
        className={fillColor}
      />
      <path
        d="M18.7351 13.663L13.5925 18.8056L14.6471 19.8602L18.0069 16.5005L18.0495 16.5431L16.0457 21.2086L16.7639 21.9268L21.4168 19.9355L21.4595 19.9782L18.1123 23.3254L19.167 24.3801L24.3095 19.2375L22.9687 17.8966L18.0973 19.9355L18.037 19.8753L20.0759 15.0039L18.7351 13.663ZM27.3598 27.4303C29.0422 25.748 28.9568 23.7442 27.5934 22.3807C26.2223 21.0096 24.2261 20.9318 22.5437 22.6142C20.8688 24.289 20.9391 26.2929 22.3101 27.6639C23.6736 29.0274 25.6774 29.1127 27.3598 27.4303ZM26.2575 26.328C25.1677 27.4178 24.0603 27.4906 23.2719 26.7021C22.4809 25.9112 22.5562 24.8063 23.646 23.7165C24.7358 22.6267 25.8406 22.5514 26.6316 23.3424C27.4201 24.1309 27.3473 25.2382 26.2575 26.328ZM32.0473 29.9332L33.0894 30.9753C33.9908 30.0437 33.8703 28.6576 32.7253 27.5126C31.5978 26.3851 30.149 26.1817 29.2199 27.1209C28.459 27.8767 28.5595 28.8459 29.2199 29.9232L29.6392 30.6238C30.0636 31.3193 30.2142 31.7914 29.8702 32.1404C29.4911 32.5146 28.8784 32.4141 28.3259 31.8617C27.761 31.2967 27.6153 30.6288 28.0949 30.0789L27.0428 29.0267C25.958 30.1667 26.179 31.5378 27.427 32.7858C28.6825 34.0413 30.0209 34.1794 30.965 33.2403C31.8188 32.3815 31.628 31.2816 30.9349 30.1868L30.5834 29.6143C30.2394 29.0644 30.0309 28.5245 30.4076 28.1629C30.739 27.8315 31.2764 27.8817 31.8087 28.414C32.3285 28.9338 32.4114 29.4888 32.0473 29.9332ZM34.2777 30.9985L35.8521 32.5729L31.606 36.8191L32.6807 37.8938L36.9269 33.6477L38.5013 35.2221L39.3977 34.3256L35.1742 30.1021L34.2777 30.9985ZM36.5872 41.8004L37.6745 42.8876L39.3418 41.2203L40.2559 42.1343C41.4386 43.317 42.8322 43.2994 43.8592 42.2724C44.8812 41.2504 44.9264 39.8543 43.7588 38.6867L41.7298 36.6578L36.5872 41.8004ZM40.2132 40.349L41.9282 38.6339L42.6614 39.3672C43.2892 39.9949 43.2515 40.6403 42.7393 41.1525C42.2295 41.6623 41.5742 41.71 40.9514 41.0872L40.2132 40.349ZM48.4625 48.5331C50.1449 46.8507 50.0596 44.8469 48.6961 43.4834C47.325 42.1124 45.3288 42.0345 43.6464 43.7169C41.9715 45.3918 42.0418 47.3956 43.4129 48.7666C44.7763 50.1301 46.7802 50.2155 48.4625 48.5331ZM47.3602 47.4307C46.2704 48.5205 45.163 48.5933 44.3746 47.8049C43.5836 47.0139 43.6589 45.909 44.7487 44.8192C45.8385 43.7295 46.9434 43.6541 47.7343 44.4451C48.5228 45.2336 48.45 46.3409 47.3602 47.4307ZM46.6967 51.9098L47.7839 52.9971L49.4513 51.3297L50.3653 52.2437C51.548 53.4264 52.9416 53.4089 53.9686 52.3819C54.9906 51.3599 55.0358 49.9637 53.8682 48.7961L51.8393 46.7672L46.6967 51.9098ZM50.3226 50.4584L52.0376 48.7434L52.7708 49.4766C53.3986 50.1043 53.3609 50.7497 52.8487 51.2619C52.3389 51.7717 51.6836 51.8194 51.0608 51.1966L50.3226 50.4584ZM59.5939 54.5219L56.3472 57.7686C55.7596 58.3562 54.9234 58.3688 54.2906 57.736C53.6604 57.1057 53.6704 56.267 54.258 55.6795L57.5048 52.4327L56.4175 51.3454L53.0778 54.6851C51.9529 55.81 52.0508 57.4096 53.3339 58.6927C54.6121 59.9708 56.2166 60.0738 57.3416 58.9488L60.6812 55.6092L59.5939 54.5219ZM56.4332 61.6463L59.7252 64.9383L60.6216 64.0418L58.4169 61.8371L62.6631 57.591L61.5758 56.5037L56.4332 61.6463ZM61.4628 66.6759L63.0171 65.8849L64.8728 67.7406L64.0818 69.2949L65.2469 70.46L68.6167 63.5446L67.2156 62.1435L60.2977 65.5108L61.4628 66.6759ZM64.1421 65.3124L66.7209 63.9991L66.7611 64.0393L65.4478 66.6182L64.1421 65.3124ZM65.8659 71.079L66.9532 72.1663L68.7762 70.3433L69.5697 71.1368L68.7209 73.934L69.9212 75.1343L70.8277 72.0432C71.6639 72.3772 72.4975 72.1914 73.2006 71.4883C74.2226 70.4663 74.205 69.1329 73.0374 67.9653L71.0085 65.9364L65.8659 71.079ZM69.65 69.4694L71.2068 67.9126L71.9401 68.6458C72.5678 69.2736 72.5929 69.8561 72.0807 70.3684C71.5709 70.8781 71.011 70.8304 70.3883 70.2077L69.65 69.4694Z"
        fill="white"
      />
    </svg>
  );
};

export default MostPopularBanner;