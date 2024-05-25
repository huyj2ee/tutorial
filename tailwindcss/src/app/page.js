import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div><Link href={"/layout"}>1. Tailwind CSS Layout</Link></div>
      <div><Link href={"/flexbox"}>2. Tailwind CSS Flexbox</Link></div>
      <div><Link href={"/grid"}>3. Tailwind CSS Grid</Link></div>
      <div><Link href={"/alignment"}>4. Tailwind CSS Alignment</Link></div>
      <div><Link href={"/spacing"}>5. Tailwind CSS Spacing</Link></div>
      <div><Link href={"/sizing"}>6. Tailwind CSS Sizing</Link></div>
      <div><Link href={"/typography"}>7. Tailwind CSS Typography</Link></div>
      <div><Link href={"/backgrounds"}>8. Tailwind CSS Backgrounds</Link></div>
      <div><Link href={"/borders"}>9. Tailwind CSS Borders</Link></div>
      <div><Link href={"/effects"}>10. Tailwind CSS Effects</Link></div>
      <div><Link href={"/filters"}>11. Tailwind Filters</Link></div>
      <div><Link href={"/tables"}>12. Tailwind CSS Tables</Link></div>
      <div><Link href={"/transition"}>13. Tailwind CSS Transitions and Animation</Link></div>
      <div><Link href={"/transforms"}>14. Tailwind CSS Transforms</Link></div>
      <div><Link href={"/interactivity"}>15. Tailwind CSS Interactivity</Link></div>
      <div><Link href={"/svg"}>16. Tailwind CSS SVG</Link></div>
      <div><Link href={"/sr"}>17. Tailwind CSS Screen Readers</Link></div>
      <div><Link href={"/hover"}>18. Handling Hover, Focus, and Other States</Link></div>
      <div><Link href={"/responsive"}>19. Responsive Design</Link></div>
      <div><Link href={"/darkmode"}>20. Dark Mode</Link></div>
      <div><Link href={"/reusingstyles"}>21. Reusing Styles</Link></div>
    </>
  );
}
