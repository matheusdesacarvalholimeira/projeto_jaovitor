// src/pages/DiversasImagensPage.js
import React from 'react';
import './DiversasImagensPage.css';

const DiversasImagensPage = () => {
  // Array de URLs de imagens
  const imagens = [
    '/imagens/carga-dos-lanceiros.webp',
    '/imagens/download.jpeg',
    '/imagens/pintura-a-persistencia-da-memoria-por-salvador-dali-1931.png',
    '/imagens/starry-sky-0-cke.webp',
    '/imagens/fonte.webp',
  ];

  return (
    <div>
      <h2>Imagem dos Movimentos Literários</h2>
      <div className="imagem-container">
        {}
        {imagens.map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} className="imagem" />
        ))}
      </div>
    </div>
  );
};

export default DiversasImagensPage;
