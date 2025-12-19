document.addEventListener('DOMContentLoaded', () => {
    fetch('wishes.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('grid');
            
            data.forEach(wish => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                // Optional: Check if GIF exists
                const gifHtml = wish.gif ? `<img src="${wish.gif}" class="card-gif" alt="gif">` : '';

                card.innerHTML = `
                    <div class="card-header">
                        <img src="${wish.avatar}" class="avatar" alt="${wish.name}">
                        <div class="author-name">${wish.name}</div>
                    </div>
                    <div class="message">${wish.message}</div>
                    ${gifHtml}
                `;
                
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading wishes:', error));
});
