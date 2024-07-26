/*************************************************** */
// programa para manejo de archivos
document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();

    const imagen = document.getElementById('imagen').files[0];
    const documento = document.getElementById('documento').files[0];

    if (imagen) {
        formData.append('imagen', imagen);
        await uploadFile(formData, '/upload/imagen');
        formData.delete('imagen');
    }

    if (documento) {
        formData.append('documento', documento);
        await uploadFile(formData, '/upload/documento');
    }
});

async function uploadFile(formData, url) {
    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const result = response.data;
        document.getElementById('response').innerHTML += `<p>File uploaded to: <a href="${result.filePath}" target="_blank">${result.filePath}</a></p>`;
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}