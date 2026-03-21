import './style.css'

// FOUC対策: CSS読み込み後にbodyを表示
document.body.classList.add('loaded')

// モバイルメニュー
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
  })

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
    })
  })
}

// FAQ アコーディオン
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling
    const icon = button.querySelector('.faq-icon')
    const isOpen = answer.classList.contains('open')

    document.querySelectorAll('.faq-answer.open').forEach(el => {
      el.classList.remove('open')
    })
    document.querySelectorAll('.faq-icon').forEach(el => {
      el.style.transform = ''
    })
    document.querySelectorAll('.faq-toggle').forEach(el => {
      el.setAttribute('aria-expanded', 'false')
    })

    if (!isOpen) {
      answer.classList.add('open')
      icon.style.transform = 'rotate(180deg)'
      button.setAttribute('aria-expanded', 'true')
    }
  })
})

// ========================================
// スクロールアニメーション
// ========================================
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      animObserver.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
})

document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right').forEach(el => {
  animObserver.observe(el)
})

// ========================================
// カウントアップアニメーション
// ========================================
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target
      const target = parseInt(el.dataset.count, 10)
      const duration = 1200
      const start = performance.now()

      const animate = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        el.textContent = Math.round(eased * target)
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
      countObserver.unobserve(el)
    }
  })
}, { threshold: 0.5 })

document.querySelectorAll('.count-up').forEach(el => {
  countObserver.observe(el)
})

// ========================================
// プログレスバーアニメーション
// ========================================
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target
      const targetWidth = el.dataset.width
      if (targetWidth) {
        setTimeout(() => {
          el.style.width = targetWidth
        }, 200)
      }
      barObserver.unobserve(el)
    }
  })
}, { threshold: 0.3 })

document.querySelectorAll('.progress-bar').forEach(el => {
  barObserver.observe(el)
})

// ========================================
// ヘッダースクロール時の影
// ========================================
const header = document.querySelector('header')
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-sm')
    } else {
      header.classList.remove('shadow-sm')
    }
  }, { passive: true })
}

// ========================================
// トップに戻るボタン
// ========================================
const scrollBtn = document.createElement('button')
scrollBtn.innerHTML = '<span class="material-icons-outlined text-[24px]">keyboard_arrow_up</span>'
scrollBtn.className = 'fixed bottom-24 right-6 z-50 w-12 h-12 bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-600 transition-all opacity-0 pointer-events-none'
scrollBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
scrollBtn.style.transform = 'translateY(20px)'
scrollBtn.setAttribute('aria-label', 'トップに戻る')
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
document.body.appendChild(scrollBtn)

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.style.opacity = '1'
    scrollBtn.style.pointerEvents = 'auto'
    scrollBtn.style.transform = 'translateY(0)'
  } else {
    scrollBtn.style.opacity = '0'
    scrollBtn.style.pointerEvents = 'none'
    scrollBtn.style.transform = 'translateY(20px)'
  }
}, { passive: true })

// ========================================
// ヒーロー背景オーブ追従（常時アニメ + マウス/タッチで強く反応）
// ========================================
const hero = document.getElementById('hero')
const glow1 = document.getElementById('hero-glow-1')
const glow2 = document.getElementById('hero-glow-2')
const glow3 = document.getElementById('hero-glow-3')

if (hero && glow1 && glow2) {
  const orbs = [glow1, glow2, glow3].filter(Boolean)

  const activate = () => orbs.forEach(o => o.classList.add('js-active'))
  const deactivate = () => {
    orbs.forEach(o => {
      o.style.left = ''
      o.style.top = ''
    })
    // スタイルクリア後にクラスを外してアニメ復帰
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        orbs.forEach(o => o.classList.remove('js-active'))
      })
    })
  }

  const moveGlow = (clientX, clientY) => {
    const rect = hero.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = (clientY - rect.top) / rect.height

    activate()
    glow1.style.left = `${x * 70}%`
    glow1.style.top = `${y * 50}%`
    glow2.style.left = `${15 + x * 50}%`
    glow2.style.top = `${10 + y * 50}%`
    if (glow3) {
      glow3.style.left = `${25 + x * 40}%`
      glow3.style.top = `${15 + y * 40}%`
    }
  }

  hero.addEventListener('mousemove', (e) => {
    moveGlow(e.clientX, e.clientY)
  }, { passive: true })

  hero.addEventListener('mouseleave', deactivate)

  hero.addEventListener('touchstart', (e) => {
    moveGlow(e.touches[0].clientX, e.touches[0].clientY)
  }, { passive: true })

  hero.addEventListener('touchmove', (e) => {
    moveGlow(e.touches[0].clientX, e.touches[0].clientY)
  }, { passive: true })

  hero.addEventListener('touchend', () => {
    setTimeout(deactivate, 1500)
  })
}

// ========================================
// お問い合わせフォーム送信
// ========================================
const contactForm = document.getElementById('contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalHTML = submitBtn.innerHTML

    // 送信中の状態
    submitBtn.disabled = true
    submitBtn.innerHTML = '<span class="inline-flex items-center">送信中...<span class="material-icons-outlined ml-2 text-[18px] animate-spin">sync</span></span>'

    // FormData → JSON
    const formData = new FormData(contactForm)
    const data = {}
    formData.forEach((value, key) => {
      if (key !== 'privacy') data[key] = value
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok && result.success) {
        contactForm.reset()
        contactForm.insertAdjacentHTML(
          'beforebegin',
          '<div class="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-sm mb-6" id="contact-success">お問い合わせを送信しました。確認メールをお送りしますので、しばらくお待ちください。</div>'
        )
        // 5秒後にメッセージを消す
        setTimeout(() => {
          document.getElementById('contact-success')?.remove()
        }, 5000)
      } else {
        alert(result.error || '送信に失敗しました。時間をおいてお試しください。')
      }
    } catch {
      alert('通信エラーが発生しました。ネットワーク接続を確認してください。')
    } finally {
      submitBtn.disabled = false
      submitBtn.innerHTML = originalHTML
    }
  })
}
