const translateButton = document.getElementById('translateButton');
const inputText = document.getElementById('inputText');
const translatedText = document.getElementById('translatedText');
const languageSelect = document.getElementById('languageSelect');
const translatedBox = document.getElementById('translatedBox');

translateButton.addEventListener('click', async () => {
    const text = inputText.value;
    const lang = languageSelect.value;

    if (text) {
        try {
            const response = await axios.post('https://api.mymemory.translated.net/get', null, {
                params: {
                    q: text,
                    langpair: `en|${lang}`
                }
            });
            const translated = response.data.responseData.translatedText;
            translatedText.innerText = translated;
            updateARBox(translated);
        } catch (error) {
            console.error('Error during translation:', error);
        }
    }
});

function updateARBox(text) {
    translatedBox.setAttribute('scale', '2 2 2');
    translatedBox.setAttribute('color', '#4CC3D8');
    translatedBox.setAttribute('text', `value: ${text}; color: white; align: center;`);
}
