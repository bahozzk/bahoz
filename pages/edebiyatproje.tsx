/* eslint-disable react/no-unescaped-entities */
const EdebiyatProje = () => {
  return (
    <main style={mainStyle}>
      {/* 1. Başlık */}
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Başlık 1</h1>
        <div style={paragraphContainerStyle}>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        </div>
      </section>

      {/* 2. Başlık */}
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Başlık 2</h1>
        <div style={paragraphContainerStyle}>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        </div>
      </section>

      {/* 3. Başlık */}
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Başlık 3</h1>
        <div style={paragraphContainerStyle}>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
          <p style={paragraphStyle}>Buraya kendi yazını yazabilirsin...</p>
        </div>
      </section>

      {/* Video */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={videoHeaderStyle}>Videomuzu İzlemek İçin:</h2>
        <div style={videoWrapperStyle}>
          <iframe
            src="https://www.youtube.com/embed/tP_UtqYtyAQ"
            title="Edebiyat Projesi Videosu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={iframeStyle}
          ></iframe>
        </div>
      </section>
    </main>
  );
};

// Stil tanımları
const mainStyle = {
  padding: '2rem',
  maxWidth: '800px',
  margin: 'auto',
  fontFamily: 'Georgia, serif',
  lineHeight: '1.8',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(8px)',
  borderRadius: '12px',
};

const sectionStyle = {
  marginBottom: '3rem',
};

const headerStyle = {
  fontSize: '1.8rem',
  borderBottom: '2px solid #f5f5f5',
  paddingBottom: '0.5rem',
  marginBottom: '1rem',
};

const paragraphContainerStyle = {
  backgroundColor: '#2e2e40',
  padding: '1.5rem',
  borderRadius: '10px',
};

const paragraphStyle = {
  fontSize: '1rem',
  marginBottom: '1rem',
};

const videoHeaderStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  borderBottom: '1px solid #f5f5f5',
  paddingBottom: '0.5rem',
};

const videoWrapperStyle = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  borderRadius: '12px',
};

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '12px',
};

export default EdebiyatProje;
