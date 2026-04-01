// *root page*
import About from "@/component/about/about";
import ContactMe from "@/component/contactme/contactme";
import Education from "@/component/education/education";
import Experience from "@/component/experience/experience";
import Homepage from "@/component/homepage/homepage";
import MySkills from "@/component/myskills/myskills";
import Navbar from "@/component/navbar/navbar";
import ThemeToggle from "@/component/themetoggle/themetoggle";

export default function Home() {
  return (
    <div className="pageshell-container">
      <Navbar/>
      <Homepage/>
      <About/>
      <Education/>
      <Experience/>
      <MySkills/>
      <ContactMe/>
      <ThemeToggle/>
    </div>
  );
}
