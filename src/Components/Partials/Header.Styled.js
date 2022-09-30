import styled from 'styled-components'

export const HeaderStyle = styled.header`
max-width: 100%;

nav { 
        display: flex;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        background-color: pink;
        img{
        width: 2rem;
        height: auto;
}
        ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 0 5rem;
        height: 3.5rem;
        width: 80vw;
        margin: 0 auto;
        justify-self: end;
}
}
`