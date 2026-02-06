import Image from 'next/image'
import Link from 'next/link'

const socials = [
  { svg: 'instagram.svg', name: 'Instagram', link: 'https://www.instagram.com/itchyb4llz/' },
  { svg: 'mail.svg', name: 'work@jajdollesin.com', link: '#' },
  {
    svg: 'linkedin.svg',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jajdollesin/'
  }
]

const stacks = [
  { svg: 'next.svg', name: 'Next.js', link: 'https://nextjs.org' },
  { svg: 'react.svg', name: 'React.js', link: 'https://react.dev/' },
  { svg: 'typescript.svg', name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { svg: 'javascript.svg', name: 'JavaScript', link: 'https://www.javascript.com/' },
  { svg: 'tailwindcss.svg', name: 'Tailwindcss', link: 'https://tailwindcss.com/' },
  { svg: 'prisma.svg', name: 'Prisma', link: 'https://prisma.io/' },
  { svg: 'postgresql.svg', name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
  { svg: 'mysql.svg', name: 'MySQL', link: 'https://www.mysql.com/' },
  { svg: 'git.svg', name: 'Git', link: 'https://git-scm.com/' },
  { svg: 'github.svg', name: 'GitHub', link: 'https://github.com/' },
  { svg: 'nodejs.svg', name: 'Node.js', link: 'https://nodejs.org/' },
  { svg: 'npm.svg', name: 'NPM', link: 'https://www.npmjs.com/' },
  { svg: 'vercel.svg', name: 'Vercel', link: 'https://vercel.com/' },
  { svg: 'drizzle.svg', name: 'Drizzle', link: 'https://orm.drizzle.team/' },
  { svg: 'railway.svg', name: 'Railway', link: 'https://railway.com/' },
  { svg: 'dokploy.svg', name: 'Dokploy', link: 'https://dokploy.com/' },
  { svg: 'trpc.svg', name: 'tRPC', link: 'https://trpc.io/' }
]

export default function About() {
  return (
    <section className='mt-16 px-4 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-4xl lg:text-5xl font-bold lg:tracking-tight'>About</h2>
        <p className='text-lg mt-4 text-muted-foreground'>
          Let&apos;s Craft Beautiful & Functional Web Experiences Together
        </p>
      </div>
      <div className='mt-16 text-lg space-y-6 max-w-4xl mx-auto text-muted-foreground'>
        <p>
          <Link href='https://jajdollesin.com' target='_blank' className='underline text-blue-400'>
            Jaj Dollesin
          </Link>{' '}
          is a full-stack indie developer who enjoys building and delivering scalable online applications. He specialize
          in both frontend and backend development, with an emphasis on creating solutions that are efficient,
          user-friendly, and maintainable.
        </p>
        <p>
          He love&apos;s experimenting with new technologies, applying them to real-world projects, and continuously
          refining his workflow. His experience spans from crafting clean, responsive interfaces to architecting
          reliable backends.
        </p>
        <p>
          Beyond coding, he approach development like problem-solving—breaking down complex challenges into simple,
          elegant solutions. His current journey also includes exploring blockchain and AI-driven features and
          integrating them into web systems to push his projects even further.
        </p>
      </div>
      <div className='flex flex-wrap items-center gap-2 mt-16'>
        {socials.map(social => (
          <Link
            key={social.name}
            href={social.link}
            target='_blank'
            className='flex-none border border-zinc-700 rounded-lg px-4 py-2 group/hover hover:border-zinc-400 hover:bg-zinc-400/20'
          >
            <div className='flex items-center space-x-2'>
              <div className='w-4 h-4 flex items-center justify-center'>
                <Image
                  src={`/${social.svg}`}
                  alt='Social'
                  width={25}
                  height={25}
                  className='object-contain w-full h-full'
                />
              </div>
              <span className='text-sm text-zinc-500 group-hover/hover:text-zinc-300'>{social.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className='mt-16 max-w-4xl mx-auto'>
        <h2 className='text-4xl lg:text-5xl font-bold lg:tracking-tight mb-4 text-center'>Tech Stack</h2>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          {stacks.map(stack => (
            <Link
              key={stack.name}
              href={stack.link}
              target='_blank'
              className='flex-none border border-zinc-700 rounded-lg px-4 py-2 group/hover hover:border-zinc-400 hover:bg-zinc-400/20'
            >
              <div className='flex items-center space-x-2'>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <Image
                    src={`/${stack.svg}`}
                    alt='Stack'
                    width={25}
                    height={25}
                    className='object-contain w-full h-full'
                  />
                </div>
                <span className='text-sm text-zinc-500 group-hover/hover:text-zinc-300'>{stack.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex items-center justify-center mt-4'>
          <span className='text-zinc-500'>...and many more!</span>
        </div>
      </div>
    </section>
  )
}
