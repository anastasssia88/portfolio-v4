/*

Media queries

0 - 600px    Phone
600 - 900px   Tablet portrait
900 - 1200px   Tablet landscape
1200-1800px normal styles
1800px +   Large screen


$breakpoint argument choices:
phone
tab-port
tab-land
big-desk

1em == 16px

*/

export const size = {
  phone: "600px",
  tabPort: "900px",
  laptopSmall: "1024",
  tabLand: "1200px",
  bigDesk: "1800px",
};

export const device = {
  phone: `only screen and (max-width: ${size.phone})`,
  iPhoneProMax: `only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)`,
  tabPort: `only screen and (max-width: ${size.tabPort})`,
  laptopSmall: `only screen and (max-width: ${size.laptopSmall})`,
  tabLand: `only screen and (max-width: ${size.tabLand})`,
  bigDesk: `only screen and (min-width: ${size.bigDesk})`,
};
