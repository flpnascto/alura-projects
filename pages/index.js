import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Alura Cases - Página Inicial</h1>
      <Link href='/faq'>
        <a>Ir para FAQ</a>
      </Link>
    </div>
  )
}

export default HomePage