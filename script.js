document.addEventListener('DOMContentLoaded', () => {
    fetch('wishes.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('grid');
            
            data.forEach(wish => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                const gifHtml = wish.gif ? `<img src="${wish.gif}" class="card-gif" alt="gif">` : '';

                const avatarUrl = wish.avatar ? wish.avatar : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(wish.name)}`;

                const messageText = wish.message ? wish.message : "";

                card.innerHTML = `
                    <div class="card-header">
                        <img src="${avatarUrl}" class="avatar" alt="${wish.name}">
                        <div class="author-name">${wish.name}</div>
                    </div>
                    <div class="message">${messageText}</div>
                    ${gifHtml}
                `;
                
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading wishes:', error));
});
