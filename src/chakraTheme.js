import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        scarlet: '#FF1616',
        wildSand: '#F5F5F5',
        baliHai: '#9197B3',
        catskillWhite: '#F5F7FA',
        poloBlue: '#8BA3CB',
        silverChalice: '#B1B1B1',
        pippin: '#FFE0E0',
        concrete: '#F3F3F3',
        mercury: '#E9E9E9',
        dodgerBlue: '#367AFF',
        gunPowder: '#464255'
    },
    fonts: {
        heading: 'Poppins',
        text: 'Poppins'
    },
    fontSizes: {
        '2xs': '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px         | H6
        xl: '1.3125rem', // 21px        | H5
        '2xl': '1.5rem', // 24px        | H4
        '3xl': '1.75rem', // 28px       | H3
        '3.5xl': '1.875rem', // 30px    | Not for desktop / Mobile H2
        '4xl': '2rem', // 32px          | H2 / Mobile H1
        '5xl': '2.25rem', // 36px       | H1
    },
    breakpoints: {
        sm: '360px',
        mob: '480px',
        md: '768px',
        tablet: '992px',
        lg: '1200px',
        xl: '1366px',
        '2xl': '1920px',
        '3xl': '2560px',
    }
})

export default theme;