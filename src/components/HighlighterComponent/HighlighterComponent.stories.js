import HighlighterComponent from "./HighlighterComponent";

export default {
  title: "Components/HighlighterComponent",
  component: HighlighterComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1c1c1c" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export const HighlighterJavascript = {
  parameters: {
    layout: "left",
  },
  args: {
    language: "javascript",
    code: `function sayHello() {
              console.log("Hello World!");        
          }`,
    wrapLines: true,
  },
};

export const HighlighterJSON = {
  parameters: {
    layout: "left",
  },
  args: {
    language: "json",
    code: `
        {
            "name": "Juan",
            "lastName": "Perez",
            "age": 25
        }`,
    wrapLines: true,
  },
};
