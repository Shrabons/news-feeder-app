import MainSideNews from "./MainSideNews";
import RightSidebarNews from "./RightSidebarNews";

export default function NewsBoard() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <MainSideNews />
      <RightSidebarNews />
    </div>
  );
}
