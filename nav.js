document.addEventListener("DOMContentLoaded", function() {
    const nav = document.createElement('nav');
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.backgroundColor = '#f1f1f1';
    nav.style.padding = '10px';
    nav.style.textAlign = 'center';
    nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

    const backBtn = document.createElement('button');
    backBtn.innerText = 'Orqaga';
    backBtn.onclick = function() { window.history.back(); };
    backBtn.style.padding = '10px 20px';
    backBtn.style.fontSize = '16px';
    backBtn.style.cursor = 'pointer';

    nav.appendChild(backBtn);
    document.body.appendChild(nav);
});
