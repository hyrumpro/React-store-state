import styled, {ThemeProvider} from 'styled-components';

const defaultMainColor = "#ffd166"

const Anchor = styled.a`
   display: inline-block;
   font-size: 18px;
   text-decoration: none;
   color: ${({ theme }) => theme.mainColor || defaultMainColor};
   padding: 10px 16px;
   border: solid 2px ${({ theme }) => theme.mainColor || defaultMainColor};
   margin: 5px;
   transition: 320ms;
   &:hover {
     background-color: ${({ theme }) => theme.mainColor || defaultMainColor};
     color: white;
   	 opacity: 0.7;
   }

`;

const Paragraph = styled.p`
     border: solid 1px ${({ theme }) => theme.mainColor || defaultMainColor};
     padding: 10px;
     font-family: verdana;
     color:${({ theme }) => theme.mainColor || defaultMainColor};
`;

const LightTheme = {
    mainColor: "#28fc03" 
}

const DarkTheme = {
    mainColor: "olive" 
}

export const StyledComponents = () => {

	return(
         <div>
         	<h2>Styled Component</h2>

            <Anchor color="salmon" href="https://github.com/">Im a link</Anchor>
            <Anchor color="orange" href="https://github.com/">Im a link</Anchor>
            <Anchor color="#28fc03" href="https://github.com/">Im a link</Anchor>
            <Paragraph>Bitcoin is like a toddler who just learned to walk. It's a bit wobbly and clumsy at first,
             but it's growing fast and everyone is starting to take notice.
             Bitcoin is like a roller coaster ride. It's up, it's down, but it's always a wild ride. And the best 
             part is, you never know what's coming next.Bitcoin is like a cult. People who believe in it are 
             passionate and devoted, and they're always trying to convert new members. But unlike most cults, 
             Bitcoin actually has the potential to change the world.</Paragraph>

          <ThemeProvider theme={LightTheme}>
         	<Anchor color="salmon" href="https://github.com/">Im a link</Anchor>
         	<Anchor color="orange" href="https://github.com/">Im a link</Anchor>
         	<Anchor color="#28fc03" href="https://github.com/">Im a link</Anchor>
         	<Paragraph>Bitcoin is like a toddler who just learned to walk. It's a bit wobbly and clumsy at first,
         	 but it's growing fast and everyone is starting to take notice.
             Bitcoin is like a roller coaster ride. It's up, it's down, but it's always a wild ride. And the best 
             part is, you never know what's coming next.Bitcoin is like a cult. People who believe in it are 
             passionate and devoted, and they're always trying to convert new members. But unlike most cults, 
             Bitcoin actually has the potential to change the world.</Paragraph>
         </ThemeProvider>

         <ThemeProvider theme={DarkTheme}>
            <Anchor color="salmon" href="https://github.com/">Im a link</Anchor>
            <Anchor color="orange" href="https://github.com/">Im a link</Anchor>
            <Anchor color="#28fc03" href="https://github.com/">Im a link</Anchor>
            <Paragraph>Bitcoin is like a toddler who just learned to walk. It's a bit wobbly and clumsy at first,
             but it's growing fast and everyone is starting to take notice.
             Bitcoin is like a roller coaster ride. It's up, it's down, but it's always a wild ride. And the best 
             part is, you never know what's coming next.Bitcoin is like a cult. People who believe in it are 
             passionate and devoted, and they're always trying to convert new members. But unlike most cults, 
             Bitcoin actually has the potential to change the world.</Paragraph>
        </ThemeProvider>

         	<hr />
         </div>

		);
}



{/*Example 1
const Anchor = styled.a`
   display: inline-block;
   font-size: 18px;
   text-decoration: none;
   color: ${(props) => props.color};
   padding: 10px 16px;
   border: solid 2px ${(props) => props.color};;
   margin: 5px;
   transition: 320ms;
   &:hover {
     background-color: ${(props) => props.color};
     color: white;
     opacity: 0.7;
   }

`;

const Paragraph = styled.p`
     border: solid 1px red;
     padding: 10px;
     font-family: verdana;
     color: olive;
`;

const LightTheme = {
    mainColor: "#28fc03"



    for the color of the theme: ${(props) => props.theme.mainColor} 
}*/}