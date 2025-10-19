// Language Translations
const translations = {
  de: {
    // Navigation
    Start: "Start",
    "Über Uns": "Über Uns",
    Leistungen: "Leistungen",
    Projekte: "Projekte",
    Kontakt: "Kontakt",

    // Hero
    "Bauen mit Vertrauen – Qualität, Erfahrung, Präzision": "Bauen mit Vertrauen – Qualität, Erfahrung, Präzision",
    "Ihr Partner für Bau, Sanierung und Projektmanagement": "Ihr Partner für Bau, Sanierung und Projektmanagement",
    "Jetzt Kontaktieren": "Jetzt Kontaktieren",

    // About
    "Über Uns": "Über Uns",
    "S-M Gebrauchtbau ist ein vertrauenswürdiges Bau- und Renovierungsunternehmen mit Sitz in Deutschland. Wir konzentrieren uns auf gebrauchte Baumaterialien, Projektmanagement, Umbau und nachhaltige Baupraktiken.":
      "S-M Gebrauchtbau ist ein vertrauenswürdiges Bau- und Renovierungsunternehmen mit Sitz in Deutschland. Wir konzentrieren uns auf gebrauchte Baumaterialien, Projektmanagement, Umbau und nachhaltige Baupraktiken.",

    // Services
    "Unsere Leistungen": "Unsere Leistungen",
    Neubau: "Neubau",
    Renovierung: "Renovierung",

    // Contact
    Kontakt: "Kontakt",
    Name: "Name",
    Nachricht: "Nachricht",
    "Nachricht senden": "Nachricht senden",
  },
  sq: {
    // Navigation
    Start: "Fillimi",
    "Über Uns": "Rreth Nesh",
    Leistungen: "Shërbimet",
    Projekte: "Projektet",
    Kontakt: "Kontakti",

    // Hero
    "Bauen mit Vertrauen – Qualität, Erfahrung, Präzision": "Ndërtimi me Besim – Cilësi, Përvojë, Precizion",
    "Ihr Partner für Bau, Sanierung und Projektmanagement":
      "Partneri juaj për ndërtim, rinovim dhe menaxhim projektesh",
    "Jetzt Kontaktieren": "Na Kontaktoni Tani",

    // Contact
    Name: "Emri",
    Nachricht: "Mesazhi",
    "Nachricht senden": "Dërgo Mesazhin",
  },
  en: {
    // Navigation
    Start: "Home",
    "Über Uns": "About Us",
    Leistungen: "Services",
    Projekte: "Projects",
    Kontakt: "Contact",

    // Hero
    "Bauen mit Vertrauen – Qualität, Erfahrung, Präzision": "Building with Trust – Quality, Experience, Precision",
    "Ihr Partner für Bau, Sanierung und Projektmanagement":
      "Your partner for construction, renovation and project management",
    "Jetzt Kontaktieren": "Contact Us",

    // Contact
    Name: "Name",
    Nachricht: "Message",
    "Nachricht senden": "Send Message",
  },
}

// Current language
let currentLang = "de"

// Language Switcher
const langButtons = document.querySelectorAll(".lang-btn")
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang")
    switchLanguage(lang)

    // Update active state
    langButtons.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
  })
})

function switchLanguage(lang) {
  currentLang = lang
  document.documentElement.lang = lang

  // Update all elements with data attributes
  const elements = document.querySelectorAll("[data-de], [data-sq], [data-en]")
  elements.forEach((el) => {
    const text = el.getAttribute(`data-${lang}`)
    if (text) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text
      } else if (el.tagName === "BUTTON") {
        el.textContent = text
      } else {
        el.innerHTML = text
      }
    }
  })
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle")
const navMenu = document.getElementById("navMenu")

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  const icon = mobileToggle.querySelector("i")
  icon.classList.toggle("fa-bars")
  icon.classList.toggle("fa-times")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const icon = mobileToggle.querySelector("i")
    icon.classList.add("fa-bars")
    icon.classList.remove("fa-times")
  })
})

// Smooth Scroll for CTA Button
const ctaButton = document.querySelector(".cta-button")
ctaButton.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
})

// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll(".reveal")

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
)

revealElements.forEach((el) => {
  revealObserver.observe(el)
})

// Header Scroll Effect
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.padding = "0.5rem 0"
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)"
  } else {
    header.style.padding = "1rem 0"
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }

  lastScroll = currentScroll
})

// Project Modal
const projectCards = document.querySelectorAll(".project-card")
const modal = document.getElementById("projectModal")
const modalClose = document.getElementById("modalClose")
const modalTitle = document.getElementById("modalTitle")
const modalGallery = document.getElementById("modalGallery")
const modalDescription = document.getElementById("modalDescription")

// Project data
const projectData = {
  1: {
    title: {
      de: "Wohnkomplex Modernisierung",
      sq: "Modernizimi i Kompleksit Banimi",
      en: "Residential Complex Modernization",
    },
    description: {
      de: "Umfassende Modernisierung eines Wohnkomplexes mit 120 Wohneinheiten in Berlin. Das Projekt umfasste die Sanierung der Fassade, Erneuerung der Heizungsanlage und Installation von Solaranlagen auf dem Dach.",
      sq: "Modernizim gjithëpërfshirës i një kompleksi banimi me 120 njësi banimi në Berlin. Projekti përfshinte restaurimin e fasadës, rinovimin e sistemit të ngrohjes dhe instalimin e paneleve diellore në çati.",
      en: "Comprehensive modernization of a residential complex with 120 housing units in Berlin. The project included facade renovation, heating system renewal, and installation of solar panels on the roof.",
    },
    images: ["https://i.imgur.com/BLgxXq5.png", "https://i.imgur.com/BLgxXq5.png", "https://i.imgur.com/BLgxXq5.png"],
  },
  2: {
    title: {
      de: "Gewerbegebäude Sanierung",
      sq: "Restaurimi i Ndërtesës Komerciale",
      en: "Commercial Building Restoration",
    },
    description: {
      de: "Komplette Sanierung eines historischen Gewerbegebäudes in München. Erhaltung der historischen Fassade bei gleichzeitiger Modernisierung der Innenräume nach neuesten Standards.",
      sq: "Restaurim i plotë i një ndërtese komerciale historike në Munich. Ruajtja e fasadës historike duke modernizuar njëkohësisht hapësirat e brendshme sipas standardeve më të fundit.",
      en: "Complete restoration of a historic commercial building in Munich. Preservation of the historic facade while modernizing the interior spaces to the latest standards.",
    },
    images: [
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
    ],
  },
  3: {
    title: {
      de: "Historisches Gebäude Restaurierung",
      sq: "Restaurimi i Ndërtesës Historike",
      en: "Historic Building Restoration",
    },
    description: {
      de: "Denkmalgerechte Restaurierung eines Gebäudes aus dem 19. Jahrhundert in Hamburg. Sorgfältige Wiederherstellung historischer Details unter Einhaltung aller Denkmalschutzauflagen.",
      sq: "Restaurim i kujdesshëm i një ndërtese nga shekulli i 19-të në Hamburg. Rikthim i detajeve historike duke respektuar të gjitha kërkesat e mbrojtjes së monumenteve.",
      en: "Monument-compliant restoration of a 19th-century building in Hamburg. Careful restoration of historic details while complying with all monument protection requirements.",
    },
    images: [
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
    ],
  },
  4: {
    title: {
      de: "Neubau Bürokomplex",
      sq: "Ndërtim i Ri Kompleksi Zyrash",
      en: "New Office Complex Construction",
    },
    description: {
      de: "Neubau eines modernen Bürokomplexes mit 8.000 m² Nutzfläche in Frankfurt. Energieeffizientes Gebäude mit LEED-Zertifizierung und modernster Gebäudetechnik.",
      sq: "Ndërtim i një kompleksi modern zyrash me 8,000 m² sipërfaqe të dobishme në Frankfurt. Ndërtesë efiçiente në energji me certifikim LEED dhe teknologji ndërtimi më të fundit.",
      en: "Construction of a modern office complex with 8,000 m² of usable space in Frankfurt. Energy-efficient building with LEED certification and state-of-the-art building technology.",
    },
    images: [
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
    ],
  },
  5: {
    title: {
      de: "Nachhaltiges Wohnprojekt",
      sq: "Projekt Banimi i Qëndrueshëm",
      en: "Sustainable Housing Project",
    },
    description: {
      de: "Entwicklung eines nachhaltigen Wohnprojekts mit 45 Wohneinheiten in Stuttgart. Passivhaus-Standard mit Photovoltaik, Regenwassernutzung und begrünten Dächern.",
      sq: "Zhvillim i një projekti banimi të qëndrueshëm me 45 njësi banimi në Stuttgart. Standard shtëpie pasive me fotovoltaik, përdorim uji shiu dhe çati të gjelbëruara.",
      en: "Development of a sustainable housing project with 45 residential units in Stuttgart. Passive house standard with photovoltaics, rainwater harvesting, and green roofs.",
    },
    images: [
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
    ],
  },
  6: {
    title: {
      de: "Industriehalle Umbau",
      sq: "Rimodelimi i Halles Industriale",
      en: "Industrial Hall Conversion",
    },
    description: {
      de: "Umwandlung einer ehemaligen Industriehalle in Köln zu modernen Loft-Wohnungen und Gewerbeflächen. Erhaltung des industriellen Charakters mit zeitgemäßer Ausstattung.",
      sq: "Transformim i një halle të vjetër industriale në Cologne në apartamente moderne loft dhe hapësira komerciale. Ruajtja e karakterit industrial me pajisje bashkëkohore.",
      en: "Conversion of a former industrial hall in Cologne into modern loft apartments and commercial spaces. Preservation of industrial character with contemporary amenities.",
    },
    images: [
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
      "https://i.imgur.com/BLgxXq5.png",
    ],
  },
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project")
    const project = projectData[projectId]

    if (project) {
      // Set modal content
      modalTitle.textContent = project.title[currentLang]
      modalDescription.textContent = project.description[currentLang]

      // Clear and populate gallery
      modalGallery.innerHTML = ""
      project.images.forEach((imgSrc) => {
        const img = document.createElement("img")
        img.src = imgSrc
        img.alt = project.title[currentLang]
        modalGallery.appendChild(img)
      })

      // Show modal
      modal.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  })
})

// Close modal
modalClose.addEventListener("click", closeModal)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal()
  }
})

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal()
  }
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  }

  // Here you would typically send the data to a server
  console.log("[v0] Form submitted:", formData)

  // Show success message
  const messages = {
    de: "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
    sq: "Faleminderit për mesazhin tuaj! Do t'ju kontaktojmë së shpejti.",
    en: "Thank you for your message! We will contact you soon.",
  }

  alert(messages[currentLang])

  // Reset form
  contactForm.reset()
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Set initial language
  switchLanguage("de")

  // Trigger initial reveal for elements in viewport
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      el.classList.add("active")
    }
  })
})

// Loading Screen
window.addEventListener("load", () => {
  const loaderWrapper = document.getElementById("loaderWrapper")
  const progressFill = document.getElementById("progressFill")

  // Simulate loading progress
  let progress = 0
  const progressInterval = setInterval(() => {
    progress += 5
    progressFill.style.width = progress + "%"

    if (progress >= 100) {
      clearInterval(progressInterval)

      // Fade out loader after a short delay
      setTimeout(() => {
        loaderWrapper.classList.add("fade-out")

        // Remove loader from DOM after fade out
        setTimeout(() => {
          loaderWrapper.style.display = "none"
        }, 3000)
      }, 3000)
    }
  }, 50)
})
