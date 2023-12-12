import ContactInfo from "@/components/main/ContactInfo";
import Education from "@/components/main/Education";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Education/>
        <Encryption />
        <Projects />
        <ContactInfo/>
      </div>
    </main>
  );
}
