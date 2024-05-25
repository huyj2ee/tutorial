export default function Home() {
  return (
    <>
      <div>
        <b>Tailwind CSS Screen Readers Class</b>
        <div className="bg-green-200 p-4 mx-16 space-y-4">
          <span className="sr-only">sr-only</span>
          <span className="not-sr-only">not-sr-only</span>
        </div>
      </div>
    </>
  );
}
