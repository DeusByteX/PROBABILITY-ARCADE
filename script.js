// Syllabus Data
const syllabusData = {
  "categories": [
    {
      "name": "Foundations of Probability",
      "emoji": "🎲",
      "topics": [
        {
          "title": "Sample Space & Events",
          "lecture": "GS Lec 8-9",
          "primary": ["https://www.youtube.com/watch?v=DM_a4kgYqnM", "https://www.youtube.com/watch?v=LF5Jh4IMjcU"],
          "alternate": []
        },
        {
          "title": "Axiom of Probability & Properties",
          "lecture": "GS Lec 8 (+11 for properties)",
          "primary": ["https://www.youtube.com/watch?v=DM_a4kgYqnM", "https://www.youtube.com/watch?v=5PAXmAHK8ls"],
          "alternate": ["https://www.khanacademy.org/math/ka-math-class-11/x0419e5b3b578592a:probability-ncert-new/x0419e5b3b578592a:axiomatic-approach-to-probability/v/axiomatic-approach-to-probability"]
        },
        {
          "title": "Conditional Probability",
          "lecture": "GS Lec 10",
          "primary": ["https://www.youtube.com/watch?v=bAmIAdhCUzg"],
          "alternate": []
        },
        {
          "title": "Bayes' Theorem",
          "lecture": "GS Lec 14",
          "primary": ["https://www.youtube.com/watch?v=WOYylyjkq_g"],
          "alternate": []
        },
        {
          "title": "Independent Events",
          "lecture": "GS Lec 12",
          "primary": ["https://www.youtube.com/watch?v=1MxZ1Z59tzc"],
          "alternate": []
        },
        {
          "title": "Random Variable",
          "lecture": "GS Lec 15",
          "primary": ["https://www.youtube.com/watch?v=2n1hapVMHL0"],
          "alternate": []
        }
      ]
    },
    {
      "name": "Discrete Distributions",
      "emoji": "🎯",
      "topics": [
        {
          "title": "PMF (Probability Mass Function)",
          "lecture": "Dedicated",
          "primary": [],
          "alternate": ["https://www.youtube.com/results?search_query=PMF+JB+Statistics"]
        },
        {
          "title": "CDF (Cumulative Distribution Function)",
          "lecture": "Dedicated",
          "primary": [],
          "alternate": ["https://www.youtube.com/results?search_query=CDF+JB+Statistics"]
        },
        {
          "title": "Expectation, Variance & SD",
          "lecture": "GS Lec 16",
          "primary": ["https://www.youtube.com/watch?v=1jfHFNSPJO0"],
          "alternate": []
        },
        {
          "title": "Discrete Uniform Distribution",
          "lecture": "GS Lec 17",
          "primary": ["https://www.youtube.com/watch?v=cNqb_awlB1A"],
          "alternate": []
        },
        {
          "title": "Geometric Distribution",
          "lecture": "Dedicated",
          "primary": [],
          "alternate": ["https://www.youtube.com/results?search_query=Geometric+Distribution+JB+Statistics"]
        },
        {
          "title": "Moment Generating Function",
          "lecture": "Dedicated",
          "primary": [],
          "alternate": ["https://www.youtube.com/results?search_query=Moment+Generating+Function+JB+Statistics"]
        },
        {
          "title": "Binomial Distribution",
          "lecture": "GS Lec 18",
          "primary": ["https://www.youtube.com/watch?v=IFhvaO_b5ds"],
          "alternate": []
        },
        {
          "title": "Hypergeometric Distribution",
          "lecture": "Dedicated",
          "primary": [],
          "alternate": ["https://www.youtube.com/results?search_query=Hypergeometric+Distribution+JB+Statistics"]
        },
        {
          "title": "Negative Binomial Distribution",
          "lecture": "Dedicated",
          "primary": [],
          "alternate": ["https://www.youtube.com/results?search_query=Negative+Binomial+Distribution+JB+Statistics"]
        },
        {
          "title": "Poisson Distribution",
          "lecture": "GS Lec 20",
          "primary": ["https://www.youtube.com/watch?v=zv7_EwPyzCo"],
          "alternate": []
        }
      ]
    },
    {
      "name": "Continuous Distributions",
      "emoji": "📈",
      "topics": [
        {
          "title": "Continuous Random Variable",
          "lecture": "GS Lec 23",
          "primary": ["https://www.youtube.com/watch?v=oTaTb1EZQ8w"],
          "alternate": []
        },
        {
          "title": "Continuous Uniform Distribution",
          "lecture": "GS Lec 25-26",
          "primary": ["https://www.youtube.com/watch?v=gxQOaeoQ3Sk", "https://www.youtube.com/watch?v=n_1Z-HVemP0"],
          "alternate": []
        },
        {
          "title": "Normal Distribution",
          "lecture": "GS Lec 24",
          "primary": ["https://www.youtube.com/watch?v=4rHwrkc-w9Y"],
          "alternate": []
        },
        {
          "title": "Normal Approximation",
          "lecture": "GS Lec 24",
          "primary": ["https://www.youtube.com/watch?v=4rHwrkc-w9Y"],
          "alternate": []
        },
        {
          "title": "Exponential Distribution",
          "lecture": "GS Lec 27",
          "primary": ["https://www.youtube.com/watch?v=y7q9U35R9v8"],
          "alternate": []
        }
      ]
    }
  ]
};

// Storage Keys
const PROFILES_KEY = 'ma21001_arcade_profiles';
const ACTIVE_PLAYER_KEY = 'ma21001_current_player';
const MUTE_KEY = 'ma21001_sound_muted';
const LOCAL_SAVES_KEY = 'ma21001_local_saves';

// Supabase Configuration
const supabaseUrl = 'https://rtohmqovfnnbuxypzrfh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0b2htcW92Zm5uYnV4eXB6cmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNzcyODMsImV4cCI6MjA5OTc1MzI4M30.nL5G_TTnPHmG1139batbrcRbh2ScrzDtt3m5ZaXj290';
let dbClient = null;

if (window.supabase) {
  dbClient = window.supabase.createClient(supabaseUrl, supabaseKey);
}

// Achievements Definitions
const achievementsList = [
  { id: 'first_topic', name: 'First Blood 🥉', desc: 'Clear your first syllabus topic', check: (c, pr) => c >= 1 },
  { id: 'cat_1_clear', name: 'Foundations Master 🎲', desc: 'Clear all Foundations of Probability topics', check: (c, pr) => {
    return syllabusData.categories[0].topics.every(t => pr[t.title]);
  }},
  { id: 'cat_2_clear', name: 'Discrete Master 🎯', desc: 'Clear all Discrete Distributions topics', check: (c, pr) => {
    return syllabusData.categories[1].topics.every(t => pr[t.title]);
  }},
  { id: 'cat_3_clear', name: 'Continuous Master 📈', desc: 'Clear all Continuous Distributions topics', check: (c, pr) => {
    return syllabusData.categories[2].topics.every(t => pr[t.title]);
  }},
  { id: 'all_clear', name: 'Syllabus Conqueror 🏆', desc: 'Complete 100% of your mid-sem quest', check: (c, pr) => c === 21 }
];

// Synth Arcade Sound FX Synthesizer
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem(MUTE_KEY) === 'true';
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem(MUTE_KEY, this.muted);
    return this.muted;
  }

  playCheck() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
    
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    
    osc.start(now);
    osc.stop(now + 0.25);
  }

  playUncheck() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.18);
    
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
    
    osc.start(now);
    osc.stop(now + 0.18);
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      
      gain.gain.setValueAtTime(0.1, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.09 + 0.3);
      
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.3);
    });
  }

  playVictory() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const notes = [
      { f: 523.25, d: 0.12 },
      { f: 523.25, d: 0.12 },
      { f: 523.25, d: 0.12 },
      { f: 523.25, d: 0.25 },
      { f: 415.30, d: 0.25 },
      { f: 466.16, d: 0.25 },
      { f: 523.25, d: 0.5 }
    ];
    
    let time = now;
    notes.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(note.f, time);
      
      gain.gain.setValueAtTime(0.06, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + note.d);
      
      osc.start(time);
      osc.stop(time + note.d);
      time += note.d + 0.02;
    });
  }
  
  playReset() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.45);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
    
    osc.start(now);
    osc.stop(now + 0.45);
  }
}

// Confetti Particle Engine
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationFrameId = null;
    this.colors = ['#ff007f', '#00f0ff', '#bc00dd', '#39ff14', '#ff9900', '#3b82f6'];
    
    // Detect mobile for dynamic performance scaling
    this.isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0;
    
    this.resizeCanvas();
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0;
    });
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle(x, y, isFullScreen = false) {
    const angle = isFullScreen ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 1.5 - Math.PI * 1.25;
    const speed = isFullScreen ? Math.random() * 8 + 4 : Math.random() * 6 + 3;
    
    return {
      x: x,
      y: y,
      size: Math.random() * (this.isMobile ? 5 : 8) + 4,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5,
      gravity: 0.15,
      friction: 0.98,
      alpha: 1,
      fadeSpeed: Math.random() * 0.015 + 0.01,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    };
  }

  burst(x, y, count = 20) {
    // Halve particle count on mobile devices to save GPU/CPU cycles
    const finalCount = this.isMobile ? Math.round(count / 2) : count;
    for (let i = 0; i < finalCount; i++) {
      this.particles.push(this.createParticle(x, y, false));
    }
    this.startLoop();
  }

  fullscreenCelebration() {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      // Spawn fewer particles on mobile devices
      if (!this.isMobile || Math.random() < 0.6) {
        this.particles.push(this.createParticle(0, this.canvas.height, true));
        this.particles.push(this.createParticle(this.canvas.width, this.canvas.height, true));
      }
      
      if (Math.random() < 0.15) {
        this.particles.push(this.createParticle(Math.random() * this.canvas.width, 0, true));
      }

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    this.startLoop();
  }

  startLoop() {
    if (!this.animationFrameId) {
      this.loop();
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.speedX *= p.friction;
      p.speedY += p.gravity;
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.fadeSpeed;

      if (p.alpha <= 0 || p.y > this.canvas.height || p.x < 0 || p.x > this.canvas.width) {
        this.particles.splice(i, 1);
        continue;
      }

      if (this.isMobile) {
        // Fast rendering path: skip expensive canvas save, restore, translate, and rotate calls
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          this.ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        } else {
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          this.ctx.fill();
        }
      } else {
        // Standard rendering path for desktops (full rotations and matrix translations)
        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          this.ctx.beginPath();
          this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          this.ctx.fill();
        }
        this.ctx.restore();
      }
    }

    if (this.particles.length > 0) {
      this.animationFrameId = requestAnimationFrame(() => this.loop());
    } else {
      this.animationFrameId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// State variables
let activePlayer = null;
let profiles = {};
let userProgress = {};
let userStreak = 0;
let userLastDate = null;
let userUnlockedAchievements = [];
let userPrevLevel = 1;

let soundFX;
let confetti;

// Helper to build video links
function renderVideoButtons(topic) {
  let html = '<div class="video-btn-group">';
  const hasPrimary = topic.primary && topic.primary.length > 0;
  const hasAlternate = topic.alternate && topic.alternate.length > 0;

  if (hasPrimary) {
    if (topic.primary.length === 1) {
      const label = hasAlternate ? 'Primary' : 'Watch';
      html += `<a href="${topic.primary[0]}" target="_blank" rel="noopener noreferrer" class="vid-btn vid-primary"><i class="fa-solid fa-play"></i> ${label}</a>`;
    } else {
      topic.primary.forEach((link, idx) => {
        html += `<a href="${link}" target="_blank" rel="noopener noreferrer" class="vid-btn vid-primary"><i class="fa-solid fa-circle-play"></i> Part ${idx + 1}</a>`;
      });
    }
  }

  if (hasAlternate) {
    if (topic.alternate.length === 1) {
      html += `<a href="${topic.alternate[0]}" target="_blank" rel="noopener noreferrer" class="vid-btn vid-alternate"><i class="fa-solid fa-arrow-up-right-from-square"></i> Alternate</a>`;
    } else {
      topic.alternate.forEach((link, idx) => {
        html += `<a href="${link}" target="_blank" rel="noopener noreferrer" class="vid-btn vid-alternate"><i class="fa-solid fa-arrow-up-right-from-square"></i> Alt ${idx + 1}</a>`;
      });
    }
  }

  html += '</div>';
  return html;
}

// Generate syllabus dynamic list
function renderSyllabus() {
  const container = document.getElementById('syllabus-container');
  container.innerHTML = '';
  
  syllabusData.categories.forEach((category, catIdx) => {
    const catId = catIdx + 1;
    
    const card = document.createElement('section');
    card.className = 'category-card';
    card.setAttribute('data-cat', catId);
    card.id = `category-card-${catId}`;
    
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <div class="category-title-section">
        <div class="category-emoji">${category.emoji}</div>
        <div class="category-info">
          <h2 class="category-name">${category.name}</h2>
        </div>
      </div>
      <div class="category-meta">
        <div class="category-progress-wrapper">
          <span class="category-fraction" id="cat-fraction-${catId}">0/0</span>
          <div class="mini-progress-track">
            <div class="mini-progress-fill" id="cat-fill-${catId}"></div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down category-chevron"></i>
      </div>
    `;
    
    const panel = document.createElement('div');
    panel.className = 'category-content-panel';
    
    const topicsList = document.createElement('div');
    topicsList.className = 'topics-list';
    
    category.topics.forEach((topic) => {
      const topicEl = document.createElement('div');
      topicEl.className = 'topic-item';
      
      const isChecked = userProgress[topic.title] ? 'checked' : '';
      if (isChecked) {
        topicEl.classList.add('completed');
      }
      
      topicEl.innerHTML = `
        <div class="topic-left">
          <label class="checkbox-container">
            <input type="checkbox" data-topic="${topic.title}" ${isChecked}>
            <span class="checkmark"></span>
          </label>
          <div class="topic-details">
            <span class="topic-title" title="${topic.title}">${topic.title}</span>
            <span class="lecture-badge">${topic.lecture}</span>
          </div>
        </div>
        <div class="topic-right">
          ${renderVideoButtons(topic)}
        </div>
      `;
      
      const checkbox = topicEl.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', (e) => {
        soundFX.init();
        
        const checked = e.target.checked;
        userProgress[topic.title] = checked;
        
        if (checked) {
          topicEl.classList.add('completed');
          soundFX.playCheck();
          
          const rect = checkbox.getBoundingClientRect();
          confetti.burst(rect.left + rect.width / 2 + window.scrollX, rect.top + rect.height / 2 + window.scrollY, 12);
          
          triggerStreakProgress();
        } else {
          topicEl.classList.remove('completed');
          soundFX.playUncheck();
        }
        
        saveCurrentProfile();
        updateProgress();
        renderLeaderboard();
      });
      
      topicsList.appendChild(topicEl);
    });
    
    panel.appendChild(topicsList);
    card.appendChild(header);
    card.appendChild(panel);
    container.appendChild(card);
    
    header.addEventListener('click', () => {
      soundFX.init();
      card.classList.toggle('active');
      
      if (card.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0';
      }
    });
  });
}

// Daily study streak operations
function triggerStreakProgress() {
  const today = new Date().toISOString().split('T')[0];
  
  if (!userLastDate) {
    userStreak = 1;
  } else {
    const diffTime = Math.abs(new Date(today) - new Date(userLastDate));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      userStreak += 1;
    } else if (diffDays > 1) {
      userStreak = 1; // reset broken streak
    }
  }
  
  userLastDate = today;
  document.getElementById('streak-count').textContent = userStreak.toString();
}

function verifyAndCleanStreak() {
  if (userLastDate) {
    const today = new Date().toISOString().split('T')[0];
    const diffTime = Math.abs(new Date(today) - new Date(userLastDate));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 1) {
      userStreak = 0; // streak expired
    }
  }
  document.getElementById('streak-count').textContent = userStreak.toString();
}

// Rank & XP Leveling
function updateRankAndXP(completedCount) {
  const currentXP = completedCount * 100;
  const maxXP = 2100;
  
  const xpPct = (currentXP / maxXP) * 100;
  document.getElementById('xp-fill').style.width = `${xpPct}%`;
  document.getElementById('xp-display').textContent = `${currentXP} / ${maxXP} XP`;
  
  let rank = "Formula Freshman 🥚";
  let currentLevel = 1;
  
  if (currentXP >= 100 && currentXP <= 500) {
    rank = "Formula Novice 🧪";
    currentLevel = 2;
  } else if (currentXP >= 600 && currentXP <= 1100) {
    rank = "Axiom Apprentice 🛡️";
    currentLevel = 3;
  } else if (currentXP >= 1200 && currentXP <= 1600) {
    rank = "Distribution Duelist ⚔️";
    currentLevel = 4;
  } else if (currentXP >= 1700 && currentXP <= 2000) {
    rank = "Stats Sorcerer 🔮";
    currentLevel = 5;
  } else if (currentXP === 2100) {
    rank = "Probability Demi-God 🏆";
    currentLevel = 5;
  }
  
  // Play Level Up sound if level increased
  if (currentLevel > userPrevLevel && userPrevLevel !== 0) {
    soundFX.playLevelUp();
  }
  userPrevLevel = currentLevel;
  
  document.getElementById('rank-display').textContent = `Rank: ${rank}`;
}

// Achievements Render
function updateAchievements(completedCount) {
  const container = document.getElementById('achievements-container');
  container.innerHTML = '';
  
  let freshlyUnlocked = false;

  achievementsList.forEach((badge) => {
    const isEligible = badge.check(completedCount, userProgress);
    const alreadyUnlocked = userUnlockedAchievements.includes(badge.id);
    
    const badgeEl = document.createElement('div');
    
    if (isEligible) {
      badgeEl.className = 'badge-card unlocked';
      if (!alreadyUnlocked) {
        userUnlockedAchievements.push(badge.id);
        freshlyUnlocked = true;
      }
    } else {
      badgeEl.className = 'badge-card locked';
    }
    
    let emoji = '🏅';
    if (badge.id === 'first_topic') emoji = '🥉';
    if (badge.id === 'cat_1_clear') emoji = '🎲';
    if (badge.id === 'cat_2_clear') emoji = '🎯';
    if (badge.id === 'cat_3_clear') emoji = '📈';
    if (badge.id === 'all_clear') emoji = '🏆';

    badgeEl.innerHTML = `
      <div class="badge-medal">${emoji}</div>
      <div class="badge-name">${badge.name}</div>
      <div class="badge-desc">${badge.desc}</div>
    `;
    
    container.appendChild(badgeEl);
  });
  
  if (freshlyUnlocked) {
    saveCurrentProfile();
    setTimeout(() => {
      soundFX.playLevelUp();
    }, 150);
  }
}

// Update all progress levels (categories + overall)
function updateProgress() {
  let totalTopics = 0;
  let completedTopics = 0;
  
  syllabusData.categories.forEach((category, catIdx) => {
    const catId = catIdx + 1;
    const catTopics = category.topics;
    const catTotal = catTopics.length;
    let catCompleted = 0;
    
    catTopics.forEach((topic) => {
      if (userProgress[topic.title]) {
        catCompleted++;
      }
    });
    
    totalTopics += catTotal;
    completedTopics += catCompleted;
    
    const fractionEl = document.getElementById(`cat-fraction-${catId}`);
    const fillEl = document.getElementById(`cat-fill-${catId}`);
    
    if (fractionEl && fillEl) {
      fractionEl.textContent = `${catCompleted}/${catTotal}`;
      const percentage = catTotal > 0 ? (catCompleted / catTotal) * 100 : 0;
      fillEl.style.width = `${percentage}%`;
    }
  });
  
  const overallPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  const circle = document.querySelector('.progress-ring__circle');
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (overallPercentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  const percentEl = document.getElementById('overall-percentage');
  const fractionEl = document.getElementById('overall-fraction');
  if (percentEl) percentEl.textContent = `${overallPercentage}%`;
  if (fractionEl) fractionEl.textContent = `${completedTopics}/${totalTopics}`;
  
  updateRankAndXP(completedTopics);
  updateAchievements(completedTopics);
  
  // Tagline message logic
  const motivationalEl = document.getElementById('motivational-msg');
  if (motivationalEl) {
    let msg = "Let's get started 🚀";
    if (overallPercentage > 0 && overallPercentage < 30) {
      msg = "First steps taken! Keep pushing 🏔️";
    } else if (overallPercentage >= 30 && overallPercentage < 50) {
      msg = "Building momentum! You've got this ⚡";
    } else if (overallPercentage >= 50 && overallPercentage < 75) {
      msg = "Halfway there! Keep burning 🔥";
    } else if (overallPercentage >= 75 && overallPercentage < 100) {
      msg = "In the home stretch! Almost ready 🎯";
    } else if (overallPercentage === 100) {
      msg = "Syllabus crushed! You're ready 🏆";
      
      // Trigger full celebration
      if (!sessionStorage.getItem('full_confetti_triggered')) {
        soundFX.playVictory();
        confetti.fullscreenCelebration();
        setTimeout(() => {
          showCelebrationModal();
        }, 850);
        sessionStorage.setItem('full_confetti_triggered', 'true');
      }
    }
    
    if (overallPercentage < 100) {
      sessionStorage.removeItem('full_confetti_triggered');
    }
    
    motivationalEl.innerHTML = msg;
  }
}

// Profile Save / Loading Logic
async function saveCurrentProfile() {
  if (!activePlayer) return;
  
  const profileData = {
    progress: userProgress,
    streak: userStreak,
    lastDate: userLastDate,
    unlockedAchievements: userUnlockedAchievements,
    prevLevel: userPrevLevel
  };
  
  // Save locally
  profiles[activePlayer] = profileData;
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));

  // Sync remotely
  if (dbClient) {
    try {
      const { error } = await dbClient
        .from('profiles')
        .upsert({
          username: activePlayer,
          progress: userProgress,
          streak: userStreak,
          last_date: userLastDate,
          unlocked_achievements: userUnlockedAchievements,
          prev_level: userPrevLevel,
          updated_at: new Date().toISOString()
        });
      if (error) console.error('Supabase Sync Error:', error);
    } catch (e) {
      console.error('Supabase Sync Error:', e);
    }
  }
}

// Sync all profiles from Supabase to local cache
async function syncProfilesFromSupabase() {
  if (!dbClient) return;
  try {
    const { data, error } = await dbClient
      .from('profiles')
      .select('*');
    
    if (error) {
      console.error('Error syncing from Supabase:', error);
      return;
    }
    
    if (data) {
      data.forEach((p) => {
        profiles[p.username] = {
          progress: p.progress || {},
          streak: p.streak || 0,
          lastDate: p.last_date || null,
          unlockedAchievements: p.unlocked_achievements || [],
          prevLevel: p.prev_level || 1
        };
      });
      localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
    }
  } catch (err) {
    console.error('Supabase Sync Error:', err);
  }
}

function loadPlayerProfile(name) {
  activePlayer = name;
  localStorage.setItem(ACTIVE_PLAYER_KEY, name);
  
  const p = profiles[name];
  userProgress = p.progress || {};
  userStreak = p.streak || 0;
  userLastDate = p.lastDate || null;
  userUnlockedAchievements = p.unlockedAchievements || [];
  userPrevLevel = p.prevLevel || 1;
  
  // Set up UI header name
  document.getElementById('active-player-name').textContent = activePlayer;
  
  // Verify streak has not expired
  verifyAndCleanStreak();
  
  // Switch visual containers
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('app-container').style.display = 'block';
  
  // Redraw syllabus
  renderSyllabus();
  
  // Collapse and expand first card
  const firstCard = document.getElementById('category-card-1');
  if (firstCard) {
    firstCard.classList.add('active');
    const panel = firstCard.querySelector('.category-content-panel');
    if (panel) {
      setTimeout(() => {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }, 50);
    }
  }
  
  // Update progress bars & leaderboard
  updateProgress();
  renderLeaderboard();
  
  soundFX.playLevelUp();
}

function logoutPlayer() {
  saveCurrentProfile();
  
  activePlayer = null;
  localStorage.removeItem(ACTIVE_PLAYER_KEY);
  
  // Switch visual containers
  document.getElementById('app-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
  
  // Redraw login screen elements
  renderSaveSlots();
  
  soundFX.playReset();
}

async function deletePlayerProfile(name, event) {
  // Prevent click from propagating to logging in
  event.stopPropagation();
  clearAuthError();
  
  const pwd = prompt(`ENTER PASSWORD TO DELETE PROFILE "${name}":`);
  if (pwd === null) return; // user canceled
  
  let matched = false;
  
  if (dbClient) {
    try {
      const { data, error } = await dbClient
        .from('profiles')
        .select('password')
        .eq('username', name);
        
      if (!error && data && data.length > 0) {
        matched = data[0].password === pwd;
      }
    } catch (err) {
      console.error('Delete verification failed:', err);
    }
  } else {
    // Offline mode check
    if (profiles[name]) {
      matched = profiles[name].password === pwd;
    }
  }
  
  if (!matched) {
    alert("INCORRECT PASSWORD. PROFILE DELETION ABORTED.");
    soundFX.playReset();
    return;
  }
  
  // Proceed with deletion
  delete profiles[name];
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  
  // Remove from local device memory list
  let localUsers = JSON.parse(localStorage.getItem(LOCAL_SAVES_KEY)) || [];
  localUsers = localUsers.filter(u => u !== name);
  localStorage.setItem(LOCAL_SAVES_KEY, JSON.stringify(localUsers));
  
  if (dbClient) {
    try {
      await dbClient
        .from('profiles')
        .delete()
        .eq('username', name);
    } catch (err) {
      console.error('Supabase Delete Error:', err);
    }
  }
  
  // Play power down sound
  soundFX.playReset();
  
  // Refresh slots listing
  renderSaveSlots();
  renderLeaderboard();
}

// Render Save Slots Drawer in Login Screen
function renderSaveSlots() {
  const container = document.getElementById('save-slots-container');
  container.innerHTML = '';
  
  const localUsers = JSON.parse(localStorage.getItem(LOCAL_SAVES_KEY)) || [];
  if (localUsers.length === 0) {
    container.innerHTML = `<div class="empty-slots-msg">NO SAVED PROFILES FOUND ON THIS DEVICE. SIGN UP ABOVE!</div>`;
    return;
  }
  
  localUsers.forEach((name) => {
    const p = profiles[name] || { progress: {}, streak: 0 };
    const progressObj = p.progress || {};
    
    // Calculate totals
    let completed = 0;
    Object.keys(progressObj).forEach((k) => {
      if (progressObj[k]) completed++;
    });
    
    const xp = completed * 100;
    const percent = Math.round((completed / 21) * 100);
    
    const slotEl = document.createElement('div');
    slotEl.className = 'save-slot';
    slotEl.innerHTML = `
      <div class="save-slot-left">
        <span class="save-slot-name">${name}</span>
        <span class="save-slot-xp">${xp} XP</span>
        <span class="save-slot-percent">${percent}% READY</span>
      </div>
      <button class="delete-slot-btn" title="Delete Profile Data">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    
    // Event listener: clicking a slot autofills the signin form & focuses password
    slotEl.addEventListener('click', () => {
      soundFX.init();
      clearAuthError();
      
      // Toggle tab to signin
      const tabSignin = document.getElementById('tab-signin');
      if (tabSignin) tabSignin.click();
      
      // Autofill & focus
      document.getElementById('signin-username').value = name;
      document.getElementById('signin-password').value = '';
      document.getElementById('signin-password').focus();
      
      slotEl.style.transform = 'scale(0.97)';
      setTimeout(() => slotEl.style.transform = '', 100);
    });
    
    const delBtn = slotEl.querySelector('.delete-slot-btn');
    delBtn.addEventListener('click', (e) => {
      soundFX.init();
      deletePlayerProfile(name, e);
    });
    
    container.appendChild(slotEl);
  });
}

// Leaderboard aggregation and rendering
function renderLeaderboard() {
  const body = document.getElementById('leaderboard-body');
  body.innerHTML = '';
  
  const players = [];
  
  Object.keys(profiles).forEach((name) => {
    const p = profiles[name];
    const progressObj = p.progress || {};
    
    let completed = 0;
    Object.keys(progressObj).forEach((k) => {
      if (progressObj[k]) completed++;
    });
    
    const xp = completed * 100;
    const percent = Math.round((completed / 21) * 100);
    
    // Get rank level name
    let rankName = "Freshman 🥚";
    if (xp >= 100 && xp <= 500) rankName = "Novice 🧪";
    else if (xp >= 600 && xp <= 1100) rankName = "Apprentice 🛡️";
    else if (xp >= 1200 && xp <= 1600) rankName = "Duelist ⚔️";
    else if (xp >= 1700 && xp <= 2000) rankName = "Sorcerer 🔮";
    else if (xp === 2100) rankName = "Demi-God 🏆";
    
    players.push({
      name: name,
      xp: xp,
      percent: percent,
      completed: completed,
      streak: p.streak || 0,
      rankName: rankName
    });
  });
  
  // Sort descending by XP, then by streak, then by name alphabetically
  players.sort((a, b) => {
    if (b.xp !== a.xp) return b.xp - a.xp;
    if (b.streak !== a.streak) return b.streak - a.streak;
    return a.name.localeCompare(b.name);
  });
  
  if (players.length === 0) {
    body.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">NO HIGH SCORES RECORDED YET.</td></tr>`;
    return;
  }
  
  players.forEach((player, idx) => {
    const rankNum = idx + 1;
    let medal = rankNum.toString();
    
    if (rankNum === 1) medal = '🥇';
    else if (rankNum === 2) medal = '🥈';
    else if (rankNum === 3) medal = '🥉';
    
    const isActive = player.name === activePlayer ? 'active-user-row' : '';
    
    const row = document.createElement('tr');
    row.className = `leaderboard-row ${isActive}`;
    
    row.innerHTML = `
      <td class="leaderboard-rank">${medal}</td>
      <td class="leaderboard-player">${player.name}</td>
      <td class="leaderboard-xp">${player.xp} XP</td>
      <td class="leaderboard-percent">${player.percent}%</td>
      <td class="leaderboard-rank-name">${player.rankName}</td>
    `;
    
    body.appendChild(row);
  });
}

// Celebration Modal
function showCelebrationModal() {
  const modal = document.getElementById('celebration-modal');
  if (modal) {
    modal.classList.add('open');
  }
}

function hideCelebrationModal() {
  const modal = document.getElementById('celebration-modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Sound Control button UI
function updateSoundButtonUI() {
  const soundIcon = document.getElementById('sound-icon');
  const soundBtn = document.getElementById('sound-btn');
  if (!soundIcon || !soundBtn) return;
  
  if (soundFX.muted) {
    soundIcon.className = 'fa-solid fa-volume-xmark';
    soundBtn.style.borderColor = 'rgba(255, 0, 127, 0.25)';
    soundBtn.className = 'btn btn-icon btn-danger';
  } else {
    soundIcon.className = 'fa-solid fa-volume-high';
    soundBtn.style.borderColor = 'rgba(0, 240, 255, 0.25)';
    soundBtn.className = 'btn btn-icon btn-neon-cyan';
  }
}

// Auth error notification banner helpers
function showAuthError(msg) {
  const banner = document.getElementById('auth-error-banner');
  if (banner) {
    banner.textContent = msg;
    banner.style.display = 'block';
  }
}

function clearAuthError() {
  const banner = document.getElementById('auth-error-banner');
  if (banner) {
    banner.style.display = 'none';
  }
}

// Initialization on load
document.addEventListener('DOMContentLoaded', () => {
  soundFX = new SoundFX();
  confetti = new ConfettiEngine('confetti-canvas');
  
  // Load profiles from localStorage
  const savedProfiles = localStorage.getItem(PROFILES_KEY);
  if (savedProfiles) {
    try {
      profiles = JSON.parse(savedProfiles);
    } catch (e) {
      profiles = {};
    }
  } else {
    profiles = {};
  }

  // Sync profiles from Supabase in the background to update leaderboard and slots
  syncProfilesFromSupabase().then(() => {
    if (activePlayer) {
      updateProgress();
      renderLeaderboard();
    } else {
      renderSaveSlots();
    }
  });

  // Toggle tab buttons (Sign In vs Sign Up)
  const tabSignin = document.getElementById('tab-signin');
  const tabSignup = document.getElementById('tab-signup');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  if (tabSignin && tabSignup && signinForm && signupForm) {
    tabSignin.addEventListener('click', () => {
      tabSignin.classList.add('active');
      tabSignup.classList.remove('active');
      signinForm.style.display = 'flex';
      signupForm.style.display = 'none';
      clearAuthError();
    });

    tabSignup.addEventListener('click', () => {
      tabSignup.classList.add('active');
      tabSignin.classList.remove('active');
      signupForm.style.display = 'flex';
      signinForm.style.display = 'none';
      clearAuthError();
    });
  }

  // Handle Sign In form submit
  if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      soundFX.init();
      clearAuthError();

      const usernameInput = document.getElementById('signin-username');
      const passwordInput = document.getElementById('signin-password');
      
      const username = usernameInput.value.trim().toUpperCase();
      const password = passwordInput.value;

      if (!username || !password) return;
      let record = null;

      // 1. Fetch from Supabase
      if (dbClient) {
        try {
          const { data, error } = await dbClient
            .from('profiles')
            .select('*')
            .eq('username', username);

          if (error) {
            showAuthError("DATABASE ERROR. TRY AGAIN.");
            return;
          }

          if (!data || data.length === 0) {
            showAuthError("PLAYER NOT FOUND! SIGN UP FIRST.");
            return;
          }

          record = data[0];
        } catch (err) {
          showAuthError("CONNECTION FAILURE.");
          return;
        }
      } else {
        // Offline / Local fallback check
        if (profiles[username]) {
          record = {
            username: username,
            password: profiles[username].password,
            progress: profiles[username].progress,
            streak: profiles[username].streak,
            last_date: profiles[username].lastDate,
            unlocked_achievements: profiles[username].unlockedAchievements,
            prev_level: profiles[username].prevLevel
          };
        } else {
          showAuthError("PLAYER NOT FOUND OFFLINE.");
          return;
        }
      }

      // 2. Validate password
      if (record.password !== password) {
        showAuthError("INCORRECT PASSWORD!");
        soundFX.playReset();
        return;
      }

      // 3. Update local caches
      profiles[username] = {
        progress: record.progress || {},
        streak: record.streak || 0,
        lastDate: record.last_date || null,
        unlockedAchievements: record.unlocked_achievements || [],
        prevLevel: record.prev_level || 1,
        password: record.password
      };
      localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));

      let localUsers = JSON.parse(localStorage.getItem(LOCAL_SAVES_KEY)) || [];
      if (!localUsers.includes(username)) {
        localUsers.push(username);
        localStorage.setItem(LOCAL_SAVES_KEY, JSON.stringify(localUsers));
      }

      // 4. Load dashboard
      usernameInput.value = '';
      passwordInput.value = '';
      loadPlayerProfile(username);
    });
  }

  // Handle Sign Up form submit
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      soundFX.init();
      clearAuthError();

      const usernameInput = document.getElementById('signup-username');
      const passwordInput = document.getElementById('signup-password');
      
      const username = usernameInput.value.trim().toUpperCase();
      const password = passwordInput.value;

      if (!username || !password) return;

      // 1. Check for duplicates in Supabase
      if (dbClient) {
        try {
          const { data, error } = await dbClient
            .from('profiles')
            .select('username')
            .eq('username', username);

          if (error) {
            showAuthError("DATABASE ERROR. TRY AGAIN.");
            return;
          }

          if (data && data.length > 0) {
            showAuthError("USERNAME ALREADY TAKEN!");
            return;
          }

          // 2. Create profile remotely
          const { error: insertError } = await dbClient
            .from('profiles')
            .insert({
              username: username,
              password: password,
              progress: {},
              streak: 0,
              last_date: null,
              unlocked_achievements: [],
              prev_level: 1
            });

          if (insertError) {
            showAuthError("FAILED TO CREATE PROFILE.");
            return;
          }
        } catch (err) {
          showAuthError("CONNECTION FAILURE.");
          return;
        }
      }

      // 3. Update local caches
      profiles[username] = {
        progress: {},
        streak: 0,
        lastDate: null,
        unlockedAchievements: [],
        prevLevel: 1,
        password: password
      };
      localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));

      let localUsers = JSON.parse(localStorage.getItem(LOCAL_SAVES_KEY)) || [];
      if (!localUsers.includes(username)) {
        localUsers.push(username);
        localStorage.setItem(LOCAL_SAVES_KEY, JSON.stringify(localUsers));
      }

      // 4. Load dashboard
      usernameInput.value = '';
      passwordInput.value = '';
      loadPlayerProfile(username);
    });
  }
  
  // Handle Logout button click
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      soundFX.init();
      logoutPlayer();
    });
  }
  
  // Sound FX button toggle click
  const soundBtn = document.getElementById('sound-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundFX.init();
      soundFX.toggleMute();
      updateSoundButtonUI();
      if (!soundFX.muted) {
        soundFX.playCheck();
      }
    });
  }
  
  // Reset active player progress
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      soundFX.init();
      const confirmReset = confirm(`Are you sure you want to reset all progress for PLAYER "${activePlayer}"? This cannot be undone.`);
      
      if (confirmReset) {
        soundFX.playReset();
        
        userProgress = {};
        userStreak = 0;
        userLastDate = null;
        userUnlockedAchievements = [];
        userPrevLevel = 1;
        
        saveCurrentProfile();
        sessionStorage.removeItem('full_confetti_triggered');
        
        renderSyllabus();
        updateProgress();
        renderLeaderboard();
        
        // Expand first card
        const firstCardReset = document.getElementById('category-card-1');
        if (firstCardReset) {
          firstCardReset.classList.add('active');
          const panel = firstCardReset.querySelector('.category-content-panel');
          if (panel) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        }
      }
    });
  }
  
  // Close Stage Clear Modal
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      soundFX.init();
      soundFX.playCheck();
      hideCelebrationModal();
    });
  }
  
  const modalBackdrop = document.getElementById('celebration-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        soundFX.init();
        hideCelebrationModal();
      }
    });
  }
  
  // Auto-login active session if found
  const lastActivePlayer = localStorage.getItem(ACTIVE_PLAYER_KEY);
  if (lastActivePlayer && profiles[lastActivePlayer]) {
    // soundFX.muted = true temporarily to avoid autoplay audio context warnings on start
    const originalMute = soundFX.muted;
    soundFX.muted = true;
    
    loadPlayerProfile(lastActivePlayer);
    
    soundFX.muted = originalMute;
    updateSoundButtonUI();
  } else {
    // Show login screen
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('app-container').style.display = 'none';
    renderSaveSlots();
  }
});
