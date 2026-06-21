
/* ============================================================
   DATA - ATUALIZADO: Trocado 'emoji' por 'image'
   ============================================================ */
// IMPORTANTE: Crie a pasta img/produtos/ e coloque as imagens lá, 
// ou atualize os caminhos abaixo para onde suas imagens estão.
const PRODUCTS = [
  { id:1,  name:'Bolacha Trackinas Saudável', price:8.90,  category:'lanches', image:'img/bolacha.jpeg', desc:'Biscoito integral saboroso, sem açúcar refinado. Perfeito para o lanche da tarde.', badges:['Mais Pedido'], tags:['semAcucar','semLactose','maisVendidos','lanches'], nutri:{ cal:120, prot:3, carb:22, fibra:4, acucar:2, lactose:false, gluten:false, tracosGluten:false } },
  { id:2,  name:'Pão com Carne Moída',       price:15.90, category:'lanches', image:'img/paocomcarne.jfif', desc:'Pão artesanal recheado com carne moída temperada. Rico em proteínas para seu filho crescer.', badges:['Favorito das Crianças'], tags:['maisVendidos','lanches'], nutri:{ cal:280, prot:16, carb:30, fibra:2, acucar:3, lactose:false, gluten:true, tracosGluten:false } },
  { id:3,  name:'Sanduíche Natural',          price:14.90, category:'lanches', image:'img/sanduiche.jfif', desc:'Pão integral com recheio fresco, leve e nutritivo. O queridinho dos pais e das crianças!', badges:['Mais Pedido'], tags:['maisVendidos','lanches'], nutri:{ cal:230, prot:12, carb:28, fibra:5, acucar:3, lactose:false, gluten:true, tracosGluten:false } },
  { id:4,  name:'Empada de Frango',           price:12.90, category:'lanches', image:'img/empadadefrango.png', desc:'Empada caseira com frango desfiado e temperos naturais. Deliciosa e sem conservantes.', badges:[], tags:['lanches','tracosGluten'], nutri:{ cal:210, prot:10, carb:24, fibra:1, acucar:2, lactose:false, gluten:false, tracosGluten:true } },
  { id:5,  name:'Brownie Saudável',           price:9.90,  category:'lanches', image:'img/brownie.png', desc:'Brownie de cacau com aveia e sem açúcar refinado. Crianças amam — pais aprovam!', badges:['Favorito das Crianças'], tags:['semAcucar','lanches'], nutri:{ cal:180, prot:5, carb:20, fibra:6, acucar:4, lactose:false, gluten:false, tracosGluten:true } },
  { id:6,  name:'Salada de Frutas',           price:13.90, category:'lanches', image:'img/saladadefruta.png', desc:'Mistura colorida de frutas da estação, fresquinha e sem adição de açúcar.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','lanches'], nutri:{ cal:95, prot:1, carb:22, fibra:4, acucar:12, lactose:false, gluten:false, tracosGluten:false } },
  { id:7,  name:'Banana',                     price:4.90,  category:'frutas',  image:'img/banana.png', desc:'Banana madura e doce, rica em potássio e energia natural para seu filho.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','frutas'], nutri:{ cal:89, prot:1, carb:23, fibra:3, acucar:12, lactose:false, gluten:false, tracosGluten:false } },
  { id:8,  name:'Maçã',                       price:5.90,  category:'frutas',  image:'img/maça.png', desc:'Maçã crocante e suculenta. Fonte de fibras e vitaminas essenciais para as crianças.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','frutas'], nutri:{ cal:72, prot:0, carb:19, fibra:2, acucar:14, lactose:false, gluten:false, tracosGluten:false } },
  { id:9,  name:'Manga',                      price:6.90,  category:'frutas',  image:'img/manga.png', desc:'Manga selecionada, cheia de sabor tropical e vitamina A.', badges:['Favorito das Crianças'], tags:['semAcucar','semLactose','semGluten','vegetariano','frutas'], nutri:{ cal:99, prot:1, carb:25, fibra:3, acucar:22, lactose:false, gluten:false, tracosGluten:false } },
  { id:10, name:'Mexerica',                   price:4.90,  category:'frutas',  image:'img/mexerica.png', desc:'Mexerica fresca e fácil de descascar, rica em vitamina C para a imunidade.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','frutas'], nutri:{ cal:53, prot:1, carb:13, fibra:2, acucar:10, lactose:false, gluten:false, tracosGluten:false } },
  { id:11, name:'Suco de Uva',               price:8.90,  category:'sucos',   image:'img/suco-uva.png', desc:'Suco integral de uva, sem adição de açúcar. Rico em antioxidantes naturais.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','sucos'], nutri:{ cal:70, prot:1, carb:17, fibra:0, acucar:16, lactose:false, gluten:false, tracosGluten:false } },
  { id:12, name:'Suco de Morango',           price:9.90,  category:'sucos',   image:'img/suco-morango.png', desc:'Suco natural de morango, fresquinho e sem conservantes. Sucesso garantido!', badges:['Mais Pedido'], tags:['semAcucar','semLactose','semGluten','vegetariano','maisVendidos','sucos'], nutri:{ cal:49, prot:1, carb:12, fibra:1, acucar:9, lactose:false, gluten:false, tracosGluten:false } },
  { id:13, name:'Suco de Laranja',           price:7.90,  category:'sucos',   image:'img/suco-laranja.png', desc:'Laranja espremida na hora, fonte natural de vitamina C e energia para o dia.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','sucos'], nutri:{ cal:58, prot:1, carb:13, fibra:0, acucar:9, lactose:false, gluten:false, tracosGluten:false } },
  { id:14, name:'Suco de Maracujá',          price:8.90,  category:'sucos',   image:'img/suco-maracuja.png', desc:'Maracujá natural, levemente adocicado. Calmante e delicioso para as crianças.', badges:[], tags:['semAcucar','semLactose','semGluten','vegetariano','sucos'], nutri:{ cal:60, prot:1, carb:14, fibra:1, acucar:11, lactose:false, gluten:false, tracosGluten:false } },
  { id: 15, name: 'Waffle com Mel', price: 11.90, category: 'lanches', image: 'img/waffle-mel.png', desc: 'Waffle macio preparado com ingredientes naturais e coberto com mel puro.', badges: ['Favorito das Crianças'], tags: ['vegetariano', 'lanches'], nutri: { cal: 220, prot: 5, carb: 38, fibra: 2, acucar: 12, lactose: false, gluten: true, tracosGluten: false } },
  { id: 16, name: 'Melancia', price: 5.90, category: 'frutas', image: 'img/melancia.png', desc: 'Melancia fresca, refrescante e rica em hidratação para os pequenos.', badges: [], tags: ['semAcucar', 'semLactose', 'semGluten', 'vegetariano', 'frutas'], nutri: { cal: 30, prot: 1, carb: 8, fibra: 1, acucar: 6, lactose: false, gluten: false, tracosGluten: false } },
  { id: 17, name: 'Pão de Batata com Patê de Frango', price: 14.90, category: 'lanches', image: 'img/pao-batata-frango.png', desc: 'Pão de batata macio recheado com patê de frango caseiro rico em proteínas.', badges: ['Mais Pedido'], tags: ['maisVendidos', 'lanches'], nutri: { cal: 260, prot: 14, carb: 32, fibra: 2, acucar: 3, lactose: false, gluten: true, tracosGluten: false } },
  { id: 18, name: 'Bolo de Ninho', price: 10.90, category: 'lanches', image: 'img/bolo-ninho.png', desc: 'Bolo fofinho sabor leite ninho, preparado com ingredientes selecionados.', badges: ['Favorito das Crianças'], tags: ['lanches'], nutri: { cal: 240, prot: 6, carb: 35, fibra: 1, acucar: 14, lactose: true, gluten: true, tracosGluten: false } },
  { id: 19, name: 'Mini Pizza', price: 13.90, category: 'lanches', image: 'img/pizza.png', desc: 'Mini pizza assada com molho de tomate natural e queijo. Um sucesso entre as crianças.', badges: ['Favorito das Crianças', 'Mais Pedido'], tags: ['maisVendidos', 'lanches'], nutri: { cal: 250, prot: 10, carb: 30, fibra: 2, acucar: 4, lactose: true, gluten: true, tracosGluten: false } },
  { id: 20, name: 'Bolo de Beterraba', price: 9.90, category: 'lanches', image: 'img/bolo-beterraba.png', desc: 'Bolo nutritivo de beterraba, macio e naturalmente colorido.', badges: [], tags: ['vegetariano', 'lanches'], nutri: { cal: 190, prot: 4, carb: 28, fibra: 3, acucar: 8, lactose: false, gluten: true, tracosGluten: false } },
  { id: 21, name: 'Cookies Saudáveis', price: 8.90, category: 'lanches', image: 'img/cookies.png', desc: 'Cookies integrais com aveia e gotas de chocolate, sem açúcar refinado.', badges: ['Favorito das Crianças'], tags: ['semAcucar', 'lanches'], nutri: { cal: 160, prot: 4, carb: 22, fibra: 4, acucar: 3, lactose: false, gluten: false, tracosGluten: true } },
];

const TESTIMONIALS = [
  { name:'Camila Rodrigues', role:'Mãe do Bernardo, 6 anos', text:'Meu filho adorou os lanches e eu ganhei muito mais praticidade na rotina. Não imagino mais a semana sem a Nutri4Kids!', emoji:'👩' },
  { name:'Rafael Souza',     role:'Pai da Valentina, 8 anos', text:'A qualidade dos produtos é incrível. A gente sente que foi feito com carinho. Minha filha pede sempre o Brownie Saudável.', emoji:'👨' },
  { name:'Fernanda Lima',    role:'Mãe do Enzo, 5 anos e Ana, 9 anos', text:'Tenho dois filhos com preferências diferentes e a Nutri4Kids atende os dois muito bem. O atendimento é nota 10!', emoji:'👩' },
  { name:'Gustavo Martins',  role:'Pai do Pedro, 7 anos', text:'Minha preocupação com alimentação do meu filho diminuiu muito. Sei que ele está comendo bem mesmo nos dias mais corridos.', emoji:'👨' },
  { name:'Juliana Costa',    role:'Mãe da Sofia, 4 anos', text:'A Nutri4Kids foi a solução que eu precisava. Rápido, saudável e minha filha ama. O Suco de Morango é o favorito dela!', emoji:'👩' },
  { name:'Marcelo Alves',    role:'Pai do Lucas, 10 anos', text:'Produto de altíssima qualidade. Percebi que meu filho está mais disposto na escola desde que começamos a pedir. Recomendo!', emoji:'👨' },
];

const DAYS = ['Segunda','Terça','Quarta','Quinta','Sexta'];

/* ============================================================
   STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('n4k_cart') || '[]');
let activeFilters = new Set();
let searchTerm = '';
let slideIndex = 0;
let weekPlan = JSON.parse(localStorage.getItem('n4k_week') || JSON.stringify(DAYS.map(d => ({ day:d, fruta:null, lanche:null, bebida:null }))));
let weekPickerState = null; // {dayIndex, slotType}

/* ============================================================
   HEADER SCROLL
   ============================================================ */
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if(h) h.classList.toggle('scrolled', window.scrollY > 60);
});

/* ============================================================
   SCROLL ANIMATION (fade-in)
   ============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString('pt-BR');
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

/* ============================================================
   TIMELINE OBSERVER
   ============================================================ */
const tlObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); tlObs.unobserve(e.target); } });
}, { threshold: 0.3 });
document.querySelectorAll('.tl-item').forEach((el, i) => {
  setTimeout(() => tlObs.observe(el), i * 100);
});

/* ============================================================
   PRODUCTS - ATUALIZADO: Usando tag img
   ============================================================ */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if(!grid) return;
  
  let filtered = PRODUCTS.filter(p => {
    const matchSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilters = activeFilters.size === 0 || [...activeFilters].every(f => p.tags.includes(f));
    return matchSearch && matchFilters;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="icon">🔍</div><p>Nenhum produto encontrado.<br><small>Tente outros filtros ou termos.</small></p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card fade-in" onclick="openNutri(${p.id})">
      <div class="product-img">
        <div class="product-badges">${p.badges.map(b => `<span class="badge ${b === 'Mais Pedido' ? 'badge-hot' : 'badge-fav'}">${b === 'Mais Pedido' ? '🔥' : '⭐'} ${b}</span>`).join('')}</div>
        <!-- Trocado emoji por imagem -->
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
          <button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id})" title="Adicionar ao carrinho">+</button>
        </div>
      </div>
    </div>
  `).join('');

  // re-observe new fade-in elements
  grid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function filterProducts() {
  const input = document.getElementById('search-input');
  if(input) searchTerm = input.value;
  renderProducts();
}

function toggleFilter(el) {
  const f = el.dataset.filter;
  if (activeFilters.has(f)) { activeFilters.delete(f); el.classList.remove('active'); }
  else                        { activeFilters.add(f);    el.classList.add('active'); }
  renderProducts();
  updateFilterBadge();
}

function updateFilterBadge() {
  const badge = document.getElementById('fc-badge');
  if (badge) {
    badge.textContent = activeFilters.size;
    badge.style.display = activeFilters.size > 0 ? 'inline-flex' : 'none';
  }
}

function clearFilters() {
  activeFilters.clear();
  document.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));
  renderProducts();
  updateFilterBadge();
}

/* ============================================================
   CART - ATUALIZADO: Usando tag img
   ============================================================ */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCartUI();
  animateCartBtn();
  showRecommendation(p);
}

function saveCart() { localStorage.setItem('n4k_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  const countEl = document.getElementById('cart-count');
  if(countEl) {
      countEl.textContent = count;
      countEl.classList.toggle('show', count > 0);
  }
  renderCart();
}

function renderCart() {
  const body   = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if(!body || !footer) return;

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><p style="font-weight:700;font-size:1rem;">Seu carrinho está vazio</p><p style="font-size:.85rem;margin-top:8px;color:var(--gray-400);">Adicione itens do cardápio para começar seu pedido.</p></div>`;
    footer.style.display = 'none';
    return;
  }

  let total = 0;
  body.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const sub = p.price * item.qty;
    total += sub;
    return `
      <div class="cart-item">
        <!-- Trocado emoji por imagem -->
        <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">R$ ${p.price.toFixed(2).replace('.',',')} un</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
            <span class="remove-item" onclick="removeItem(${item.id})">🗑️ Remover</span>
          </div>
        </div>
        <div style="font-size:.9rem;font-weight:800;color:var(--green-600);flex-shrink:0;padding-top:8px;">R$ ${sub.toFixed(2).replace('.',',')}</div>
      </div>`;
  }).join('');

  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  if(subtotalEl) subtotalEl.textContent = `R$ ${total.toFixed(2).replace('.',',')}`;
  if(totalEl) totalEl.textContent    = `R$ ${total.toFixed(2).replace('.',',')}`;
  footer.style.display = 'block';
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function animateCartBtn() {
  const btn = document.querySelector('.cart-btn');
  if(!btn) return;
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => btn.style.transform = '', 300);
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const name    = document.getElementById('customer-name').value.trim();
  const address = document.getElementById('customer-address').value.trim();

  if (!name) {
    alert('Por favor, informe seu nome antes de finalizar.');
    document.getElementById('customer-name').focus();
    return;
  }
  if (!address) {
    alert('Por favor, informe seu endereço antes de finalizar.');
    document.getElementById('customer-address').focus();
    return;
  }

  let msg = `Olá, gostaria de fazer o seguinte pedido:\n\n`;
  msg += `*CLIENTE:* ${name}\n`;
  msg += `*ENDEREÇO:* ${address}\n\n`;
  msg += `*ITENS:*\n\n`;

  let total = 0;
  let totalItems = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const sub = p.price * item.qty;
    total += sub;
    totalItems += item.qty;
    msg += `• ${item.qty}x ${p.name} - R$ ${sub.toFixed(2).replace('.',',')}\n`;
  });

  msg += `\n*TOTAL DE ITENS:* ${totalItems}`;
  msg += `\n*VALOR TOTAL:* R$ ${total.toFixed(2).replace('.',',')}`;

  window.open(`https://wa.me/5534997232984?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================================
   RECOMMENDATIONS
   ============================================================ */
const RECOMMENDATIONS = {
  lanches: { title:'🥤 Que tal uma bebida?', msg:'Combina perfeitamente com um suco natural fresquinho!', icon:'🥤' },
  frutas:  { title:'🍫 Adicione um docinho!', msg:'Uma fruta combina muito bem com o Brownie Saudável.', icon:'🍫' },
  sucos:   { title:'🥪 Adicione um lanche!', msg:'O Sanduíche Natural complementa seu pedido perfeitamente.', icon:'🥪' },
};
let recTimeout;
function showRecommendation(product) {
  const rec = RECOMMENDATIONS[product.category];
  if (!rec) return;
  clearTimeout(recTimeout);
  const iconEl = document.getElementById('rec-icon');
  const titleEl = document.getElementById('rec-title');
  const msgEl = document.getElementById('rec-msg');
  const toastEl = document.getElementById('rec-toast');
  
  if(iconEl) iconEl.textContent  = rec.icon;
  if(titleEl) titleEl.textContent = rec.title;
  if(msgEl) msgEl.textContent   = rec.msg;
  if(toastEl) {
      toastEl.classList.add('show');
      recTimeout = setTimeout(() => toastEl.classList.remove('show'), 4000);
  }
}

/* ============================================================
   NUTRI DRAWER - ATUALIZADO: Usando tag img
   ============================================================ */
function openNutri(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const n = p.nutri;
  const bodyEl = document.getElementById('nutri-body');
  if(!bodyEl) return;
  
  const maxVal = { cal:400, prot:30, carb:50, fibra:10, acucar:30 };
  bodyEl.innerHTML = `
    <div class="nutri-header">
      <!-- Trocado emoji por imagem -->
      <img src="${p.image}" alt="${p.name}">
      <div class="nutri-name">${p.name}</div>
      <div class="nutri-price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
      <div class="nutri-desc">${p.desc}</div>
      <div class="nutri-badges">
        <span class="nutri-badge ${n.lactose ? 'no' : 'ok'}">${n.lactose ? '⚠️ Contém lactose' : '✅ Sem lactose'}</span>
        <span class="nutri-badge ${n.gluten  ? 'no' : 'ok'}">${n.gluten  ? '⚠️ Contém glúten' : '✅ Sem glúten'}</span>
        ${n.tracosGluten ? '<span class="nutri-badge no">⚠️ Traços de glúten</span>' : ''}
        ${n.acucar <= 5 ? '<span class="nutri-badge ok">✅ Sem açúcar refinado</span>' : ''}
        ${n.fibra  >= 3 ? '<span class="nutri-badge ok">✅ Fonte de fibras</span>'   : ''}
      </div>
    </div>
    <h4 style="font-size:.8rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--gray-400);margin-bottom:16px;">Informações Nutricionais (por porção)</h4>
    <div class="nutri-macros">
      ${[
        { label:'Calorias', val:`${n.cal} kcal`, max:maxVal.cal, pct:n.cal },
        { label:'Proteínas', val:`${n.prot}g`, max:maxVal.prot, pct:n.prot },
        { label:'Carboidratos', val:`${n.carb}g`, max:maxVal.carb, pct:n.carb },
        { label:'Fibras', val:`${n.fibra}g`, max:maxVal.fibra, pct:n.fibra },
        { label:'Açúcares', val:`${n.acucar}g`, max:maxVal.acucar, pct:n.acucar },
      ].map(m => `
        <div class="macro-row">
          <div class="macro-label">${m.label}</div>
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="macro-bar"><div class="macro-bar-fill" style="width:${Math.min((m.pct/m.max)*100,100)}%"></div></div>
            <div class="macro-val">${m.val}</div>
          </div>
        </div>`).join('')}
    </div>
    <div style="margin-top:24px;">
      <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="addToCart(${p.id});closeAllDrawers();">
        + Adicionar ao Carrinho — R$ ${p.price.toFixed(2).replace('.',',')}
      </button>
    </div>`;
  openDrawer('nutri');
}

/* ============================================================
   SEMANA SEMANAL - ATUALIZADO: Usando tag img
   ============================================================ */
function renderWeekGrid() {
  const grid = document.getElementById('week-grid');
  if(!grid) return;
  grid.innerHTML = weekPlan.map((dayObj, di) => `
    <div class="day-card">
      <div class="day-header">${dayObj.day}</div>
      <div class="day-slots">
        ${['fruta','lanche','bebida'].map(type => {
          const item = dayObj[type] ? PRODUCTS.find(p => p.id === dayObj[type]) : null;
          const icons = { fruta:'🍎', lanche:'🥪', bebida:'🥤' };
          const labels = { fruta:'Fruta', lanche:'Lanche', bebida:'Bebida' };
          // Trocado emoji por imagem no slot preenchido
          const iconContent = item ? `<img src="${item.image}" alt="${item.name}">` : icons[type];
          
          return `<div class="day-slot ${item ? 'filled' : ''}" onclick="openWeekPicker(${di},'${type}')">
            <span class="slot-icon">${iconContent}</span>
            <span class="slot-name">${item ? item.name.split(' ').slice(0,2).join(' ') : '+ '+labels[type]}</span>
            ${item ? `<span class="slot-label">R$ ${item.price.toFixed(2).replace('.',',')}</span>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');
  updateWeekSummary();
}

function openWeekPicker(dayIndex, slotType) {
  weekPickerState = { dayIndex, slotType };
  const labels = { fruta:'uma Fruta', lanche:'um Lanche', bebida:'uma Bebida' };
  const cats   = { fruta:'frutas', lanche:'lanches', bebida:'sucos' };
  const options = PRODUCTS.filter(p => p.category === cats[slotType]);
  
  const titleEl = document.getElementById('week-drawer-title');
  const bodyEl = document.getElementById('weekly-body');
  if(!titleEl || !bodyEl) return;
  
  titleEl.textContent = `${weekPlan[dayIndex].day} — Escolha ${labels[slotType]}`;
  bodyEl.innerHTML = `
    <div class="slot-picker-items">
      <div class="slot-item" onclick="selectWeekItem(null)">
        <span class="slot-item-icon">❌</span>
        <span class="slot-item-name">Nenhum</span>
      </div>
      ${options.map(p => `
        <div class="slot-item ${weekPlan[dayIndex][slotType] === p.id ? 'selected' : ''}" onclick="selectWeekItem(${p.id})">
          <!-- Trocado emoji por imagem no seletor -->
          <span class="slot-item-icon"><img src="${p.image}" alt="${p.name}"></span>
          <div>
            <div class="slot-item-name">${p.name}</div>
            <div style="font-size:.78rem;color:var(--green-600);font-weight:700;">R$ ${p.price.toFixed(2).replace('.',',')}</div>
          </div>
        </div>`).join('')}
    </div>`;
  openDrawer('weekly');
}

function selectWeekItem(productId) {
  if (!weekPickerState) return;
  const { dayIndex, slotType } = weekPickerState;
  weekPlan[dayIndex][slotType] = productId;
  localStorage.setItem('n4k_week', JSON.stringify(weekPlan));
  closeAllDrawers();
  renderWeekGrid();
}

function updateWeekSummary() {
  const summaryEl = document.getElementById('week-summary');
  const contentEl = document.getElementById('week-summary-content');
  if(!summaryEl || !contentEl) return;
  
  const hasAny = weekPlan.some(d => d.fruta || d.lanche || d.bebida);
  if (!hasAny) { summaryEl.classList.remove('show'); return; }
  summaryEl.classList.add('show');
  let total = 0;
  contentEl.innerHTML = weekPlan.map(d => {
    const items = [d.fruta, d.lanche, d.bebida].filter(Boolean).map(id => PRODUCTS.find(p => p.id === id));
    if (!items.length) return '';
    items.forEach(p => total += p.price);
    // Mantido emoji aqui apenas como marcador de texto, não imagem do produto
    const textIcons = { frutas: '🍎', lanches: '🥪', sucos: '🥤' };
    return `<div style="margin-bottom:16px;"><strong>${d.day}:</strong> ${items.map(p => textIcons[p.category] + ' ' + p.name).join(' · ')}</div>`;
  }).join('');
  contentEl.innerHTML += `<div style="border-top:1px solid var(--gray-200);padding-top:12px;font-weight:800;color:var(--green-600);">Total estimado: R$ ${total.toFixed(2).replace('.',',')}</div>`;
}

function clearWeekPlan() {
  weekPlan = DAYS.map(d => ({ day:d, fruta:null, lanche:null, bebida:null }));
  localStorage.setItem('n4k_week', JSON.stringify(weekPlan));
  renderWeekGrid();
}

function sendWeekToWhatsApp() {
  const hasAny = weekPlan.some(d => d.fruta || d.lanche || d.bebida);
  if (!hasAny) { alert('Monte a semana antes de enviar! Clique nos slots para escolher os itens.'); return; }
  let msg = 'Olá! Gostaria de fazer o pedido semanal:\n\n';
  let total = 0;
  const textIcons = { frutas: '🍎', lanches: '🥪', sucos: '🥤' };
  
  weekPlan.forEach(d => {
    const items = [d.fruta, d.lanche, d.bebida].filter(Boolean).map(id => PRODUCTS.find(p => p.id === id));
    if (!items.length) return;
    msg += `*${d.day.toUpperCase()}*\n`;
    items.forEach(p => { msg += `• ${textIcons[p.category]} ${p.name} - R$ ${p.price.toFixed(2).replace('.',',')}\n`; total += p.price; });
    msg += '\n';
  });
  msg += `*TOTAL ESTIMADO: R$ ${total.toFixed(2).replace('.',',')}*`;
  window.open(`https://wa.me/5534997232984?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================================
   SIMULADOR
   ============================================================ */
function calcTime(n) {
  document.querySelectorAll('.sim-option').forEach(el => el.classList.remove('active'));
  const activeOpt = document.querySelector(`.sim-option[data-v="${n}"]`);
  if(activeOpt) activeOpt.classList.add('active');
  
  const times = { 1: [1,45], 2: [3,30], 3: [5,15] };
  const [h, m] = times[n];
  const timeEl = document.getElementById('sim-time');
  if(timeEl) timeEl.textContent = `${h}h ${m}min`;
  
  const extras = {
    1: ['⚡ Mais tempo para descansar', '❤️ Momentos com seu filho'],
    2: ['⚡ Tempo de qualidade a mais', '❤️ Menos estresse na semana'],
    3: ['⚡ Quase meio turno de trabalho!', '❤️ Uma família muito mais tranquila'],
  };
  const extrasEl = document.getElementById('sim-extras');
  if(extrasEl) extrasEl.innerHTML = extras[n].map(e => `<div class="sim-extra">✅ ${e}</div>`).join('');
  
  const resultEl = document.getElementById('sim-result');
  if(resultEl) resultEl.classList.add('show');
}

/* ============================================================
   TESTIMONIALS CAROUSEL
   ============================================================ */
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dots = document.getElementById('carousel-dots');
  if(!track || !dots) return;
  
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <div class="testimonial-text">"${t.text}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.emoji}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>`).join('');

  dots.innerHTML = TESTIMONIALS.map((_, i) => `<div class="carousel-dot ${i===0?'active':''}" onclick="goSlide(${i})"></div>`).join('');
  setSlide(0);
}

function setSlide(index) {
  const track = document.getElementById('testimonials-track');
  if(!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  if(cards.length === 0) return;
  
  const w = cards[0].offsetWidth + 24;
  const maxIndex = Math.max(0, TESTIMONIALS.length - Math.floor(track.parentElement.offsetWidth / w));
  slideIndex = Math.max(0, Math.min(index, maxIndex));
  track.style.transform = `translateX(-${slideIndex * w}px)`;
  document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function nextSlide() { setSlide(slideIndex + 1); }
function prevSlide() { setSlide(slideIndex - 1); }
function goSlide(i) { setSlide(i); }

// auto-play
setInterval(() => { setSlide(slideIndex + 1 >= TESTIMONIALS.length ? 0 : slideIndex + 1); }, 5000);

/* ============================================================
   DRAWERS
   ============================================================ */
function openDrawer(name) {
  closeAllDrawers(false);
  const drawer = document.getElementById(`drawer-${name}`);
  const overlay = document.getElementById('overlay');
  if(drawer) drawer.classList.add('open');
  if(overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAllDrawers(restoreScroll = true) {
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  const overlay = document.getElementById('overlay');
  if(overlay) overlay.classList.remove('open');
  if (restoreScroll) document.body.style.overflow = '';
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMobileMenu() {
  // simple: scroll to top on mobile
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollTo(id) { 
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior:'smooth' }); 
}

/* ============================================================
   MODO DEMO
   ============================================================ */
function runDemo() {
  // clear cart first
  cart = [];
  // add demo items
  [3, 12, 7].forEach(id => { cart.push({ id, qty: id === 3 ? 2 : 1 }); });
  saveCart();
  updateCartUI();
  // set week plan
  weekPlan[0] = { day:'Segunda', fruta:7, lanche:3, bebida:11 };
  weekPlan[1] = { day:'Terça',   fruta:8, lanche:4, bebida:13 };
  localStorage.setItem('n4k_week', JSON.stringify(weekPlan));
  renderWeekGrid();
  // open cart
  setTimeout(() => openDrawer('cart'), 400);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderTestimonials();
  renderWeekGrid();
  updateCartUI();
});

//aaaaaaaaaa


