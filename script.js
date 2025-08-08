(function(){
  const SECRET = "rooney red"; // case-insensitive match
  const input = document.getElementById('secret');
  const unlock = document.getElementById('unlock-btn');
  const veil = document.getElementById('password-veil');
  const revealed = document.getElementById('password-revealed');
  const hint = document.getElementById('hint');
  const copyBtn = document.getElementById('copy-btn');
  const printBtn = document.getElementById('print-btn');
  const qrBtn = document.getElementById('qr-btn');
  const sfx = document.getElementById('sfx-mail');
  const pwd = document.getElementById('wifi-password');

  function normalize(s){ return (s||'').trim().toLowerCase(); }

  function reveal(){
    veil.classList.add('hidden');
    revealed.classList.remove('hidden');
    hint.textContent = "Unlocked.";
    try { sfx.currentTime = 0; sfx.play().catch(()=>{}); } catch(e){}
  }

  unlock.addEventListener('click', () => {
    if (normalize(input.value) === SECRET){
      reveal();
    } else {
      hint.textContent = "Nope. (Hint: golden retriever + color.)";
      input.focus();
      input.select();
    }
  });

  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){ unlock.click(); }
  });

  copyBtn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(pwd.textContent);
      hint.textContent = "Copied ✓";
    }catch(e){
      hint.textContent = "Could not copy. Select and copy manually.";
    }
  });

  printBtn.addEventListener('click', () => window.print());

  qrBtn.addEventListener('click', () => {
    alert([
      "QR tips:",
      "• Point your QR code at this page's URL.",
      "• To change the password later, edit index.html and push to GitHub.",
      "• Phones will load this page and reveal after the code is entered."
    ].join("\n"));
  });
})();