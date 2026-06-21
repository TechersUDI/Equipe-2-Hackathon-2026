/* ============================================================
   NUTRI4KIDS — SCRIPT
   Catálogo, filtros, carrinho (localStorage), drawers, carrossel
   e geração da mensagem de pedido para o WhatsApp.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     CONFIGURAÇÃO — número de WhatsApp facilmente editável
  ---------------------------------------------------------- */
  const WHATSAPP_NUMBER = '5534997232984'; // (34) 99723-2984

  /* ----------------------------------------------------------
     DADOS DE EXEMPLO DO CARDÁPIO
     (substituir futuramente pelos produtos reais da Nutri4Kids)
  ---------------------------------------------------------- */
  const PRODUCTS = [
    { id: 'l1', name: 'Bolacha Trackinas Saudável', category: 'lanches', desc: 'Versão caseira e sem açúcar refinado do clássico que toda criança ama.', price: 8.90, icon: '🍪', tags: ['sem-acucar', 'sem-lactose', 'vegetariano'] },
    { id: 'l2', name: 'Pão com Carne Moída', category: 'lanches', desc: 'Pão integral fofinho recheado com carne moída temperada na medida certa.', price: 15.90, icon: '🥖', tags: ['contem-gluten'] },
    { id: 'l3', name: 'Sanduíche Natural', category: 'lanches', desc: 'Pão de fôrma natural, frango desfiado e legumes frescos. O queridinho dos pequenos.', price: 14.90, icon: '🥪', tags: ['contem-gluten', 'mais-vendido'], badge: 'mais-vendido' },
    { id: 'l4', name: 'Empada de Frango', category: 'lanches', desc: 'Massa leve e recheio cremoso de frango, assada e sem fritura.', price: 12.90, icon: '🥧', tags: ['contem-gluten'] },
    { id: 'l5', name: 'Brownie Saudável', category: 'lanches', desc: 'Chocolate de verdade, adoçado naturalmente e sem glúten. Favorito da criançada.', price: 9.90, icon: '🍫', tags: ['sem-acucar', 'sem-gluten', 'vegetariano'], badge: 'favorito-criancas' },
    { id: 'l6', name: 'Salada de Frutas', category: 'lanches', desc: 'Mix colorido de frutas da estação, fresquinho e sem adição de açúcar.', price: 13.90, icon: '🥗', tags: ['sem-acucar', 'sem-lactose', 'sem-gluten', 'vegetariano'] },

    { id: 'f1', name: 'Banana', category: 'frutas', desc: 'Fonte natural de energia, perfeita para o lanche da tarde.', price: 4.90, icon: '🍌', tags: ['sem-acucar', 'sem-lactose', 'sem-gluten', 'vegetariano', 'mais-vendido'], badge: 'mais-vendido' },
    { id: 'f2', name: 'Maçã', category: 'frutas', desc: 'Crocante, doce na medida e rica em fibras.', price: 5.90, icon: '🍎', tags: ['sem-acucar', 'sem-lactose', 'sem-gluten', 'vegetariano'] },
    { id: 'f3', name: 'Manga', category: 'frutas', desc: 'Polpa suculenta e adocicada, sucesso garantido com as crianças.', price: 6.90, icon: '🥭', tags: ['sem-acucar', 'sem-lactose', 'sem-gluten', 'vegetariano'] },
    { id: 'f4', name: 'Mexerica', category: 'frutas', desc: 'Fácil de descascar e cheia de vitamina C.', price: 4.90, icon: '🍊', tags: ['sem-acucar', 'sem-lactose', 'sem-gluten', 'vegetariano'] },

    { id: 's1', name: 'Suco de Uva', category: 'sucos', desc: 'Uvas selecionadas, sem adição de açúcar ou conservantes.', price: 8.90, icon: '🍇', tags: ['sem-lactose', 'sem-gluten', 'vegetariano'] },
    { id: 's2', name: 'Suco de Morango', category: 'sucos', desc: 'Refrescante e naturalmente doce, um dos preferidos das crianças.', price: 9.90, icon: '🍓', tags: ['sem-lactose', 'sem-gluten', 'vegetariano', 'mais-vendido'], badge: 'mais-vendido' },
    { id: 's3', name: 'Suco de Laranja', category: 'sucos', desc: 'Espremido na hora, puro e rico em vitamina C.', price: 7.90, icon: '🍊', tags: ['sem-lactose', 'sem-gluten', 'vegetariano'] },
    { id: 's4', name: 'Suco de Maracujá', category: 'sucos', desc: 'Equilíbrio perfeito entre doce e azedinho, sem açúcar adicionado.', price: 8.90, icon: '🟡', tags: ['sem-lactose', 'sem-gluten', 'vegetariano'] },
  ];

  const TAG_LABELS = {
    'sem-acucar': 'Sem açúcar',
    'sem-lactose': 'Sem lactose',
    'sem-gluten': 'Sem glúten',
    'contem-gluten': 'Contém glúten',
    'vegetariano': 'Vegetariano',
  };

  const BADGE_LABELS = {
    'mais-vendido': 'Mais Pedido',
    'favorito-criancas': 'Favorito das Crianças',
  };

  const money = (n) => n.toFixed(2).replace('.', ',');

  /* ----------------------------------------------------------
     ESTADO
  ---------------------------------------------------------- */
  let cart = loadCart();
  let activeCategory = 'todos';
  let activeFilters = new Set();

  /* ----------------------------------------------------------
     CARRINHO — persistência via localStorage
  ---------------------------------------------------------- */
  function loadCart() {
    try {
      const raw = localStorage.getItem('nutri4kids_cart');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('nutri4kids_cart', JSON.stringify(cart));
    } catch (e) { /* silencioso: localStorage indisponível */ }
  }

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCart();
    pulseCartIcon();
  }

  function changeQty(id, delta) {
    if (!cart[id]) return;
    cart[id] += delta;
    if (cart[id] <= 0) delete cart[id];
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    delete cart[id];
    saveCart();
    renderCart();
  }

  function cartTotals() {
    let items = 0, total = 0;
    Object.entries(cart).forEach(([id, qty]) => {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) return;
      items += qty;
      total += qty * p.price;
    });
    return { items, total };
  }

  function pulseCartIcon() {
    const btn = document.querySelector('.cart-btn');
    if (!btn) return;
    btn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }],
      { duration: 320, easing: 'ease-out' }
    );
  }

  function renderCart() {
    const body = document.getElementById('cartBody');
    const { items, total } = cartTotals();

    document.querySelectorAll('.cart-count').forEach((el) => { el.textContent = items; });

    if (items === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>
          <p>Seu carrinho está vazio.<br>Que tal dar uma olhada no cardápio?</p>
        </div>`;
    } else {
      body.innerHTML = Object.entries(cart).map(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        if (!p) return '';
        return `
        <div class="cart-item" data-id="${id}">
          <div class="cart-item-photo">${p.icon}</div>
          <div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">R$ ${money(p.price)} / un.</div>
          </div>
          <div class="cart-item-actions">
            <button class="remove-btn" data-action="remove" aria-label="Remover ${p.name}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0-1 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 6"/></svg>
            </button>
            <div class="qty-stepper">
              <button data-action="dec" aria-label="Diminuir quantidade">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14"/></svg>
              </button>
              <span>${qty}</span>
              <button data-action="inc" aria-label="Aumentar quantidade">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
          </div>
        </div>`;
      }).join('');
    }

    document.getElementById('cartItemsCount').textContent = items;
    document.getElementById('cartTotal').textContent = `R$ ${money(total)}`;

    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.disabled = items === 0;
    checkoutBtn.style.opacity = items === 0 ? '.5' : '1';
    checkoutBtn.style.pointerEvents = items === 0 ? 'none' : 'auto';
  }

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.cart-item');
    if (!item) return;
    const id = item.dataset.id;
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'inc') changeQty(id, 1);
    if (action === 'dec') changeQty(id, -1);
    if (action === 'remove') removeFromCart(id);
  });

  /* ----------------------------------------------------------
     MENSAGEM PARA O WHATSAPP — formato otimizado para a cozinha
  ---------------------------------------------------------- */
  function buildWhatsAppMessage() {
    const { items, total } = cartTotals();
    let lines = ['Olá, gostaria de fazer o seguinte pedido:', '', 'ITENS:', ''];

    Object.entries(cart).forEach(([id, qty]) => {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) return;
      lines.push(`• ${qty}x ${p.name} - R$ ${money(qty * p.price)}`);
    });

    lines.push('', `TOTAL DE ITENS: ${items}`, '', `VALOR TOTAL: R$ ${money(total)}`);
    return lines.join('\n');
  }

  function checkout() {
    const { items } = cartTotals();
    if (items === 0) return;
    const msg = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  }

  /* ----------------------------------------------------------
     CARDÁPIO — render + filtros
  ---------------------------------------------------------- */
  function matchesFilters(product) {
    if (activeCategory !== 'todos' && product.category !== activeCategory) return false;
    if (activeFilters.size === 0) return true;
    for (const f of activeFilters) {
      if (f === 'lanches' || f === 'frutas' || f === 'sucos') {
        if (product.category !== f) return false;
      } else if (!product.tags.includes(f)) {
        return false;
      }
    }
    return true;
  }

  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const empty = document.getElementById('menuEmpty');
    const visible = PRODUCTS.filter(matchesFilters);

    empty.classList.toggle('show', visible.length === 0);

    grid.innerHTML = visible.map((p, i) => `
      <article class="product-card" style="animation-delay:${Math.min(i, 8) * 0.05}s">
        <div class="product-photo cat-${p.category}">
          ${p.badge ? `<span class="product-badge ${p.badge === 'favorito-criancas' ? 'fav' : ''}">${BADGE_LABELS[p.badge]}</span>` : ''}
          <span aria-hidden="true">${p.icon}</span>
          <div class="product-tags">
            ${p.tags.filter(t => TAG_LABELS[t]).slice(0, 2).map(t => `<span class="tag-pill">${TAG_LABELS[t]}</span>`).join('')}
          </div>
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-foot">
            <span class="price">R$ ${money(p.price)}</span>
            <button class="add-btn" data-add="${p.id}" aria-label="Adicionar ${p.name} ao carrinho">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) addToCart(addBtn.dataset.add);
  });

  // abas de categoria
  document.querySelectorAll('.menu-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  /* ----------------------------------------------------------
     DRAWER DE FILTROS
  ---------------------------------------------------------- */
  function updateFilterCount() {
    document.getElementById('filterNum').textContent = activeFilters.size;
  }

  document.querySelectorAll('.filter-option input').forEach((input) => {
    input.addEventListener('change', () => {
      if (input.checked) activeFilters.add(input.value);
      else activeFilters.delete(input.value);
      updateFilterCount();
      renderMenu();
    });
  });

  document.getElementById('clearFilters').addEventListener('click', () => {
    activeFilters.clear();
    document.querySelectorAll('.filter-option input').forEach((i) => { i.checked = false; });
    updateFilterCount();
    renderMenu();
  });

  /* ----------------------------------------------------------
     DRAWERS — abrir / fechar (carrinho e filtros)
  ---------------------------------------------------------- */
  const overlay = document.getElementById('overlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const filterDrawer = document.getElementById('filterDrawer');
  const mobileNav = document.getElementById('mobileNav');

  function closeAllPanels() {
    cartDrawer.classList.remove('open');
    filterDrawer.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openPanel(panel) {
    closeAllPanels();
    panel.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('[data-open="cart"]').forEach((el) => el.addEventListener('click', () => openPanel(cartDrawer)));
  document.querySelectorAll('[data-open="filters"]').forEach((el) => el.addEventListener('click', () => openPanel(filterDrawer)));
  document.querySelectorAll('[data-open="mobile-nav"]').forEach((el) => el.addEventListener('click', () => openPanel(mobileNav)));
  document.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeAllPanels));
  overlay.addEventListener('click', closeAllPanels);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllPanels(); });

  // fecha o menu mobile ao clicar em um link
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeAllPanels));

  document.getElementById('checkoutBtn').addEventListener('click', checkout);

  /* ----------------------------------------------------------
     HEADER — efeito ao rolar
  ---------------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     CARROSSEL DE DEPOIMENTOS
  ---------------------------------------------------------- */
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const slides = track ? track.children.length : 0;
  let current = 0;
  let autoTimer;

  function goToSlide(i) {
    current = (i + slides) % slides;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, idx) => d.classList.toggle('active', idx === current));
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goToSlide(current + 1), 5500);
  }

  if (track && slides > 0) {
    for (let i = 0; i < slides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
      dot.addEventListener('click', () => { goToSlide(i); startAuto(); });
      dotsWrap.appendChild(dot);
    }
    document.getElementById('carouselPrev').addEventListener('click', () => { goToSlide(current - 1); startAuto(); });
    document.getElementById('carouselNext').addEventListener('click', () => { goToSlide(current + 1); startAuto(); });
    startAuto();
  }

  /* ----------------------------------------------------------
     SCROLL SUAVE PARA O HEADER (links internos)
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----------------------------------------------------------
     ANIMAÇÃO FADE-IN AO ENTRAR NA TELA
  ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ----------------------------------------------------------
     INICIALIZAÇÃO
  ---------------------------------------------------------- */
  renderMenu();
  renderCart();
  updateFilterCount();
})();
