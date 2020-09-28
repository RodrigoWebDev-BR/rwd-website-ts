import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        theme: string,
        colors: {
            bg: string,
            btnBorder: string,
            btnColor: string,
            card: string,
            cardBorder: string,
            cardTxt: string,
            footerIcons: string,
            tbBorder: string,
            tbIcons: string,
            tbTxt: string,
            txt: string   
        }
    }

}