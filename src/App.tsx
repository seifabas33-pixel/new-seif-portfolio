import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Price' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const services = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

const projects = [
  {
    number: '01',
    type: 'Client',
    name: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    type: 'Personal',
    name: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    type: 'Client',
    name: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
]

const aboutDecorations = [
  {
    alt: 'Moon icon',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    alt: 'Abstract 3D object',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    alt: 'Lego icon',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    alt: '3D group',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
]

type FadeTag = 'div' | 'nav' | 'h1' | 'h2' | 'p' | 'img' | 'section'

const fadeMotionElements = {
  div: motion.create('div'),
  nav: motion.create('nav'),
  h1: motion.create('h1'),
  h2: motion.create('h2'),
  p: motion.create('p'),
  img: motion.create('img'),
  section: motion.create('section'),
} satisfies Record<FadeTag, ReturnType<typeof motion.create>>

type FadeInProps = {
  as?: FadeTag
  children?: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
} & Record<string, unknown>
 

function FadeIn({
  as = 'div',
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const Component = fadeMotionElements[as]

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

type MagnetProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  ...props
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'translate3d(0px, 0px, 0px)',
    transition: inactiveTransition,
    willChange: 'transform',
  })

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const withinX = clientX >= rect.left - padding && clientX <= rect.right + padding
      const withinY = clientY >= rect.top - padding && clientY <= rect.bottom + padding

      if (!withinX || !withinY) {
        setStyle({
          transform: 'translate3d(0px, 0px, 0px)',
          transition: inactiveTransition,
          willChange: 'transform',
        })
        return
      }

      const x = (clientX - (rect.left + rect.width / 2)) / strength
      const y = (clientY - (rect.top + rect.height / 2)) / strength

      setStyle({
        transform: `translate3d(${x}px, ${y}px, 0px)`,
        transition: activeTransition,
        willChange: 'transform',
      })
    }

    const reset = () => {
      setStyle({
        transform: 'translate3d(0px, 0px, 0px)',
        transition: inactiveTransition,
        willChange: 'transform',
      })
    }

    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('mouseleave', reset)

    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('mouseleave', reset)
    }
  }, [activeTransition, inactiveTransition, padding, strength])

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  )
}

function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a href="#contact" className={`contact-button ${className}`}>
      <Mail className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.2} />
      <span>Contact Me</span>
    </a>
  )
}

function LiveProjectButton() {
  return (
    <a href="#contact" className="live-project-button">
      <span>Live Project</span>
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
    </a>
  )
}

function AnimatedCharacter({
  character,
  index,
  total,
  progress,
}: {
  character: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = Math.min(1, (index + 1) / total)
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block align-top">
      <span className="invisible">{character === ' ' ? '\u00A0' : character}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {character === ' ' ? '\u00A0' : character}
      </motion.span>
    </span>
  )
}

function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const characters = Array.from(text)

  return (
    <p ref={ref} className={className}>
      {characters.map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

function MarqueeRow({ images, offset, direction }: { images: string[]; offset: number; direction: 'left' | 'right' }) {
  const tripled = [...images, ...images, ...images]
  const x = direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3"
        style={{
          transform: `translate3d(${x}px, 0px, 0px)`,
          willChange: 'transform',
        }}
      >
        {tripled.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`Showcase preview ${index + 1}`}
            loading="lazy"
            className="h-[270px] w-[420px] rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip px-6 pb-7 pt-6 sm:pb-8 sm:pt-8 md:px-10 md:pb-10" id="hero">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between gap-3 text-[#D7E2EA]"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium uppercase tracking-[0.22em] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-20 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m jack
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Jack portrait"
            className="h-auto w-full object-contain"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const updateOffset = () => {
      const sectionTop = sectionRef.current?.offsetTop ?? 0
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }

    updateOffset()
    window.addEventListener('scroll', updateOffset, { passive: true })
    window.addEventListener('resize', updateOffset)

    return () => {
      window.removeEventListener('scroll', updateOffset)
      window.removeEventListener('resize', updateOffset)
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] px-0 pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={marqueeImages.slice(0, 11)} offset={offset} direction="right" />
        <MarqueeRow images={marqueeImages.slice(11)} offset={offset} direction="left" />
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {aboutDecorations.map((item) => (
        <FadeIn
          key={item.alt}
          as="img"
          src={item.src}
          alt={item.alt}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`pointer-events-none absolute ${item.className}`}
        />
      ))}

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          About me
        </FadeIn>

        <div id="contact" className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
          <ContactButton className="mx-auto" />
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
      >
        Services
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[rgba(12,12,12,0.15)]">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="grid grid-cols-[auto,1fr] gap-5 border-b border-[rgba(12,12,12,0.15)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
          >
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">{service.number}</span>
            <div className="flex flex-col justify-center gap-3 sm:gap-4">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase tracking-wide">
                {service.name}
              </h3>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number]
  index: number
  total: number
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.article
        style={{ scale, ['--card-offset' as string]: `${index * 28}px` }}
        className="project-sticky rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-6 flex flex-col gap-6 md:mb-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">
              {project.number}
            </span>
            <div className="pt-2 md:pt-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/65 sm:text-sm">
                {project.type}
              </p>
              <h3 className="text-[clamp(1.6rem,4vw,4rem)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="shrink-0 pt-1 md:pt-4">
            <LiveProjectButton />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[0.4fr,0.6fr] md:gap-6">
          <div className="grid gap-4 md:gap-6">
            <img
              src={project.images[0]}
              alt={`${project.name} preview one`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview two`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} preview three`}
            loading="lazy"
            className="h-full min-h-[340px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:min-h-[420px] md:rounded-[60px]"
          />
        </div>
      </motion.article>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-24"
    >
      <FadeIn
        as="h2"
        className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20"
      >
        Project
      </FadeIn>

      <div className="mx-auto flex max-w-6xl flex-col gap-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}

export default App
