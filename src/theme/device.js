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
  tabLand: "1200px",
  bigDesk: "1800px",
};

export const device = {
  phone: `(max-width: ${size.phone})`,
  tabPort: `(max-width: ${size.tabPort})`,
  tabLand: `(max-width: ${size.tabLand})`,
  bigDesk: `(min-width: ${size.bigDesk})`,
};
