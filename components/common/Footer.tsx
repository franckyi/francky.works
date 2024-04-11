import parse from "html-react-parser";
import getSections from "@/lib/getSections";
import Section from "@/types/Section";

export default async function Footer() {
  const sections = await getSections();
  const footer = sections.filter(
    (section: Section) => section.slug === "footer"
  );
  // const text = parse(footer[0].content.rendered);

  return (
    <footer className="w-full py-4 dark:bg-slate-900 dark:text-slate-500 text-center border-t-2 border-slate-800">
      {parse(footer[0].content.rendered)}
    </footer>
  );
}
