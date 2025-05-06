import React from 'react';

const EdebiyatProje = () => {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '900px',
      margin: 'auto',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: '#f5f5f5',
      backgroundColor: '#1e1e2f',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    }}>
      
      {/* 1. Başlık */}
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '1.8rem',
          borderBottom: '2px solid #f5f5f5',
          paddingBottom: '0.5rem',
          marginBottom: '1rem',
        }}>
          Başlık 1
        </h1>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
      </section>

      {/* 2. Başlık */}
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={headerStyle}>Başlık 2</h1>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
      </section>

      {/* 3. Başlık */}
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={headerStyle}>Başlık 3</h1>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
      </section>
      
    </main>
  );
};

const headerStyle = {
  fontSize: '1.8rem',
  borderBottom: '2px solid #f5f5f5',
  paddingBottom: '0.5rem',
  marginBottom: '1rem',
};

const paragraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.7',
  backgroundColor: '#2e2e40',
  padding: '1rem',
  borderRadius: '8px',
  marginBottom: '1rem',
  transition: 'background-color 0.3s ease',
};

export default EdebiyatProje;
