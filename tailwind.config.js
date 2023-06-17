import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
theme: {
extend: {
    colors : {
        background_Blue:"#B0E2E9",
    },
    fontFamily:{
        'helvetica': ['Helvetica', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
    }
},
},
plugins: [],
});