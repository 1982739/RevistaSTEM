import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const Welcome = () => {
      return (
        <div className="landing-page">
          {/* Header */}
          <header className="header">
            <nav className="nav">
              <div className="logo">DCDi</div>
              <ul className="nav-links">
                <li>Inicio</li>
                <li>Publicaciones</li>
                <li>Actividades</li>
                <li>Contacto</li>
              </ul>
            </nav>
          </header>
    
          {/* Main Banner */}
          <section className="banner">
            <h1>Compromiso Público y STEM</h1>
            <p>Exploramos iniciativas y temas que involucran el impacto de la educación en ingeniería en la sociedad.</p>
            <button className="cta-button">Ver revista</button>
          </section>
    
          {/* Slider */}
          <section className="slider">
            <div className="slider-item">El impacto del acceso temprano a la educación</div>
            <div className="slider-item">Innovación en la enseñanza STEM</div>
            <div className="slider-item">Diversidad e inclusión en ingeniería</div>
          </section>
    
          {/* Publications Section */}
          <section className="publications">
            <h2>Publicaciones</h2>
            <div className="publication-item">
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <button className="cta-button">Más ediciones</button>
            </div>
          </section>
    
          {/* Articles Section */}
        <section className="articles-section">
          <h2>Artículos</h2>
          <br></br>
          <div className="article-grid">
            <div className="article-item featured">
              <p className="article-date">19-08-2024</p>
              <h3>El proyecto Ingeniería Para Chile se posicionando</h3>
              <p>El proyecto ha tenido un impacto en...</p>
              <button className="cta-button">Ver más</button>
            </div>
            
            <div className="article-item">
              <p className="article-date">19-08-2024</p>
              <h3>El proyecto Ingeniería Para Chile se posicionando</h3>
              <p>El proyecto ha tenido un impacto en...</p>
              <button className="cta-button">Ver más</button>
            </div>
            
            <div className="article-item">
              <p className="article-date">18-08-2024</p>
              <h3>Mujeres en Ingeniería ha logrado...</h3>
              <button className="cta-button">Ver más</button>
            </div>
            
            <div className="article-item">
              <p className="article-date">17-08-2024</p>
              <h3>Trabajos de invierno ha comenzado...</h3>
              <button className="cta-button">Ver más</button>
            </div>
          </div>
          <br></br>
          <button className="next-button">Más artículos</button>

          

          <div className="subscribe-section">
            <div className="subscribe-content">
              <h3>Suscríbete</h3>
              <p>¡Suscríbete a nuestro newsletter para enterarte de nuevos artículos y publicaciones!</p>
              <input type="email" placeholder="EMAIL" />
            </div>
          </div>
        </section>
        </div>
      );
    }

const root = ReactDOM.createRoot(document.getElementById('welcome'));
root.render(<Welcome />);
    
export default Welcome;
