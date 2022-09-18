import 'styled-components'


declare module 'styled-component'{
    export interface defaultTheme{
        title:string,
    color: {
        primary: string,
        secondary:string,
        terciary:string,
        white: string,
        black: string,
        gray:string,
        succes:string,
        info:string,
        warning:string
    },
    }
}