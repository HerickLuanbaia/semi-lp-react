
import './App.css'
import { useState } from 'react'

function App() {
  const [nome,setNome]= useState("")
  const [assunto,setAssunto]= useState("")

  const navTo = (id) => {
    const element = document.getElementById(id)

    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const enviar = () => {
    const mensagem =`Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https.//wa.me/************?text=${msg}`)
  }

  return (
    <>
    <nav>
      <span class="navItem" onClick={() => navTo('s1')}>
        <img src="../home.png" alt="Home" />
        <p class="navWords">Home</p>
      </span>
      <span class="navItem" onClick={() => navTo('s3')}>
        <img src="../box.png" alt="Products" />
        <p class="navWords">Cards</p>
      </span>
      <span class="navItem" onClick={() => navTo('s4')}>
        <img src="../clapperboard.png" alt="Vídeo" />
        <p class="navWords">Vídeo</p>
      </span>
      <span class="navItem" onClick={() => navTo('s5')}>
        <img src="../mobile.png" alt="WhatsApp" />
        <p class="navWords">Contato</p>
      </span>
    </nav>
    <main>
      <section id="s1" class="s1">
        <h1>Título do banner</h1>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </section>

      <section id="s3" class="s3">
        <div class="card">
          <img src="../miranha 1.jpg" alt="" />
          <div class="textCard">
            <h4>Homen aranha 01</h4>
            <p>bvhdjvbslvbslnbfjsgnbnhjdh dhgsdhgsdvbshhv sdhfisghjsghs</p>
          </div>
        </div>

        <div class="card">
          <img src="../miranha 2.jpg" alt="" />
          <div class="textCard">
            <h4>Homen aranha 02</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div class="card">
          <img src="../miranha 3.jpg" alt="" />
          <div class="textCard">
            <h4>Homen aranha 03</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <section id="s4" class="s4">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/M5TroQasENI?si=C9K_Cljs_4gHWJCd"
          title="YouTube video player"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      <section id="s5" class="s5">
        <div class="formulario">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Insira seu nome" value={nome} onChange={(event) => setNome(event.target.value)} />
          <label htmlFor="assunto">Assunto:</label>
          <textarea id="assunto" placeholder="Insira sua mensagem" value={assunto} onChange={(event) => setAssunto(event.target.value)}></textarea>
          <button onCick="enviar()">ENVIAR</button>
        </div>
      </section>
    </main>
    <footer>
      <a href="https://facebook.com" target="_blank">
        <img width="30px" src="../icons/facebook.png" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img width="30px" src="../icons/instagram.png" alt="Instagram" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img width="30px" src="../icons/linkedin.png" alt="Linkedin" />
      </a>
      <a href="https://github.com" target="_blank">
        <img width="30px" src="../icons/github.png" alt="Github" />
      </a>
    </footer>

    <script src="script.js"></script>
    </>
  )
}

export default App
