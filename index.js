// plugins/opgg-button/index.js
const OPGG_BASE = 'https://www.op.gg/summoners/';
const UGG_BASE = 'https://u.gg/lol/profile/';

const UGG_LOGO = 'data:image/jpeg;base64,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';
const OPGG_LOGO = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="%232A4EEF"/><text x="50" y="45" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="white" text-anchor="middle" letter-spacing="-1">OP</text><text x="50" y="70" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="white" text-anchor="middle" letter-spacing="-1">.GG</text></svg>`;

const RANK_COLORS = {
    'IRON': '#7a6a6a',
    'BRONZE': '#a0522d',
    'SILVER': '#a8a8b0',
    'GOLD': '#ffd700',
    'PLATINUM': '#3cb371',
    'EMERALD': '#00c853',
    'DIAMOND': '#00bfff',
    'MASTER': '#9b59b6',
    'GRANDMASTER': '#e74c3c',
    'CHALLENGER': '#f1c40f'
};

const tagCache = new Map();
const rankCache = new Map();
let lastPuuid = null;
let currentRegion = null;
let ownPuuid = null;

// ─────────────────────────────────────────────────────────────
// REGION DETECTION AND MAPPING
// ─────────────────────────────────────────────────────────────
const REGION_MAP_RAW = {
    'EUW': 'euw1', 'NA': 'na1', 'KR': 'kr',
    'EUNE': 'eun1', 'BR': 'br1', 'LAN': 'la1',
    'LAS': 'la2', 'OCE': 'oc1', 'TR': 'tr1',
    'RU': 'ru', 'JP': 'jp1'
};

const ALL_REGIONS = ['euw1', 'na1', 'kr', 'eun1', 'br1', 'la1', 'la2', 'oc1', 'tr1', 'ru', 'jp1'];

function loadSavedRegion() {
    try { return localStorage.getItem('opgg_plugin_region') || null; } catch { return null; }
}

function saveRegion(r) {
    try { localStorage.setItem('opgg_plugin_region', r); } catch {}
}

async function detectRegion() {
    const saved = loadSavedRegion();
    if (saved) {
        currentRegion = saved;
        console.log(`[OP.GG] Region (saved): ${currentRegion}`);
        return;
    }

    try {
        const r = await fetch('/riotclient/region-locale');
        if (r.ok) {
            const d = await r.json();
            const raw = (d.region || '').toUpperCase();
            if (REGION_MAP_RAW[raw]) {
                currentRegion = REGION_MAP_RAW[raw];
                console.log(`[OP.GG] Region (auto): ${currentRegion}`);
                return;
            }
        }
    } catch {}

    try {
        const r = await fetch('/lol-summoner/v1/current-summoner');
        if (r.ok) {
        }
    } catch {}

    currentRegion = 'euw1';
    console.log(`[OP.GG] Region (fallback): ${currentRegion}`);
}

function regionToOpgg(region) {
    const map = {
        'euw1': 'euw', 'na1': 'na', 'kr': 'kr',
        'eun1': 'eune', 'br1': 'br', 'la1': 'lan',
        'la2': 'las', 'oc1': 'oce', 'tr1': 'tr', 'ru': 'ru', 'jp1': 'jp'
    };
    return map[region] || 'euw';
}

function regionToUgg(region) {
    return region || 'euw1';
}

// ─────────────────────────────────────────────────────────────
// LOGGED IN PLAYER
// ─────────────────────────────────────────────────────────────
async function fetchOwnPuuid() {
    if (ownPuuid) return ownPuuid;
    try {
        const r = await fetch('/lol-summoner/v1/current-summoner');
        if (!r.ok) return null;
        const d = await r.json();
        ownPuuid = d.puuid || null;
        console.log(`[OP.GG] Own puuid: ${ownPuuid}`);
        return ownPuuid;
    } catch {
        return null;
    }
}

// ─────────────────────────────────────────────────────────────
// VIEWED PUUID
// ─────────────────────────────────────────────────────────────
async function getViewedPuuid() {
    const elements = document.querySelectorAll('lol-regalia-profile-v2-element');

    for (const el of elements) {
        const puuid = el.puuid || el.getAttribute('puuid');
        const isSearched = el.isSearched ?? (el.getAttribute('is-searched') === 'true');
        if (puuid && isSearched) return puuid;
    }

    const own = await fetchOwnPuuid();
    if (own) {
        for (const el of elements) {
            const puuid = el.puuid || el.getAttribute('puuid');
            if (puuid === own) return puuid;
        }
        if (elements.length > 0) return own;
    }

    return null;
}

// ─────────────────────────────────────────────────────────────
// FETCH
// ─────────────────────────────────────────────────────────────
async function fetchRiotId(puuid) {
    if (tagCache.has(puuid)) return tagCache.get(puuid);
    try {
        const r = await fetch(`/lol-summoner/v2/summoners/puuid/${puuid}`);
        if (!r.ok) return null;
        const d = await r.json();
        if (!d.gameName || !d.tagLine) return null;
        const riotId = `${d.gameName}#${d.tagLine}`;
        tagCache.set(puuid, riotId);
        return riotId;
    } catch {
        return null;
    }
}

async function fetchRank(puuid) {
    if (rankCache.has(puuid)) return rankCache.get(puuid);
    try {
        const r = await fetch(`/lol-ranked/v1/ranked-stats/${puuid}`);
        if (!r.ok) return null;
        const d = await r.json();
        if (!d.queueMap || !d.queueMap.RANKED_SOLO_5x5) return null;
        const rank = d.queueMap.RANKED_SOLO_5x5;
        rankCache.set(puuid, rank);
        return rank;
    } catch {
        return null;
    }
}

// ─────────────────────────────────────────────────────────────
// TOOLTIP
// ─────────────────────────────────────────────────────────────
function createTooltip(gameName, tagLine, rank) {
    const tooltip = document.createElement('div');
    const tier = rank ? rank.tier : 'UNRANKED';
    const division = (rank && rank.division !== 'NA') ? rank.division : '';
    const lp = rank ? rank.leaguePoints : 0;
    const wins = rank ? rank.wins : 0;
    const losses = rank ? rank.losses : 0;
    const total = wins + losses;
    const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
    const tierColor = rank ? (RANK_COLORS[rank.tier] || '#c89b3c') : '#c89b3c';
    const rankLabel = division ? `${tier} ${division}` : tier;

    tooltip.innerHTML = `
        <div style="
            position: relative;
            background: linear-gradient(160deg, #0a0a0f 0%, #111118 60%, #0d0d14 100%);
            border: 1px solid #785a28;
            border-top: 2px solid #c89b3c;
            border-radius: 4px;
            padding: 14px 18px 12px;
            min-width: 210px;
            box-shadow: 0 0 0 1px #3d2c0e, 0 8px 40px rgba(0,0,0,0.95), inset 0 1px 0 rgba(200,155,60,0.15);
            font-family: 'BeaufortforLOL', 'Beaufort for LOL', Georgia, serif;
            overflow: hidden;
        ">
            <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${tierColor},transparent);"></div>
            <div style="color:#f0e6d2;font-weight:bold;font-size:14px;letter-spacing:0.04em;margin-bottom:8px;text-shadow:0 0 10px rgba(200,155,60,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                ${gameName}<span style="color:#785a28;font-size:12px;">#${tagLine}</span>
            </div>
            <div style="height:1px;background:linear-gradient(90deg,transparent,#785a28 30%,#785a28 70%,transparent);margin-bottom:8px;"></div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                <span style="color:${tierColor};font-size:13px;font-weight:bold;letter-spacing:0.06em;text-transform:uppercase;text-shadow:0 0 8px ${tierColor}88;">${rankLabel}</span>
                <span style="background:rgba(200,155,60,0.12);border:1px solid #785a28;border-radius:3px;color:#c89b3c;font-size:11px;padding:1px 7px;letter-spacing:0.05em;">${lp} LP</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;font-size:12px;">
                <span style="color:#4fc3a1;">${wins}W</span>
                <span style="color:#555;">/</span>
                <span style="color:#d9503f;">${losses}L</span>
                <span style="color:#555;margin-left:auto;">WR</span>
                <span style="color:${winRate >= 55 ? '#4fc3a1' : winRate >= 50 ? '#c89b3c' : '#d9503f'};font-weight:bold;">${winRate}%</span>
            </div>
            <div style="position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#3d2c0e,transparent);"></div>
        </div>
    `;

    tooltip.setAttribute('data-opgg-tooltip', '1');
    Object.assign(tooltip.style, {
        position: 'fixed',
        display: 'none',
        opacity: '0',
        transition: 'opacity 0.25s ease',
        zIndex: '10000',
        pointerEvents: 'none'
    });

    document.body.appendChild(tooltip);
    return tooltip;
}

// ─────────────────────────────────────────────────────────────
// BUTTON CREATION AND MANAGEMENT
// ─────────────────────────────────────────────────────────────
function removeButtons() {
    document.getElementById('opgg-btn')?.remove();
    document.getElementById('ugg-btn')?.remove();
    document.querySelectorAll('[data-opgg-tooltip]').forEach(t => t.remove());
}

function buildButton(id, href, title, logoSrc, bgColor, tierColor) {
    const btn = document.createElement('a');
    btn.id = id;
    btn.href = href;
    btn.target = '_blank';
    btn.title = title;

    Object.assign(btn.style, {
        position: 'fixed',
        top: '18%',
        left: id === 'opgg-btn' ? '65%' : '72%',
        transform: 'scale(1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: bgColor,
        border: `3px solid ${tierColor}`,
        boxShadow: `0 0 25px ${tierColor}66, inset 0 0 10px ${tierColor}33`,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: '9999',
        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))',
        overflow: 'hidden'
    });

    const img = document.createElement('img');
    img.src = logoSrc;
    Object.assign(img.style, {
        width: '100%', height: '100%',
        objectFit: 'cover', borderRadius: '50%',
        userSelect: 'none', pointerEvents: 'none'
    });
    btn.appendChild(img);

    return btn;
}

function attachTooltip(btn, tooltip, tierColor) {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.2)';
        btn.style.boxShadow = `0 0 35px ${tierColor}99, inset 0 0 15px ${tierColor}66`;
        const rect = btn.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width / 2 - 100) + 'px';
        tooltip.style.top = (rect.top - 120) + 'px';
        tooltip.style.display = 'block';
        setTimeout(() => tooltip.style.opacity = '1', 10);
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = `0 0 25px ${tierColor}66, inset 0 0 10px ${tierColor}33`;
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.style.display = 'none', 300);
    });
    btn.addEventListener('click', e => e.stopPropagation());
}

function createOpggButton(gameName, tagLine, rank) {
    const region = regionToOpgg(currentRegion);
    const name = encodeURIComponent(gameName);
    const tag = encodeURIComponent(tagLine);
    const tierColor = rank ? (RANK_COLORS[rank.tier] || '#ffc300') : '#ffc300';
    const href = `${OPGG_BASE}${region}/${name}-${tag}`;

    const btn = buildButton('opgg-btn', href, `${gameName}#${tagLine} on OP.GG`, OPGG_LOGO, 'transparent', tierColor);
    const tooltip = createTooltip(gameName, tagLine, rank);
    attachTooltip(btn, tooltip, tierColor);
    return btn;
}

function createUggButton(gameName, tagLine, rank) {
    const region = regionToUgg(currentRegion);
    const name = encodeURIComponent(gameName);
    const tag = encodeURIComponent(tagLine);
    const tierColor = rank ? (RANK_COLORS[rank.tier] || '#ffc300') : '#ffc300';
    const href = `${UGG_BASE}${region}/${name}-${tag}`;

    const btn = buildButton('ugg-btn', href, `${gameName}#${tagLine} on U.GG`, UGG_LOGO, '#000000', tierColor);
    const tooltip = createTooltip(gameName, tagLine, rank);
    attachTooltip(btn, tooltip, tierColor);
    return btn;
}

// ─────────────────────────────────────────────────────────────
// SETTINGS MENU (REGION)
// ─────────────────────────────────────────────────────────────
function createSettingsMenu() {
    if (document.getElementById('opgg-settings')) return;

    const panel = document.createElement('div');
    panel.id = 'opgg-settings';

    const LABELS = {
        'euw1': 'EUW', 'na1': 'NA', 'kr': 'KR',
        'eun1': 'EUNE', 'br1': 'BR', 'la1': 'LAN',
        'la2': 'LAS', 'oc1': 'OCE', 'tr1': 'TR',
        'ru': 'RU', 'jp1': 'JP'
    };

    const gear = document.createElement('div');
    gear.id = 'opgg-gear';
    gear.textContent = '⚙';
    gear.title = 'Change Region';
    Object.assign(gear.style, {
        position: 'fixed',
        top: '18%',
        left: '79%',
        width: '32px',
        height: '32px',
        lineHeight: '32px',
        textAlign: 'center',
        fontSize: '18px',
        borderRadius: '50%',
        background: 'rgba(15,15,20,0.85)',
        border: '1px solid #785a28',
        color: '#c89b3c',
        cursor: 'pointer',
        zIndex: '9999',
        userSelect: 'none',
        transition: 'transform 0.3s ease',
        boxShadow: '0 2px 12px rgba(0,0,0,0.7)'
    });

    const dropdown = document.createElement('div');
    dropdown.id = 'opgg-region-dropdown';

    const header = document.createElement('div');
    header.textContent = 'Region Selector';
    Object.assign(header.style, {
        color: '#c89b3c',
        fontSize: '11px',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '8px 12px 6px',
        borderBottom: '1px solid #3d2c0e',
        fontFamily: 'Georgia, serif'
    });
    dropdown.appendChild(header);

    for (const r of ALL_REGIONS) {
        const item = document.createElement('div');
        item.textContent = LABELS[r] || r.toUpperCase();
        item.dataset.region = r;

        const isActive = r === (currentRegion || 'euw1');
        Object.assign(item.style, {
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '12px',
            color: isActive ? '#f0e6d2' : '#888',
            background: isActive ? 'rgba(200,155,60,0.15)' : 'transparent',
            fontFamily: 'Georgia, serif',
            transition: 'background 0.15s ease'
        });
        if (isActive) item.setAttribute('data-active', '1');

        item.addEventListener('mouseenter', () => {
            if (!item.dataset.active) item.style.background = 'rgba(200,155,60,0.08)';
        });
        item.addEventListener('mouseleave', () => {
            if (!item.dataset.active) item.style.background = 'transparent';
        });
        item.addEventListener('click', () => {
            currentRegion = r;
            saveRegion(r);
            lastPuuid = null;
            removeButtons();
            inject();
            dropdown.querySelectorAll('[data-region]').forEach(el => {
                const active = el.dataset.region === r;
                el.style.color = active ? '#f0e6d2' : '#888';
                el.style.background = active ? 'rgba(200,155,60,0.15)' : 'transparent';
                if (active) el.setAttribute('data-active', '1');
                else el.removeAttribute('data-active');
            });
            dropdown.style.display = 'none';
            gear.style.transform = 'rotate(0deg)';
            console.log(`[OP.GG] Region changed to: ${r}`);
        });

        dropdown.appendChild(item);
    }

    Object.assign(dropdown.style, {
        position: 'fixed',
        top: 'calc(18% + 36px)',
        left: '81%',
        background: 'linear-gradient(160deg, #0a0a0f, #111118)',
        border: '1px solid #785a28',
        borderRadius: '4px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.9)',
        display: 'none',
        zIndex: '10001',
        minWidth: '90px',
        overflow: 'hidden'
    });

    let open = false;
    gear.addEventListener('click', () => {
        open = !open;
        dropdown.style.display = open ? 'block' : 'none';
        gear.style.transform = open ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target)) {
            open = false;
            dropdown.style.display = 'none';
            gear.style.transform = 'rotate(0deg)';
        }
    });

    panel.appendChild(gear);
    panel.appendChild(dropdown);
    document.body.appendChild(panel);
}

function removeSettingsMenu() {
    document.getElementById('opgg-settings')?.remove();
}

// ─────────────────────────────────────────────────────────────
// INJECT
// ─────────────────────────────────────────────────────────────
async function inject() {
    const puuid = await getViewedPuuid();

    if (!puuid) {
        if (lastPuuid !== null || document.getElementById('opgg-btn')) {
            removeButtons();
            removeSettingsMenu();
            lastPuuid = null;
        }
        return;
    }

    if (puuid === lastPuuid && document.getElementById('opgg-btn')) return;

    removeButtons();

    const [riotId, rank] = await Promise.all([
        fetchRiotId(puuid),
        fetchRank(puuid)
    ]);

    if (!riotId) return;

    const currentPuuid = await getViewedPuuid();
    if (currentPuuid !== puuid) return;

    const [gameName, tagLine] = riotId.split('#');

    document.body.appendChild(createOpggButton(gameName, tagLine, rank));
    document.body.appendChild(createUggButton(gameName, tagLine, rank));
    createSettingsMenu();

    lastPuuid = puuid;
    console.log(`[OP.GG] Injected: ${riotId} (region: ${currentRegion})`);
}

// ─────────────────────────────────────────────────────────────
// NAVIGATION AND OBSERVER SETUP
// ─────────────────────────────────────────────────────────────
let debounceTimer = null;
function scheduleInject() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(inject, 150);
}

(function patchHistory() {
    const _push = history.pushState.bind(history);
    const _replace = history.replaceState.bind(history);
    history.pushState = function (...args) {
        _push(...args);
        window.dispatchEvent(new Event('locationchange'));
    };
    history.replaceState = function (...args) {
        _replace(...args);
        window.dispatchEvent(new Event('locationchange'));
    };
})();

window.addEventListener('load', async () => {
    await detectRegion();
    await fetchOwnPuuid();

    const onNavigate = async () => {
        setTimeout(async () => {
            const p = await getViewedPuuid();
            if (!p) {
                removeButtons();
                removeSettingsMenu();
                lastPuuid = null;
            }
        }, 50);
    };

    window.addEventListener('hashchange', onNavigate);
    window.addEventListener('popstate', onNavigate);
    window.addEventListener('locationchange', onNavigate);

    const observer = new MutationObserver(scheduleInject);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    window.__opgg = {
        get lastPuuid() { return lastPuuid; },
        get currentRegion() { return currentRegion; },
        get ownPuuid() { return ownPuuid; },
        tagCache, rankCache,
        getViewedPuuid, inject, removeButtons,
        setRegion: (r) => { currentRegion = r; saveRegion(r); lastPuuid = null; removeButtons(); inject(); }
    };

    setInterval(inject, 2000);
    console.log(`[OP.GG] Plugin loaded — region: ${currentRegion}`);
});
