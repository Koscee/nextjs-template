import Hero from '@/components/hero';
import performanceImg from '@/public/performance.jpg';

export default function PerformancePage() {
  return (
    <>
      <Hero
        title="We Serve High Performance Application"
        imgAlt="welding"
        imgData={performanceImg}
      />
    </>
  );
}
