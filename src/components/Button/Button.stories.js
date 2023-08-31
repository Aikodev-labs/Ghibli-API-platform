// importar el componente
import Button from "./Button";

// exportar el componente
export default {
  title: "Components/Button", // seccion de componentes / nombre del componente
  component: Button, // componente a exportar
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

// exportar las variantes del componente
export const Primary = {
  args: { // argumentos del componente o props
    text: "Primary",
    type: "primary",
    size: "s",
    onclick: () => alert("Button clicked"),
  },
};

export const Secondary = {
    args: {
        text: "Secondary",
        type: "secondary",
        size: "s",
        onclick: () => alert("Button clicked"),
    },
};
