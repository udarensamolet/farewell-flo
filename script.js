document.addEventListener('DOMContentLoaded', () => {
    fetch('wishes.json')
        .then(response => response.json())
        .then(data => {
            // Target the new timeline container
            const timeline = document.getElementById('timeline');
            
            data.forEach(wish => {
                const card = document.createElement('div');
                card.classList.add('card');

                const gifHtml = wish.gif ? `<img src="${wish.gif}" class="card-gif" alt="gif">` : '';

                const messageText = wish.message ? wish.message : "";

                card.innerHTML = `
                    <div class="card-header">
                        <div class="author-name">${wish.name}</div>
                    </div>
                    <div class="message">${messageText}</div>
                    ${gifHtml}
                `;
                
                timeline.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading wishes:', error));
});
