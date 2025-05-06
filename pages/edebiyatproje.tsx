
const EdebiyatProje = () => {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto',
      fontFamily: 'Georgia, serif',
      lineHeight: '1.8',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(8px)',
      borderRadius: '12px',
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
