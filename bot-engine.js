const CRUMB_ICONS = {
  "Inicio": "🏠",
  "Sobre VocaBot": "🤖",
  "Creadores": "👥",
  "Objetivos": "🎯",
  "Cómo se usa": "🛠️",
  "Tu aporte": "💬",
  "Conocerse": "🧠",
  "¿Por qué?": "❓",
  "Proyectar-te": "🧭",
  "Informarse": "📚",
  "Oferta académica": "🎓",
  "Universidades": "🏛️",
  "Futuro laboral": "💼",
  "Decidirse": "⚖️",
  "Investigación": "🔬",
  "Problema": "❗",
  "Metodología": "📊",
};

function createBot(chatBodyEl, menuAreaEl, breadcrumbEl) {
  function addBubble(node, sender) {
    const bubble = document.createElement("div");
    bubble.className = `bubble ${sender}`;
    bubble.textContent = typeof node === "string" ? node : node.message;
    if (node && node.image) {
      const img = document.createElement("img");
      img.src = `assets/${node.image}`;
      img.alt = node.imageCaption || "";
      bubble.appendChild(img);
      if (node.imageCaption) {
        const cap = document.createElement("span");
        cap.className = "bubble-caption";
        cap.textContent = node.imageCaption;
        bubble.appendChild(cap);
      }
    }
    chatBodyEl.appendChild(bubble);
    chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.className = "bubble bot typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    chatBodyEl.appendChild(typing);
    chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
    return typing;
  }

  function renderMenu(options) {
    menuAreaEl.innerHTML = "";
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "menu-btn" + (opt.label.startsWith("⬅") || opt.label.startsWith("🏠") ? " secondary" : "");
      btn.textContent = opt.label;
      btn.onclick = () => goTo(opt.goto, opt.label);
      menuAreaEl.appendChild(btn);
    });
  }

  function renderBreadcrumb(crumb) {
    if (!breadcrumbEl) return;
    if (!crumb || crumb.length < 2) {
      breadcrumbEl.classList.add("hidden");
      return;
    }
    breadcrumbEl.classList.remove("hidden");
    breadcrumbEl.innerHTML = crumb
      .map((c, i) => {
        const icon = CRUMB_ICONS[c] || "•";
        return `<span class="crumb${i === crumb.length - 1 ? " current" : ""}" title="${c}">${icon}</span>`;
      })
      .join('<span class="crumb-sep">›</span>');
  }

  function goTo(nodeId, chosenLabel) {
    if (chosenLabel) addBubble(chosenLabel, "user");
    const node = TREE[nodeId];
    if (!node) return;
    menuAreaEl.innerHTML = "";
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addBubble(node, "bot");
      renderMenu(node.options);
      renderBreadcrumb(node.crumb);
    }, 550);
  }

  return { start: () => goTo("start") };
}
