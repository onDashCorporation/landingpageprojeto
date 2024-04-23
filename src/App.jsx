import * as S from "./styled"
import { useEffect } from 'react';



function App() {
   useEffect(() => {
    const addFavicon = () => {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      link.href = 'public/favicon.ico'; // Use um caminho relativo para o arquivo favicon
      document.head.appendChild(link);
    };

    addFavicon();
  }, []); // Adicione [] para garantir que a função seja chamada apenas uma vez após a montagem do componente

  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <S.Page>

      <S.Nav>
        <S.Logo><img src="src\img\Logo.png" alt="" /></S.Logo>

        <S.Home>Home</S.Home>
        <S.About href="#about_us">About</S.About>
        <S.Promo href="#promotions">Promo</S.Promo>
        <S.Contact href="#contacts">Contact</S.Contact>
      </S.Nav>

      <S.Main>
        <S.Title1>Mantenha-se a frente com a ON DASH</S.Title1>
        
        <S.Text1>Uma ferramenta completa para o gerenciamento do seu estoque em tempo real</S.Text1>
        
        <S.Button1  onClick={scrollToContacts}>Contact</S.Button1>

        <S.Divotm>
          <S.Divimg> 
            <img src="src\img\Design sem nome.png" alt="" />
          </S.Divimg>
          
          <S.Title2>Otimize,organize e simplifique</S.Title2>

          <S.Divtext>
            <S.Text2>Descubra como ON DASH pode revolucionar a forma como você gerencia seu estoque</S.Text2>
            
            <S.Button2 onClick={scrollToContacts}>Contact</S.Button2>

          </S.Divtext>

          <S.Divimg2>
            <img src="src\img\img2.png" alt="" />
          </S.Divimg2> 
        </S.Divotm>

        <S.Avaliacoes>
          <S.Title3>Avaliações</S.Title3>

          <S.Subtitle>Veja as opniões de alguns dos nossos clientes</S.Subtitle>
                  
            <S.Avaliacoes1> 
              <S.Avaliacao1>
                <S.ImgA1>
                  <img src="src\img\usuario-de-perfil.png" alt="" />
                </S.ImgA1>
                <S.Comment1>
                  O ondash simplificou completamente nossos processos internos. Agora, podemos acompanhar facilmente os níveis de estoque. É uma ferramenta indispensável para otimizar nossas operações
                </S.Comment1>
              </S.Avaliacao1>

              <S.Avaliacao2>
                <S.ImgA3>
                  <img src="src\img\usuario-de-perfil.png" alt="" />
                </S.ImgA3>
                <S.Comment3>
                  O recurso de alerta de estoque mínimo nos permite agir proativamente, garantindo que sempre tenhamos os produtos certos disponíveis.
                </S.Comment3>
              </S.Avaliacao2>  
            </S.Avaliacoes1>

            <S.Avaliacoes2>
              <S.Avaliacao2>
                <S.ImgA2>
                  <img src="src\img\usuario-de-perfil.png" alt="" />
                </S.ImgA2>
                <S.Comment2>
                  Estou impressionado com a facilidade de uso. Mesmo sem experiência prévia em sistemas de gerenciamento de estoque, consegui aprender rapidamente a navegar pelas diferentes funcionalidades.
                </S.Comment2>
              </S.Avaliacao2> 
                       
              <S.Avaliacao4>
                <S.ImgA4>
                  <img src="src\img\usuario-de-perfil.png" alt="" />
                </S.ImgA4>
                <S.Comment4>
                  Nossos custos operacionais diminuíram significativamente, estamos economizando tempo e dinheiro, o que contribui diretamente para a lucratividade da nossa empresa.
                </S.Comment4>
              </S.Avaliacao4> 
          </S.Avaliacoes2> 
       </S.Avaliacoes>

       <S.Aboutus id="about_us">
        <S.Equipe>
          <S.Title4>Nossa Equipe</S.Title4>

            <S.Fotos1>
              <S.Foto1>
                <img src="src\img\IMG_5834.JPG.png" alt="" />
                <S.Legenda1>
                  <figcaption>Anna Gabriela</figcaption>
                </S.Legenda1>
              </S.Foto1>

              <S.Foto2>
                <img src="src\img\IMG_5824.JPG.png" alt="" />
                <S.Legenda2>
                  <figcaption>Arthur Ferreira</figcaption>
                </S.Legenda2>
              </S.Foto2>

              <S.Foto3>
                <img src="src\img\IMG_5983.JPG.png" alt="" />
                <S.Legenda3>
                  <figcaption>Carlos Henrique</figcaption>
                </S.Legenda3>
              </S.Foto3>

              <S.Foto4>
                <img src="src\img\IMG_5833.JPG.png" alt="" />
                <S.Legenda4>
                  <figcaption>Douglas Henrique</figcaption>
                </S.Legenda4>
              </S.Foto4>
            </S.Fotos1>

            <S.Fotos2>
              <S.Foto5>
                <img src="src\img\IMG_5822 (1).JPG.png" alt="" />
                <S.Legenda5>
                  <figcaption>Erick Franco</figcaption>
                </S.Legenda5>
              </S.Foto5>

              <S.Foto6>
                <img src="src\img\IMG_5827.JPG.png" alt="" />
                <S.Legenda6>
                  <figcaption>Gabriela da Luz</figcaption>
                </S.Legenda6>
              </S.Foto6>
            
              <S.Foto7>
                <img src="src\img\IMG_5985.JPG.png" alt="" />
                <S.Legenda7>
                  <figcaption>Geovana Moreira</figcaption>
                </S.Legenda7>
              </S.Foto7>
            </S.Fotos2>
            
        </S.Equipe>
        
          <S.Nossahistoria>
            <S.Title5>Nossa História</S.Title5>

              <S.Historia>A história da On Dash é a jornada de um grupo de amigos que reconheceram os desafios enfrentados pelas pequenas empresas no gerenciamento de estoque e decidiram fazer algo a respeito. Movidos pela paixão pelo empreendedorismo e pela tecnologia, eles fundaram a On Dash com o objetivo de criar soluções acessíveis e eficazes para esse problema.
                <br></br><br></br>

                Inspirados por suas próprias experiências trabalhando em uma pequena loja de varejo, onde testemunharam as dificuldades do controle manual de estoque, os fundadores da On Dash uniram suas habilidades em desenvolvimento de software e gestão de negócios para criar uma plataforma inovadora. Ao longo de meses de desenvolvimento, eles se concentraram em criar uma solução intuitiva e personalizável, capaz de atender às necessidades específicas de diferentes tipos de negócios.
                <br></br><br></br>

                Após intensos testes e refinamentos, a On Dash foi oficialmente lançada. A aceitação inicial por pequenas empresas locais foi excepcional, com os proprietários impressionados com a facilidade de uso e a eficácia da plataforma. À medida que o boca a boca se espalhava, a demanda pela On Dash crescia rapidamente, e em pouco tempo ela se tornou uma ferramenta indispensável para pequenas empresas em todo lugar.
                <br></br><br></br>

                O sucesso da On Dash não se limitou apenas ao aumento da eficiência operacional; ela também capacitou as pequenas empresas a competir de forma mais eficaz no mercado. Os proprietários viram uma redução significativa no tempo gasto em tarefas administrativas, permitindo-lhes concentrar-se mais no crescimento e na inovação de seus negócios.
                <br></br><br></br>

                Como parte de seu compromisso contínuo com a excelência, os fundadores da On Dash estão constantemente atualizando e aprimorando a plataforma. Eles incorporam feedback dos clientes e integram novos recursos para atender às necessidades em constante evolução do mercado. Com uma visão clara para o futuro, a On Dash está pronta para continuar transformando a forma como as pequenas empresas gerenciam seus estoques, consolidando-se como uma parceira confiável em sua jornada para o sucesso.
              </S.Historia>
          </S.Nossahistoria>
        </S.Aboutus> 
        
        <S.Promocoes id="promotions">
          <S.Title6>Promoções</S.Title6>

          <S.Subtitle2>Fique de olho nas nossas ofertas imperdiveis</S.Subtitle2>

          <S.Imgpromo>
            <img src="src\img\Banner - Promoção.png" alt="" />
          </S.Imgpromo>
        </S.Promocoes>

        <S.Contatos id="contacts">
          <S.Title7>Entre em contato</S.Title7>

            <S.Contatos1>

              <S.Github>
                <img src="src\img\placa-do-github.png" alt="" />
              </S.Github> 

              <S.Titlegit href="https://github.com/onDashCorporation">
                GitHub On Dash
              </S.Titlegit>

              <S.Gmail>
                <img src="src\img\logotipo-do-gmail.png" alt="" />
              </S.Gmail>

              <S.Titlegmail href="mailto:OnDashequipe@gmail.com">
                Gmail On Dash
              </S.Titlegmail>

              <S.Linkedin>
                <img src="src\img\linkedin.png" alt="" />
              </S.Linkedin>

              <S.Titlelink href="https://www.linkedin.com/in/doyklas/">
                Linkedin On Dash
              </S.Titlelink>

            </S.Contatos1>
        </S.Contatos>

      </S.Main>
      <S.Footer>
        <S.Titlsf>
          <S.Logo2>
            <img src="src\img\Logo.png" alt="" />
          </S.Logo2>
          
          <S.Title8>Links</S.Title8>
          
          <S.Title9>Get in Touch</S.Title9>

        </S.Titlsf>
        <S.Text3>Potencialize seu negócio com a Ondash! </S.Text3>
        <S.Linksf>
          
          <S.Title10>Home<br></br></S.Title10>

          <S.Title11>About<br></br></S.Title11>

          <S.Title12>Promo<br></br></S.Title12>

          <S.Title13>Contact<br></br></S.Title13>

        </S.Linksf>
        <S.Contactsf>
          <S.Title12>Email:Ondash@gmail.com<br></br></S.Title12>

          <S.Title13>Phone:(19) 97655-7162<br></br></S.Title13>
        </S.Contactsf>
        <S.Icons>
          <S.Iconf1>
            <img src="src\img\001-instagram.png" alt="" />
          </S.Iconf1> 

          <S.Iconf2>
            <img src="src\img\002-whatsapp.png" alt="" />
          </S.Iconf2>

          <S.Iconf3>
            <img src="src\img\003-facebook.png" alt="" /> 
          </S.Iconf3> 
        </S.Icons>
      </S.Footer>
       
    </S.Page>
  )
}

export default App


