import withMT from "@material-tailwind/react/utils/withMT";
import tailwindAnimated from 'tailwindcss-animated';

export default withMT({
content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
theme: {
extend: {
    colors : {
        background_Blue:"#B0E2E9",
        'teal600': "#0D9488",
        'purple700': "#7E22CE",
        'cyan700': "#0E7490",
        'cyan950': "#083344",
        'neutral50': "#FFFFFF",
        'neutral700': "#404040"
    },
    fontFamily:{
        'helvetica': ['Helvetica', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'neue-lt':["HelveticaNeueLTStd", "sans-serif"],
        'neue-ltcd':["HelveticaNeueLTStdCondensed", "sans-serif"],
    }
},
},
plugins: [
    tailwindAnimated
],
});




