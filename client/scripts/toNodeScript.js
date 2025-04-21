document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const messageDiv = document.getElementById('message');
  const loader = document.getElementById('loader');
  
  // Resetear estado
  messageDiv.textContent = '';
  document.getElementById('resultContainer').style.display = 'none';
  
  if (!file) {
      messageDiv.textContent = 'Selecciona un archivo CSV';
      return;
  }

  // Validar extensión del archivo
  if (!file.name.toLowerCase().endsWith('.csv')) {
      messageDiv.textContent = 'Solo se permiten archivos CSV';
      return;
  }

  try {
      loader.style.display = 'block';
      
      // 1. Subir archivo
      const formData = new FormData();
      formData.append('archivo', file);
      
      const uploadResponse = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData
      });
      
      if (!uploadResponse.ok) {
          throw new Error(`Error ${uploadResponse.status}: ${uploadResponse.statusText}`);
      }
      
      const uploadResult = await uploadResponse.json();
      
      // 2. Procesar CSV
      const processResponse = await fetch('http://localhost:3000/process-csv', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: uploadResult.filename })
      });
      
      if (!processResponse.ok) {
          throw new Error(`Error en procesamiento: ${processResponse.statusText}`);
      }
      
      const processResult = await processResponse.json();
      
      // Mostrar resultados
      if (processResult.success) {
          document.getElementById('resultContainer').style.display = 'block';
          document.getElementById('generatedPlot').src = processResult.imageUrl;
          messageDiv.textContent = 'Proceso completado con éxito!';
          messageDiv.style.color = 'green';
      }
      
  } catch (error) {
      console.error('Error:', error);
      messageDiv.textContent = error.message;
      messageDiv.style.color = 'red';
  } finally {
      loader.style.display = 'none';
  }
});