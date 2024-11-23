import Hero from '@/components/hero';
import reliabilityImg from '@/public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <>
      <Hero
        title="Super High Reliability Hosting"
        imgAlt="welding"
        imgData={reliabilityImg}
      />
    </>
  );
}
