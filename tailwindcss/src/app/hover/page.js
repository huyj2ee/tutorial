export default function Home() {
  let people = [
    {
      "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdUShU7uleBaMs3KRXvNRus5Msc_HQGnIuSVhdB1KQog_1GkeNR_wNp4zmrTdsfGBaBHfcKFu1Bjb8JlrRCmbY8Qr56zVB0H6f4om6PGnyJqaI6C5z04wnUHDW3EFOee-HCUJW3Kgk4UD8FM96KjbVcTHWV3Jto0eZL4TUMrqipkfRFX2_y7eA-xuecvMA/s1600/person1.png",
      "name": "Kristen Ramos",
      "title": "Regional Paradigm Technician",
      "email": "kristen.ramos@example.com"
    },
    {
      "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQEt7gS73N81_RGDiMQmJ3QlxITH3iwNxr-bypwyCM73azlcGkAnC5KkurR9ugS4ff98z6yGkForUllxGAxW9X_Az-IVabbAG4KW3OYHdiO8bQEBNcAwJT4PaUwQ_ZxdYR2CPVjMxwPmuzZIxh1t0QtbElTpHr5k2_6iB3Oa5iTgIMKO2ozNsnJ3AXcsu0/s16000/person2.png",
      "name": "Floyd Miles",
      "title": "Product Directives Officer",
      "email": "floyd.miles@example.com"
    },
    {
      "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGQWaqiEBYpBuiLkYZFDjc3bQKHcV5N8YHvR274o8tbwwf6tYEHSeT9ro6M_XJI0-V72BnCUPR_h4WHOjm2VEnKaso48e69zbUrk7PNUtoJ3gyZi_r-AW_Bp-fbs7RXq2a1l9Vwv0GPLCM5lUbWHyf9He48-MA68GDZdGq1cWo_aoW7c0bbFJvqRhkzRnS/s16000/person3.png",
      "name": "Courtney Henry",
      "title": "Senior Designer",
      "email": "courtney.henry@example.com"
    },
    {
      "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA2VUGNSuG2l_NxcFK2XmAU-mcY_A1JTHTuKkE7KzXidGXc7VHiNaDomjQkYAVN7hpqKhRlfCqzwY6edFp_LwtzlsazwIBZBJh5ZgHWe9e7tKhUnxuUZTMDYl62vMh9GaNN9wjlg-0XOlLR1uQnEo_K3yzii_uR2OxhHcCbeWOYsaFUHNBHusbPKR0HfEE/s16000/person4.png",
      "name": "Ted Fox",
      "title": "VP, Hardware Engineering ",
      "email": "ted.fox@example.com"
    }
  ];
  return (
    <>
      <div>
        <b>Tailwind CSS Hover example</b>
        <div>
          <button className="bg-sky-500 hover:bg-sky-700">
            Save changes
          </button>
        </div>

        <p>&nbsp;</p>
        <b>Stacked modifiers example</b>
        <div>
          <button className="dark:md:hover:bg-fuchsia-600">
            Save changes
          </button>
        </div>

        <p>&nbsp;</p>
        <b>18.1. Pseudo-classes</b>
        <br />
        <b>18.1.1. Hover, focus, and active</b>
        <div>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Save changes
          </button>
        </div>

        <p>&nbsp;</p>
        <b>18.1.2. First, last, odd, and even</b>
        <div className="bg-blue-300 w-96">
          <ul role="list" className="p-6 divide-y divide-slate-200">
            {people.map(function(person, i) {
              return (
                <li className="flex py-4 first:pt-0 last:pb-0" key={i}>
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-medium text-slate-900">{person.name}</p>
                    <p className="text-sm text-slate-500 truncate">{person.email}</p>
                  </div>
                </li>            
              );
            })}
          </ul>
        </div>
        <div>
          <table>
            <tbody>
              {people.map(function(person, i) {
                return (
                  <tr className="odd:bg-orange-200 even:bg-orange-100" key={i}>
                    <td>{person.name}</td>
                    <td>{person.title}</td>
                    <td>{person.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p>&nbsp;</p>
        <b>18.1.3. Form states</b>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Username</span>
            <input type="text" defaultValue="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" defaultValue="george@krugerindustrial" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input type="password" required defaultValue="abcd1234" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              required:bg-red-100
            "/>
          </label>
        </form>

        <p>&nbsp;</p>
        <b>18.1.4. Styling based on parent state</b>
        <div>
          <a href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
            <div className="flex items-center space-x-3">
              <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
          </a>
        </div>
        <p>&nbsp;</p>
        <b>Differentiating nested groups</b>
        <div>
          <ul role="list">
            {people.map(function(person, i) {
              return (
                <li className="group/item hover:bg-slate-100" key={i}>
                  <img src={person.imageUrl} alt="" className="w-11"/>
                  <div>
                    <a href={person.imageUrl}>{person.name}</a>
                    <p>{person.title}</p>
                  </div>
                  <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible" href={person.imageUrl}>
                    <span className="group-hover/edit:text-gray-700">Call</span>
                    <span className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500">
                      &gt;
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p>&nbsp;</p>
        <b>Arbitrary groups</b>
        <div className="group is-published">
          <div className="hidden group-[.is-published]:block">
            Published
          </div>
        </div>

        <p>&nbsp;</p>
        <b>18.1.5. Styling based on sibling state</b>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" className="peer"/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form>
        <p>&nbsp;</p>
        <b>Won’t work, only previous siblings can be marked as peers</b>
        <div>
          <label>
            <span className="peer-invalid:text-red-500">Email</span>
            <input type="email" className="peer"/>
          </label>
        </div>
        <p>&nbsp;</p>
        <b>Differentiating peers</b>
        <div>
          <fieldset>
            <legend>Published status</legend>
            <input id="draft" className="peer/draft" type="radio" name="status"/>
            <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>
            <input id="published" className="peer/published" type="radio" name="status" />
            <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>
            <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
            <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
          </fieldset>
        </div>
        <p>&nbsp;</p>
        <b>Arbitrary peers</b>
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" className="is-dirty peer" required/>
          <div className="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
        </form>

        <p>&nbsp;</p>
        <b>18.1.6 Styling direct children</b>
        <div>
          <h2>Categories</h2>
          <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
            <li>Sales</li>
            <li>Marketing</li>
            <li>SEO</li>
          </ul>
        </div>
        <p>&nbsp;</p>
        <b>Won’t work, children can’t override their own styling.</b>
        <ul className="*:bg-sky-50">
          <li className="bg-red-500">Sales</li>
          <li>Marketing</li>
          <li>SEO</li>
        </ul>

        <p>&nbsp;</p>
        <b>18.1.7 Styling based on descendants</b>
        <form>
          <div>
            <label className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200">
              Google Pay
              <input type="radio" className="checked:border-indigo-500" name="pay"/>
            </label>
          </div>
          <div>
            <label className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200">
              Apple Pay
              <input type="radio" className="checked:border-indigo-500" name="pay"/>
            </label>
          </div>
          <div>
            <label className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200">
              Credit Card 
              <input type="radio" className="checked:border-indigo-500" name="pay"/>
            </label>
          </div>
        </form>
        <p>&nbsp;</p>
        <b>Styling based on the descendants of a group</b>
        <div className="group">
          <img className="h-10 w-10" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdUShU7uleBaMs3KRXvNRus5Msc_HQGnIuSVhdB1KQog_1GkeNR_wNp4zmrTdsfGBaBHfcKFu1Bjb8JlrRCmbY8Qr56zVB0H6f4om6PGnyJqaI6C5z04wnUHDW3EFOee-HCUJW3Kgk4UD8FM96KjbVcTHWV3Jto0eZL4TUMrqipkfRFX2_y7eA-xuecvMA/s1600/person1.png" />
          <h4>Spencer Sharp</h4>
          <div className="hidden group-has-[a]:block">
            abc
          </div>
          <p>Product Designer at <a href="#">planeteria.tech</a></p>
        </div>
        <div className="group">
          <img className="h-10 w-10" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQEt7gS73N81_RGDiMQmJ3QlxITH3iwNxr-bypwyCM73azlcGkAnC5KkurR9ugS4ff98z6yGkForUllxGAxW9X_Az-IVabbAG4KW3OYHdiO8bQEBNcAwJT4PaUwQ_ZxdYR2CPVjMxwPmuzZIxh1t0QtbElTpHr5k2_6iB3Oa5iTgIMKO2ozNsnJ3AXcsu0/s16000/person2.png" />
          <h4>Casey Jordan</h4>
          <div className="hidden group-has-[a]:block">
            abc
          </div>
          <p>Just happy to be here.</p>
        </div>
        <div className="group">
          <img className="h-10 w-10" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGQWaqiEBYpBuiLkYZFDjc3bQKHcV5N8YHvR274o8tbwwf6tYEHSeT9ro6M_XJI0-V72BnCUPR_h4WHOjm2VEnKaso48e69zbUrk7PNUtoJ3gyZi_r-AW_Bp-fbs7RXq2a1l9Vwv0GPLCM5lUbWHyf9He48-MA68GDZdGq1cWo_aoW7c0bbFJvqRhkzRnS/s16000/person3.png" />
          <h4>Alex Reed</h4>
          <div className="hidden group-has-[a]:block">
            abc
          </div>
          <p>A multidisciplinary designer, working at the intersection of art and technology. <a href="#">alex-reed.com</a></p>
        </div>
        <p>&nbsp;</p>
        <b>Styling based on the descendants of a peer</b>
        <fieldset>
          <legend>Today</legend>
          <div>
            <div>
              <label className="peer">
                <input type="checkbox" name="todo[1]"/>
                Create a to do list
              </label>
              <span className="peer-has-[:checked]:hidden">
                &nbsp;x
              </span>
            </div>
            <div>
              <label className="peer">
                <input type="checkbox" name="todo[1]"/>
                Check off first item
              </label>
              <span className="peer-has-[:checked]:hidden">
                &nbsp;x
              </span>
            </div>
            <div>
              <label className="peer">
                <input type="checkbox" name="todo[1]"/>
                Investigate race condition
              </label>
              <span className="peer-has-[:checked]:hidden">
                &nbsp;x
              </span>
            </div>
          </div>
        </fieldset>

        <p>&nbsp;</p>
        <b>18.2. Pseudo-elements</b>
        <br />
        <b>18.2.1 Before and after</b>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
        </label>
        <b>Default content is ''</b>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
        <b>18.2.2 Placeholder text</b>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>

        <p>&nbsp;</p>
        <b>18.2.3. File input buttons</b>
        <form className="flex items-center space-x-6">
          <div className="shrink-0">
            <img className="h-16 w-16 object-cover rounded-full" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdUShU7uleBaMs3KRXvNRus5Msc_HQGnIuSVhdB1KQog_1GkeNR_wNp4zmrTdsfGBaBHfcKFu1Bjb8JlrRCmbY8Qr56zVB0H6f4om6PGnyJqaI6C5z04wnUHDW3EFOee-HCUJW3Kgk4UD8FM96KjbVcTHWV3Jto0eZL4TUMrqipkfRFX2_y7eA-xuecvMA/s1600/person1.png" alt="Current profile photo" />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
          </label>
        </form>

        <p>&nbsp;</p>
        <b>18.2.4. List markers</b>
        <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>

        <p>&nbsp;</p>
        <b>18.2.5. Highlighted text</b>
        <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
          <p>
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine intervention
            or the kinship of all living things but I tell you Jerry at that moment,
            I <em>was</em> a marine biologist.
          </p>
        </div>

        <p>&nbsp;</p>
        <b>18.2.6. First-line and first-letter</b>
        <p className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left
        ">
          Well, let me tell you something, funny boy. Y'know that little stamp, the one
          that says "New York Public Library"? Well that may not mean anything to you,
          but that means a lot to me. One whole hell of a lot.
        </p>

        <p>&nbsp;</p>
        <b>18.2.7. Dialog backdrops</b>
        <dialog className="backdrop:bg-gray-50" open>
          <p>Greetings, one and all!</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>

        <p>&nbsp;</p>
        <b>18.3. Media and feature queries</b>
        <br />
        <b>18.3.1. Responsive breakpoints</b>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>

        <p>&nbsp;</p>
        <b>18.3.2. Prefers color scheme</b>
        <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              </svg>
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>

        <p>&nbsp;</p>
        <b>18.3.3. Prefers reduced motion</b>
        <div>
          <button type="button" className="bg-indigo-500" disabled>
            <svg className="motion-reduce:hidden animate-spin" viewBox="0 0 24 24"></svg>
            Processing...
          </button>
        </div>

        <p>&nbsp;</p>
        <b>18.3.4. Prefers contrast</b>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Social Security Number</span>
            <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
            <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
              We need this to steal your identity.
            </p>
          </label>
        </form>

        <p>&nbsp;</p>
        <b>18.3.5. Forced colors mode</b>
        <form>
          <legend> Choose a theme: </legend>
          <label>
            <input type="radio" className="forced-colors:appearance-auto appearance-none" />
            <p className="forced-colors:block hidden">
              Cyan
            </p>
            <div className="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200"></div>
            <div className="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500"></div>
          </label>
        </form>

        <p>&nbsp;</p>
        <b>18.3.6. Viewport orientation</b>
        <div>
          <div className="portrait:hidden">
              This experience is designed to be viewed in portrait. Please rotate your
              device to view the site.
          </div>
          <div className="landscape:hidden">
            <p>
              This experience is designed to be viewed in landscape. Please rotate your
              device to view the site.
            </p>
          </div>
        </div>

        <p>&nbsp;</p>
        <b>18.3.7. Print styles</b>
        <div>
          <article className="print:hidden">
            <h1>My Secret Pizza Recipe</h1>
            <p>This recipe is a secret, and must not be shared with anyone</p>
          </article>
          <div className="hidden print:block">
            Are you seriously trying to print this? It's secret!
          </div>
        </div>

        <p>&nbsp;</p>
        <b>18.3.8. Supports rules</b>
        <div className="flex supports-[display:grid]:grid">
          Hello world!
        </div>
        <p>&nbsp;</p>
        <b>Check if a property is supported</b>
        <div className="bg-black/75 supports-[backdrop-filter]:bg-black/25 supports-[backdrop-filter]:backdrop-blur">
          Hello world!
        </div>

        <p>&nbsp;</p>
        <b>18.4. Attribute selectors</b>
        <br />
        <b>18.4.1. Data attributes</b>
        <div data-size="large" className="data-[size=large]:p-8">
          Will apply p-8
        </div>
        <div data-size="medium" className="data-[size=large]:p-8">
          Will not apply p-8
        </div>

        <p>&nbsp;</p>
        <b>18.4.2. RTL support</b>
        <div className="group flex items-center">
          <img className="shrink-0 h-12 w-12 rounded-full" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdUShU7uleBaMs3KRXvNRus5Msc_HQGnIuSVhdB1KQog_1GkeNR_wNp4zmrTdsfGBaBHfcKFu1Bjb8JlrRCmbY8Qr56zVB0H6f4om6PGnyJqaI6C5z04wnUHDW3EFOee-HCUJW3Kgk4UD8FM96KjbVcTHWV3Jto0eZL4TUMrqipkfRFX2_y7eA-xuecvMA/s1600/person1.png" alt="" />
          <div className="ltr:ml-3 rtl:mr-3">
            <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900" dir="ltr">ABC</p>
            <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700" dir="rtl">XYZ</p>
          </div>
        </div>

        <p>&nbsp;</p>
        <b>18.4.3. Open/closed state</b>
        <div className="max-w-lg mx-auto p-8">
          <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Why do they call it Ovaltine?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>The mug is round. The jar is round. They should call it Roundtine.</p>
            </div>
          </details>
        </div>

        <p>&nbsp;</p>
        <b>18.5. Custom modifiers</b>
        <br />
        <b>18.5.1. Using arbitrary variants</b>
        <ul role="list">
          <li className="[&:nth-child(3)]:underline">1</li>
          <li className="[&:nth-child(3)]:underline">2</li>
          <li className="[&:nth-child(3)]:underline">3</li>
          <li className="[&:nth-child(3)]:underline">4</li>
        </ul>
        <p>&nbsp;</p>
        <b>Spaces in selector</b>
        <div className="[&_p]:mt-4">
          <p>mt-4 effect</p>
          <ul>
            <li>
              <p>mt-4 effect</p>
            </li>
            mt-4 not effect
          </ul>
        </div>
        <p>&nbsp;</p>
        <b>At-rules in arbitrary variants</b>
        <div className="flex [@supports(display:grid)]:underline">
          Grid1
        </div>
        <br />
        <b>18.5.2. Creating a plugin</b>
        <ul role="list">
          <li className="third:underline">1</li>
          <li className="third:underline">2</li>
          <li className="third:underline">3</li>
          <li className="third:underline">4</li>
        </ul>

        <p>&nbsp;</p>
        <b>18.6. Advanced topics</b>
        <br />
        <b>18.6.1. Using with your own classes</b>
        <div className="u">
          Text is underlined.
        </div>
      </div>
    </>
  );
}
