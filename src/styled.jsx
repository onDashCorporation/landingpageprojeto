import styled from "styled-components";

export const Page = styled.div`
background-color:#020414;
margin:none;
padding:none;
width:100vw;
height:100%;
`;
export const Nav = styled.nav`
align-self:top;
display:flex;
padding-top:10px;
padding-left:20%;
`;
export const Logo = styled.a`
margin-top:3.5%;
margin-left:-21%;
`;
export const Home = styled.a`
&:hover{
    color:#8CB8FA;
    transition:all 0.7s;
};
&:hover::after{
    content: '';
    position: absolute;
    left: 93.5%;
    bottom: 15px; 
    width: 6%;
    height: 2px; 
    background-color:#8CB8FA; 
    transition:all 0.7s;
};
text-decoration:none;
position:relative;
color:#FFFFFF;
padding:30px;
padding-left:85%;

`;
export const About = styled.a`
&:hover{
    color:#8CB8FA;
    transition:all 0.5s;
};
&:hover::after{
    content: '';
    position: absolute;
    left: 20%;
    bottom: 15px; 
    width: 60%;
    height: 2px;
    background-color:#8CB8FA; 
    transition:all 0.7s;
};
text-decoration:none;
position:relative;
color:#FFFFFF;
padding:30px;
`;
export const Promo = styled.a`
&:hover{
    color:#8CB8FA;
    transition:all 0.5s;
};
&:hover::after{
    content: '';
    position: absolute;
    left: 20%;
    bottom: 15px; 
    width: 60%;
    height: 2px; 
    background-color:#8CB8FA; 
    transition:all 0.7s;
};
text-decoration:none;
position:relative;
color:#FFFFFF;
padding:30px;
`;
export const Contact = styled.a`
&:hover{
    color:#8CB8FA;
    transition:all 0.5s;
};
&:hover::after{
    content: '';
    position: absolute;
    left: 20%;
    bottom: 15px; 
    width: 60%;
    height: 2px; 
    background-color:#8CB8FA;
    transition:all 0.7s; 
};
text-decoration:none;
position:relative;
color:#FFFFFF;
padding:30px;
`;
export const Main = styled.main`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title1 = styled.h2`
  color: #fff;
  margin-left: 3%;
  margin-right: 45%;
  width: 15%;

`;
export const Text1 = styled.p`
color: #fff;
width:15%;
text-align:justify;
margin-left: 79.5%;
margin-top:-95px;
margin-bottom:40px;


`;
export const Button1 = styled.button`
background-color:#8CB8FA;
margin-left:79.5%;
margin-top:-11px;
margin-bottom:90px;
align-content:center;
width: 124px;
height: 32px;
border-radius: 32px;
padding-bottom:2px;
padding-top:2px;

`;


export const Divotm = styled.div`
margin-top: 10px;
width:100vw;
display:inline;
margin-bottom:10%;
`;
export const Divimg = styled.div`
margin-top: 10px;
width:100vw;
margin-bottom:15%;
`;
export const Title2 = styled.h1`
  color: #fff;
  
  margin-left: 60%;
  width: 25%;
  margin-top:180px;

`;
export const Text2 = styled.p`
color: #fff;
width:18%;
text-align:justify;
margin-left: 60%;
margin-bottom:40px;
margin-top:-11px;
`;
export const Button2 = styled.button`
background-color:#8CB8FA;
 margin-left:60%;

width: 124px;
height: 32px;
border-radius: 32px;
padding-bottom:2px;
padding-top:2px;

`;

export const Divtext = styled.div`

`;
export const Divimg2 = styled.div`
margin-top: -400px;
width:90%;
margin-left:6%;
`;
 export const Avaliacoes = styled.div`
background-color: #F1F6F9;
color: #020414;
width:100%;
height:1100px;


 `;
  export const Avaliacoes1 = styled.div`
    display:inline-flex;
    margin-top:2%;
  
   `;
    export const Avaliacoes2 = styled.div`
  display:inline-flex;
  margin-top:10%;
  margin-left:15%;

    
     `;
 export const Title3 = styled.h1`
 color: #020414;

 margin-top:180px;
 align-self: center;
 margin-left:44%; 

 `;
 export const Subtitle = styled.p`
 color: #020414;
 width: 25%;
 text-align: center;
 margin-left:38%; 
 `;
export const Avaliacao1 = styled.div`
  width:25%; 
margin-right:20%;
margin-left:15% ;  


`;
export const ImgA1 = styled.div`
 width:50px;
 height:50px;
 margin-left:5%;
`;
export const Comment1 = styled.p`
text-align:left;
margin-left:30%;
margin-top:-30px;
`;

export const Avaliacao2 = styled.div`
 width:25%; 

margin-right:15% ;
 
`;
export const ImgA2 = styled.div`
 width:50px;
 height:50px;
 margin-left:5%;
`;
export const Comment2 = styled.p`
text-align:left;
margin-left:30%;
margin-top:-30px;
`;

export const Avaliacao3 = styled.div`
width:25%; 
margin-right:20%;

 
`;
export const ImgA3 = styled.div`
 width:50px;
 height:50px;
 margin-left:5%;
`;
export const Comment3 = styled.p`
text-align:left;
margin-left:30%;
margin-top:-30px;
`;
export const Avaliacao4 = styled.div`
 width:25%; 

margin-left:13.2% ;  
`;
export const ImgA4 = styled.div`
 width:50px;
 height:50px;
 margin-left:5%;
`;
export const Comment4 = styled.p`
text-align:left;
margin-left:30%;
margin-top:-30px; 
`;
export const Aboutus = styled.div`

`;
export const Equipe = styled.div`
width:100%;
height:30vh;

`;


export const Title4 = styled.h1`
color:#fff;
margin-left:42%;
margin-top:20%;
`;

export const Fotos1 = styled.div`
display:inline-flex;

`;
export const Fotos2 = styled.div`
display:inline-flex;
margin-left:24%;
margin-right:15%;

`;
export const Foto1 = styled.div`
width:200px;
margin-top:15%;
margin-left:33%;


`;
export const Foto2 = styled.div`
width:100%;
margin-top:15%;
margin-left:15%;

`;
export const Foto3 = styled.div`
width:100%;
margin-top:15%;
margin-left:10%;

`;
export const Foto4 = styled.div`
width:100%;
margin-top:15%;
margin-left:10%;

`;
export const Foto5 = styled.div`
width:100%;
margin-top:30%;
margin-left:5%;
margin-right:5%;
`;
export const Foto6 = styled.div`
width:100%;
margin-top:30%;
margin-left:5%;
margin-right:5%;
`;
export const Foto7 = styled.div`
width:100%;
margin-top:30%;
margin-left:5%;
margin-right:5%;
`;
export const Legenda1 = styled.text`
color:#fff;
text-align:center;
`;
export const Legenda2 = styled.text`
color:#fff;
text-align:center;
`;
export const Legenda3 = styled.text`
color:#fff;
text-align:center;
`;
export const Legenda4 = styled.text`
color:#fff;
text-align:center;
`;
export const Legenda5 = styled.text`
color:#fff;
text-align:center;
`;
export const Legenda6 = styled.text`
color:#fff;
text-align:center;
`;
export const Legenda7 = styled.text`
color:#fff;
text-align:center;
`;
export const Nossahistoria = styled.div`
background-color:#f1f6f9;
width:100vw;
height:1500px;

`;

export const Title5 = styled.h1`
color:#020414;
margin-left:42.5%;
margin-top:60%;
padding-top:15%;
`;
export const Historia = styled.p`
color:#020414;
margin-top:7%;
text-align:justify;
margin-left:29%;
margin-right:27%;
`;
export const Promocoes = styled.div`
width:100vw;
`;
export const Title6 = styled.h1`
color:#fff;
margin-top:15%;
 margin-left:45%; 
`;
export const Subtitle2 = styled.text`
color:#fff;
margin-top:8%;
 margin-left:44%; 
`;
export const Imgpromo= styled.div`
margin-top:8%; 
margin-left:16%;
`;
export const Contatos = styled.div`
width:100vw;
`;
export const Title7 = styled.h1`
color:#fff;
margin-top:15%;
 margin-left:41.5%; 
`;
export const Contatos1 = styled.div`
width:100vw;
display:inline-flex;
margin-top:15%;
`;

export const Github = styled.div`
margin-left:18%;
`;


export const Gmail = styled.div`
margin-left:17%;
`;

export const Linkedin = styled.div`
margin-left:16%;
`;

export const Titlegit = styled.a`
color: #FFF;
margin:23px;
`;
export const Titlegmail = styled.a`
color: #FFF;
margin:23px;
`;
export const Titlelink = styled.a`
color: #FFF;
margin:23px;

`;

export const Footer = styled.footer`
margin-top:20%;
background-color:#020414;
margin-left:12%;
`;

export const Logo2 = styled.a`
margin-top:18%;
margin-left:5%;

`;
export const Title8 = styled.text`
color:#fff;
margin-top:15%;
 margin-left:33%; 
`;
export const Title9 = styled.text`
color:#fff;
margin-top:15%;
 margin-left:31.5%; 
`;
export const Text3 = styled.p`
color:#fff;
margin-top:1%;
margin-left:5%; 
margin-bottom:5%;
width:10%;
`;
 export const Titlsf = styled.div`

 `;
 export const Linksf = styled.div`
 margin-left:-12%;
 text-align:center;
  margin-top:-134px; /* Match the margin-top with Text3 */
  position: relative; /* Ensure the containing element for absolute positioning */
  height: auto; /* Adjust the height as needed */
  padding-bottom: 20px; /* Provide some padding to prevent content from overlapping */
 `;
export const Title10 = styled.text`
color:#fff;

`;
export const Title11 = styled.text`
color:#fff;

`;
export const Title12 = styled.text`
color:#fff;

`;
export const Title13 = styled.text`
color:#fff;

`;
export const Contactsf = styled.div`
 margin-left:58.5%;
 text-align:center;
  margin-top:-6%;
 position: relative; 
  height: auto; 
  padding-bottom: 20px; 
 `;
 export const Icons= styled.div`
 margin-left:4.5%;
  margin-top:-1.5%;
 position: relative; 
  height: auto; 
  padding-bottom: 20px; 
  display: inline-flex;
 `;

export const Iconf1= styled.div`
margin:7px;
`;
export const Iconf2= styled.div`
margin:7px;
`;
export const Iconf3= styled.div`
margin:7px;
`;