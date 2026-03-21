import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p>
<Link href="/meals" style={{ display: 'block', textAlign: 'center', marginTop: '20px', color: 'white' }}>
        Meals
      </Link>
      </p>
      <p>
<Link href="/meals/share" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: 'white' }}>
        Share Meals
      </Link>
      </p>
      <p>
 <Link href="/community" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: 'white' }}>
        Community
      </Link>
      </p>
     
    </main>
  );
}
