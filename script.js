document.addEventListener('DOMContentLoaded', function() {
    const htmlTextarea = document.querySelectorAll('.textarea-input')[0];
    const cssTextarea = document.querySelectorAll('.textarea-input')[1];
    const jsTextarea = document.querySelectorAll('.textarea-input')[2];
    const outputContainer = document.getElementById('output-container');


    

    function updateOutput() {
        const html = htmlTextarea.value;
        const css = cssTextarea.value;
        const js = jsTextarea.value;

        // Create a new iframe or clear the existing one
        let iframe = outputContainer.querySelector('iframe');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '300px'; // Adjust as needed
            iframe.style.border = 'none';
            outputContainer.innerHTML = '';
            outputContainer.appendChild(iframe);
        }

        // Write the content to the iframe
        const content = `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${js}</script>
                </body>
            </html>
        `;

        iframe.srcdoc = content;
    }

    htmlTextarea.addEventListener('input', updateOutput);
    cssTextarea.addEventListener('input', updateOutput);
    jsTextarea.addEventListener('input', updateOutput);

    // Initial update
    updateOutput();
});