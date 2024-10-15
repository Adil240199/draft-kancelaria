import Layout from './layout';
import Image from 'next/image';
export default function HomePage() {
  return (
    <Layout>
      <main>
      <h1>Welcome to the Home Page</h1>
      <Image
        src="/images/dessert-7.jpg"
        alt="icon"
        width={500}
        height={300}
      />
      </main>
    </Layout>
  );
}