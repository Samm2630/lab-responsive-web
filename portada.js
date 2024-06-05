const editorButton = document.querySelector('.editor');
        const editorNombres = document.querySelector('.editor-nombres');
        const inicioLink = document.querySelector('.inicio');

        editorButton.addEventListener('click', () => {
            if (editorNombres.style.display === 'none') {
                editorNombres.style.display = 'flex';
                inicioLink.style.display = 'none';
            } else {
                editorNombres.style.display = 'none';
                inicioLink.style.display = 'flex';
            }
        });