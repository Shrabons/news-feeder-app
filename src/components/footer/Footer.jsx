import CopyRihgt from "./CopyRihgt";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
      <FooterMain />
      <CopyRihgt />
    </footer>
  );
}
