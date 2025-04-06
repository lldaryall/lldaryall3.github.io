document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use default (light)
  const savedTheme = localStorage.getItem("theme") || "light"
  htmlElement.setAttribute("data-theme", savedTheme)

  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    htmlElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  })

  // Typing effect
  const typingElement = document.querySelector(".typing")
  const phrases = ["Computer Science Major", "Business Minor", "AWS Certified", "WICS President at FSU"]
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  function typeText() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 100
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true
      typingSpeed = 1500 // Pause at the end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      typingSpeed = 500 // Pause before typing next phrase
    }

    setTimeout(typeText, typingSpeed)
  }

  // Start the typing animation
  setTimeout(typeText, 1000)

  // Scroll animations
  const revealElements = document.querySelectorAll(".fade-in, .reveal-text")
  const revealText = document.querySelector(".reveal-text")

  function checkScroll() {
    const windowHeight = window.innerHeight
    const revealPoint = 150

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active")
      }
    })
  }

  // Initial check and add active class to hero text
  window.addEventListener("load", () => {
    revealText.classList.add("active")
    checkScroll()
  })

  window.addEventListener("scroll", checkScroll)

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    })
  })

  // Skill bar animation
  const skillBars = document.querySelectorAll(".skill-progress")

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0"

      setTimeout(() => {
        bar.style.width = width
      }, 500)
    })
  }

  // Trigger skill bar animation when in view
  const skillsSection = document.querySelector(".skills")

  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(skillsSection)
  }

  // Add animated characters
  const animatedCharacters = document.querySelector(".animated-characters")
  const characters = [
    "⚡",
    "✨",
    "💻",
    "🚀",
    "🔍",
    "📊",
    "🌟",
    "💡",
    "🎓",
    "📱",
    "🎯",
    "🔮",
    "🎨",
    "🎭",
    "🎬",
    "🎧",
    "📚",
    "🧠",
    "💭",
    "💬",
  ]

  // Add many more characters for visibility
  for (let i = 0; i < 50; i++) {
    const character = document.createElement("div")
    character.className = "floating-character"

    // Random character
    character.textContent = characters[Math.floor(Math.random() * characters.length)]

    // Random position
    character.style.left = `${Math.random() * 100}%`
    character.style.top = `${Math.random() * 100}%`

    // Random size - make them larger for visibility
    character.style.fontSize = `${Math.random() * 30 + 20}px`

    // Random animation duration
    character.style.animationDuration = `${Math.random() * 30 + 20}s`

    // Random delay
    character.style.animationDelay = `${Math.random() * 5}s`

    // Higher opacity for visibility
    character.style.opacity = Math.random() * 0.5 + 0.3

    // Add to container
    animatedCharacters.appendChild(character)
  }

  // Add animated dots
  for (let i = 0; i < 100; i++) {
    const dot = document.createElement("div")
    dot.className = "animated-dot"

    // Random size between 4px and 12px - larger for visibility
    const size = Math.random() * 8 + 4
    dot.style.width = `${size}px`
    dot.style.height = `${size}px`

    // Random position
    dot.style.left = `${Math.random() * 100}%`
    dot.style.top = `${Math.random() * 100}%`

    // Random animation duration
    dot.style.animationDuration = `${Math.random() * 20 + 20}s`

    // Random delay
    dot.style.animationDelay = `${Math.random() * 5}s`

    // Higher opacity for visibility
    dot.style.opacity = Math.random() * 0.5 + 0.3

    // Random color - either accent or secondary color
    dot.style.backgroundColor = Math.random() > 0.5 ? "var(--accent-color)" : "var(--secondary-color)"

    // Add to container
    animatedCharacters.appendChild(dot)
  }

  // Create emoji rain effect
  const emojiRain = document.getElementById("emoji-rain")
  const emojis = [
    "💻",
    "🚀",
    "⚡",
    "✨",
    "🌟",
    "💡",
    "🎓",
    "📱",
    "🎯",
    "🔮",
    "🎨",
    "🎭",
    "🎬",
    "🎧",
    "📚",
    "🧠",
    "💭",
    "💬",
    "🔍",
    "📊",
  ]

  // Function to create a new falling emoji
  function createEmoji() {
    const emoji = document.createElement("div")
    emoji.className = "emoji"
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]

    // Random horizontal position
    emoji.style.left = `${Math.random() * 100}%`

    // Start above the viewport
    emoji.style.top = "-50px"

    // Random size
    emoji.style.fontSize = `${Math.random() * 30 + 20}px`

    // Random animation duration
    emoji.style.animationDuration = `${Math.random() * 10 + 5}s`

    // Random opacity
    emoji.style.opacity = Math.random() * 0.7 + 0.3

    // Add to container
    emojiRain.appendChild(emoji)

    // Remove after animation completes
    setTimeout(() => {
      emoji.remove()
    }, 15000)
  }

  // Create emojis periodically
  setInterval(createEmoji, 500)

  // Create initial batch of emojis
  for (let i = 0; i < 20; i++) {
    setTimeout(createEmoji, i * 200)
  }

  // Avatar placeholder
  const avatarImg = document.getElementById("avatar-img")

  // Set a placeholder image if no image is provided
  if (avatarImg.getAttribute("src") === "avatar-placeholder.jpg") {
    // Create a canvas for a placeholder avatar
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = 200
    canvas.height = 200

    // Draw different backgrounds based on theme
    function updateAvatarPlaceholder() {
      const currentTheme = htmlElement.getAttribute("data-theme")

      if (currentTheme === "dark") {
        // Futuristic tech pattern for dark theme
        ctx.fillStyle = "#121212"
        ctx.fillRect(0, 0, 200, 200)

        // Draw some tech-looking lines
        ctx.strokeStyle = "#00ffaa"
        ctx.lineWidth = 2

        // Circuit pattern
        for (let i = 0; i < 10; i++) {
          ctx.beginPath()
          ctx.moveTo(Math.random() * 200, Math.random() * 200)
          ctx.lineTo(Math.random() * 200, Math.random() * 200)
          ctx.stroke()
        }

        // Draw DP initials
        ctx.font = "bold 60px Space Grotesk"
        ctx.fillStyle = "#00ffaa"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("DP", 100, 100)
      } else {
        // Cute pattern for light theme
        ctx.fillStyle = "#ffeef5"
        ctx.fillRect(0, 0, 200, 200)

        // Draw some cute patterns
        ctx.fillStyle = "#ff6b9d"

        // Draw small hearts
        for (let i = 0; i < 15; i++) {
          const x = Math.random() * 180 + 10
          const y = Math.random() * 180 + 10
          const size = Math.random() * 10 + 5

          drawHeart(ctx, x, y, size)
        }

        // Draw DP initials
        ctx.font = "bold 60px Quicksand"
        ctx.fillStyle = "#ff6b9d"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("DP", 100, 100)
      }

      // Update the avatar image
      avatarImg.src = canvas.toDataURL()
    }

    // Helper function to draw a heart
    function drawHeart(ctx, x, y, size) {
      ctx.beginPath()
      ctx.moveTo(x, y + size / 4)
      ctx.quadraticCurveTo(x, y, x + size / 4, y)
      ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4)
      ctx.quadraticCurveTo(x + size / 2, y, x + (size * 3) / 4, y)
      ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4)
      ctx.quadraticCurveTo(x + size, y + size / 2, x + size / 2, y + (size * 3) / 4)
      ctx.quadraticCurveTo(x, y + size / 2, x, y + size / 4)
      ctx.fill()
    }

    // Initial avatar creation
    updateAvatarPlaceholder()

    // Update avatar when theme changes
    themeToggle.addEventListener("click", updateAvatarPlaceholder)
  }

  // Chatbot functionality
  const chatbot = document.getElementById("chatbot")
  const chatbotIcon = document.getElementById("chatbot-icon")
  const chatbotWindow = document.getElementById("chatbot-window")
  const chatbotBubble = document.getElementById("chatbot-bubble")
  const pupils = document.querySelectorAll(".pupil")
  const chatbotMouth = document.querySelector(".chatbot-mouth")
  const closeChatbot = document.getElementById("close-chatbot")
  const userMessageInput = document.getElementById("user-message")
  const sendMessageBtn = document.getElementById("send-message")
  const messagesContainer = document.getElementById("chatbot-messages")

  // Make the chatbot follow the mouse with eyes
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    pupils.forEach((pupil) => {
      const rect = chatbot.getBoundingClientRect()
      const chatbotX = rect.left + rect.width / 2
      const chatbotY = rect.top + rect.height / 2

      // Calculate angle between mouse and chatbot
      const angle = Math.atan2(mouseY - chatbotY, mouseX - chatbotX)

      // Calculate pupil position (limited movement)
      const maxMove = 3
      const pupilX = Math.cos(angle) * maxMove + 3
      const pupilY = Math.sin(angle) * maxMove + 3

      pupil.style.left = pupilX + "px"
      pupil.style.top = pupilY + "px"
    })

    // Change mouth expression based on mouse position
    const windowHeight = window.innerHeight
    const smileAmount = 1 - mouseY / windowHeight

    // Adjust mouth curvature based on mouse Y position
    chatbotMouth.style.height = `${8 + smileAmount * 8}px`
    chatbotMouth.style.borderRadius = `0 0 ${10 + smileAmount * 10}px ${10 + smileAmount * 10}px`
  })

  // Toggle chatbot window
  chatbotIcon.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active")
    chatbotBubble.classList.remove("active")

    // Happy expression when clicked
    if (chatbotWindow.classList.contains("active")) {
      chatbotMouth.style.height = "16px"
      chatbotMouth.style.borderRadius = "0 0 20px 20px"
    } else {
      chatbotMouth.style.height = "12px"
      chatbotMouth.style.borderRadius = "0 0 12px 12px"
    }
  })

  // Close chatbot window
  closeChatbot.addEventListener("click", () => {
    chatbotWindow.classList.remove("active")
  })

  // Show chatbot bubble after a delay
  setTimeout(() => {
    if (!chatbotWindow.classList.contains("active")) {
      chatbotBubble.classList.add("active")

      // Hide bubble after 5 seconds
      setTimeout(() => {
        chatbotBubble.classList.remove("active")
      }, 5000)
    }
  }, 3000)

  // Chatbot responses database
  const chatbotResponses = {
    greeting: [
      "Hello! 👋 How can I help you today?",
      "Hi there! What would you like to know about Darya?",
      "Hey! I'm Darya's virtual assistant. What can I do for you?",
    ],
    about: [
      "Darya is a Computer Science major with a Business minor at Florida State University. She's passionate about technology and leadership!",
      "Darya combines her love for technology with business acumen. She's currently studying Computer Science with a Business minor at FSU.",
    ],
    contact: [
      "You can reach Darya via email at daryap101@gmail.com or by phone at +1 941-275-0410.",
      "Want to connect with Darya? Email her at daryap101@gmail.com or call +1 941-275-0410.",
    ],
    github: [
      "Check out Darya's GitHub at github.com/lldaryall to see her coding projects!",
      "Darya's code repositories can be found on GitHub: github.com/lldaryall",
    ],
    linkedin: [
      "Connect with Darya professionally on LinkedIn: linkedin.com/in/darya-pylypenko-24288b207",
      "For professional networking, find Darya on LinkedIn at linkedin.com/in/darya-pylypenko-24288b207",
    ],
    education: [
      "Darya is studying Computer Science with a Business minor at Florida State University, expected to graduate in 2026.",
      "Florida State University is where Darya is pursuing her Bachelor's in Computer Science with a Business minor (2023-2026).",
    ],
    projects: [
      "Darya is currently working on exciting projects. Check back soon for updates!",
      "New projects are in development! Darya will be showcasing them here soon.",
    ],
    languages: [
      "Darya is multilingual! She's fluent in Ukrainian, Italian, Russian, and Spanish.",
      "Impressive language skills! Darya speaks Ukrainian, Italian, Russian, and Spanish fluently.",
    ],
    certification: [
      "Darya has obtained the AWS Cloud Practitioner certification, demonstrating her cloud computing knowledge.",
      "With her AWS Cloud Practitioner certification, Darya has validated her understanding of AWS cloud services.",
    ],
    wics: [
      "Darya is the President of Women in Computer Science (WICS) at Florida State University, where she leads initiatives to support women in tech.",
      "As President of WICS at FSU, Darya works to create opportunities and community for women pursuing computer science.",
    ],
    default: [
      "I'm here to help! Feel free to ask about Darya's education, projects, skills, or contact information.",
      "I'd be happy to tell you more about Darya! You can ask about her education, skills, languages, or how to contact her.",
      "Not sure what you're looking for? You can ask about Darya's background, skills, or how to get in touch with her!",
    ],
  }

  // Handle sending messages
  function sendMessage() {
    const userMessage = userMessageInput.value.trim()

    if (userMessage) {
      // Add user message to chat
      const userMessageElement = document.createElement("div")
      userMessageElement.className = "message user-message"
      userMessageElement.innerHTML = `<p>${userMessage}</p>`
      messagesContainer.appendChild(userMessageElement)

      // Clear input
      userMessageInput.value = ""

      // Scroll to bottom
      messagesContainer.scrollTop = messagesContainer.scrollHeight

      // Simulate assistant typing
      setTimeout(() => {
        // Add assistant response
        const assistantResponse = getChatbotResponse(userMessage)
        const assistantMessageElement = document.createElement("div")
        assistantMessageElement.className = "message bot-message"
        assistantMessageElement.innerHTML = `<p>${assistantResponse}</p>`
        messagesContainer.appendChild(assistantMessageElement)

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight
      }, 1000)
    }
  }

  // Get chatbot response based on user message
  function getChatbotResponse(message) {
    message = message.toLowerCase()

    // Determine the category of response
    let category = "default"

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey") ||
      message.includes("greetings")
    ) {
      category = "greeting"
    } else if (message.includes("about") || message.includes("who is") || message.includes("tell me about")) {
      category = "about"
    } else if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("phone") ||
      message.includes("reach")
    ) {
      category = "contact"
    } else if (message.includes("github") || message.includes("code") || message.includes("repository")) {
      category = "github"
    } else if (message.includes("linkedin") || message.includes("professional") || message.includes("network")) {
      category = "linkedin"
    } else if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("university") ||
      message.includes("college")
    ) {
      category = "education"
    } else if (message.includes("project") || message.includes("work") || message.includes("portfolio")) {
      category = "projects"
    } else if (message.includes("language") || message.includes("speak") || message.includes("multilingual")) {
      category = "languages"
    } else if (message.includes("certification") || message.includes("aws") || message.includes("cloud")) {
      category = "certification"
    } else if (message.includes("wics") || message.includes("women") || message.includes("president")) {
      category = "wics"
    }

    // Get a random response from the selected category
    const responses = chatbotResponses[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Send message on button click
  sendMessageBtn.addEventListener("click", sendMessage)

  // Send message on Enter key
  userMessageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })

  // Random blinking for the chatbot
  function blinkEyes() {
    const eyes = document.querySelectorAll(".eye")

    eyes.forEach((eye) => {
      eye.style.height = "1px"
      eye.style.transform = "translateY(3px)"
    })

    setTimeout(() => {
      eyes.forEach((eye) => {
        eye.style.height = "12px"
        eye.style.transform = "translateY(0)"
      })
    }, 150)

    // Random blink interval
    const nextBlink = Math.random() * 5000 + 2000
    setTimeout(blinkEyes, nextBlink)
  }

  // Start blinking
  setTimeout(blinkEyes, 3000)

  // Show chatbot window automatically after 5 seconds
  setTimeout(() => {
    if (!chatbotWindow.classList.contains("active")) {
      chatbotWindow.classList.add("active")
    }
  }, 5000)
})

