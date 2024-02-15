import CategorieNews from "./CategorieNews";
import DateHeader from "./DateHeader";
import Logo from "./Logo";
import SearchNews from "./SearchNews";

export default function Header() {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <DateHeader />
        <Logo />
        <SearchNews />
      </div>
      <CategorieNews />
    </nav>
  );
}
