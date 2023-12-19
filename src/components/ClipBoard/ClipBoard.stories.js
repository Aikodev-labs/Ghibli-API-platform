import ClipBoard from "./ClipBoard";





export default {
    title: "Components/ClipBoard", 
    component: ClipBoard,
    tags: ['autodocs'],
    parameters: {
    
      layout: 'centered',
    },
  };

  export const ClipBoardMain = {
    parameters: {
      layout: "centered",
    },
  };

  export const ClipBoardMain2 = {
    parameters: {
      layout: "centered",
    },
    args: {
      text: "Text to copy",
    },
  };