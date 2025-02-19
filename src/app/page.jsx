import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <NavBar />
      <Emboss
        innerClassName="text-lg rounded-2xl flex-col gap-y-3 px-16 py-16"
      >
        <p className="w-full text-center">Element 1</p>
        <p className="w-full text-center">Element 2</p>
        <p className="w-full text-center">Element 3</p>
        <p className="w-full text-center">Element 4</p>
      </Emboss>
    </div>
  );
}
