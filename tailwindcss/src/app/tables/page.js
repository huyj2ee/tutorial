export default function Home() {
  return (
    <>
      <div>
        <p>12.1. Tailwind CSS Border Collapse</p>
        <b>Tailwind CSS Border Collapse Class</b>
        <div className="grid grid-flow-col text-center p-2">
          <table className="border-collapse border border-green-900">
            <thead>
              <tr>
                <th className="border border-green-600">Frameworks</th>
                <th className="border border-green-600">Release Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600">Tailwind CSS</td>
                <td className="border border-green-600">2019</td>
              </tr>
              <tr>
                <td className="border border-green-600">Bulma</td>
                <td className="border border-green-600">2016</td>
              </tr>
              <tr>
                <td className="border border-green-600">Bootstrap</td>
                <td className="border border-green-600">2011</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>&nbsp;</p>
        <p>12.2. Tailwind CSS Table Layout</p>
        <b>Tailwind CSS table-auto Class</b>
        <div className="bg-green-200">
          <table className="table-auto border-separate border border-green-900">
            <thead>
              <tr>
                <th className="border border-green-600">Frameworks</th>
                <th className="border border-green-600">About</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600">Tailwind CSS</td>
                <td className="border border-green-600">
                    Tailwind CSS is a highly customizable,
                    low-level CSS framework that gives you all
                    of the building blocks
                </td>
              </tr>
              <tr>
                <td className="border border-green-600">Bulma</td>
                <td className="border border-green-600">
                    Bulma CSS by @jgthms is just perfect.
                    Simple, easily customizable and doesn't
                    impose Javascript implementations.
                </td>
              </tr>
              <tr>
                <td className="border border-green-600">Bootstrap</td>
                <td className="border border-green-600">
                    Bootstrap is a free and open-source CSS
                    framework directed at responsive, mobile-first
                    front-end web development.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <b>Tailwind CSS table-fixed Class</b>
        <div className="bg-green-200">
          <table className="table-fixed border-separate border border-green-900 w-[100%]">
            <thead>
              <tr>
                <th className="border border-green-600 w-1/4">Frameworks</th>
                <th className="border border-green-600 w-3/4">About</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600">Tailwind CSS</td>
                <td className="border border-green-600">
                    Tailwind CSS is a highly customizable,
                    low-level CSS framework that gives you all
                    of the building blocks
                </td>
              </tr>
              <tr>
                <td className="border border-green-600">Bulma</td>
                <td className="border border-green-600">
                    Bulma CSS by @jgthms is just perfect.
                    Simple, easily customizable and doesn't
                    impose Javascript implementations.
                </td>
              </tr>
              <tr>
                <td className="border border-green-600">Bootstrap</td>
                <td className="border border-green-600">
                    Bootstrap is a free and open-source CSS
                    framework directed at responsive, mobile-first
                    front-end web development.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
