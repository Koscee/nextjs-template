import Image from 'next/image';
import homeImg from '@/public/home.jpg';

export default function Home() {
  return (
    <div>
      Home
      <div className="fixed -z-10 inset-0">
        <Image
          src={homeImg}
          alt="car factory"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
      <h1 className="py-8">Yayyy</h1>
    </div>
  );
}
