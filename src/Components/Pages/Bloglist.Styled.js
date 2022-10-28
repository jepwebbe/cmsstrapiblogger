import styled from 'styled-components'

export const BloglistStyle = styled.ul`
list-style-type: none;
border-radius: 1rem;
padding: 0 1rem;
margin-top: 0;

li{
display: flex;
align-items: center;
text-align: center;
margin: 0 auto 1rem auto;
align-content: center;
background-color: #f5eec2;
border-radius: 1rem;
padding: 1rem;

div{
    flex: 2;
p{
    margin: 0.3rem;
    text-align: justify;
    padding: 0 1rem;
}
.byline{
    font-size: 0.7rem;
    font-style: italic;

}
a{
    text-decoration: none;
}
}
}
li:nth-child(2n){
}
img {
max-height: 200px;
width: auto;    
display: block;
flex: 1;
}
@media screen and (max-width: 800px){
    padding: 0;
    li {
        flex-direction: column;
        div {
            flex: unset;
        }
        img {
            flex: unset;
        }
    }
}
`