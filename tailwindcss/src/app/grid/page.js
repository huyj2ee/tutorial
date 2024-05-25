export default function Home() {
  return (
    <>
      <div>
        <p>3.1. Tailwind CSS Grid Template Columns</p>
        <b>Tailwind CSS grid-cols Class</b>
        <div id="main" className="grid grid-cols-3 gap-1 justify-evenly">
          <div className="bg-green-700 w-26 h-12">1</div>
          <div className="bg-green-500 w-26 h-12">2</div>
          <div className="bg-green-300 w-26 h-12">3</div>
          <div className="bg-green-700 w-26 h-12">4</div>
          <div className="bg-green-500 w-26 h-12">5</div>
          <div className="bg-green-300 w-26 h-12">6</div>
        </div>

        <p>&nbsp;</p>
        <p>3.2. Tailwind CSS Grid Column Start / End</p>
        <b>Tailwind CSS col-span Class</b>
        <div id="main" className="m-8 grid grid-cols-3 gap-1 justify-evenly">
          <div className="bg-green-300 rounded-lg h-12">1</div>
          <div className="bg-green-300 rounded-lg h-12">2</div>
          <div className="bg-green-300 rounded-lg h-12">3</div>
          <div className="bg-green-500 col-span-2 rounded-lg h-12">4</div>
          <div className="bg-green-300 rounded-lg h-12">5</div>
          <div className="bg-green-500 col-span-3 rounded-lg h-12">6</div>
        </div>
        <b>Tailwind CSS col-start|end Class</b>
        <div id="main" className="m-8 grid grid-cols-4 gap-1 justify-evenly">
          <div className="bg-green-500 col-start-2 col-span-2 rounded-lg h-12">1</div>
          <div className="bg-green-300 rounded-lg h-12">2</div>
          <div className="bg-green-300 rounded-lg h-12">3</div>
          <div className="bg-green-500 col-start-2 col-end-4 rounded-lg h-12">4</div>
          <div className="bg-green-300 rounded-lg h-12">5</div>
          <div className="bg-green-300 rounded-lg h-12">6</div>
          <div className="bg-green-300 rounded-lg h-12">7</div>
          <div className="bg-green-500 col-start-2 col-span-3 rounded-lg h-12">8</div>
        </div>

        <p>&nbsp;</p>
        <p>3.3. Tailwind CSS Grid Template Rows</p>
        <b>Tailwind CSS grid-rows Class</b>
        <div id="main" className="grid grid-rows-3 grid-flow-col">
          <div className="bg-green-500 rounded-lg m-4 h-12">1</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">2</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">3</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">4</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">5</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">6</div>
        </div>

        <p>&nbsp;</p>
        <p>3.4. Tailwind CSS Grid Row Start / End</p>
        <b>Tailwind CSS row-span Class</b>
        <div id="main" className="m-8 grid grid-row-3 grid-flow-col gap-1">
          <div className="bg-green-300 rounded-lg">1</div>
          <div className="bg-green-300 rounded-lg">2</div>
          <div className="bg-green-300 rounded-lg">3</div>
          <div className="bg-green-500 row-span-2 rounded-lg">4</div>
          <div className="bg-green-300 rounded-lg">5</div>
          <div className="bg-green-500 row-span-3 rounded-lg">6</div>
        </div>
        <b>Tailwind CSS row-start|end Class</b>
        <div id="main" className="m-8 grid grid-row-4 grid-flow-col gap-1 ">
          <div className="bg-green-500 row-start-2 row-span-2 rounded-lg">1</div>
          <div className="bg-green-300 rounded-lg">2</div>
          <div className="bg-green-300 rounded-lg">3</div>
          <div className="bg-green-500 row-start-2 col-end-4 rounded-lg">4</div>
          <div className="bg-green-300 rounded-lg">5</div>
          <div className="bg-green-300 rounded-lg">6</div>
          <div className="bg-green-300 rounded-lg">7</div>
          <div className="bg-green-500 row-start-2 row-span-3 rounded-lg">8</div>
        </div>

        <p>&nbsp;</p>
        <p>3.5. Tailwind CSS Grid Auto Flow</p>
        <b>Tailwind CSS grid-flow-row Class</b>
        <div className="m-8 grid grid-flow-row gap-1">
          <div className="bg-green-300 rounded-lg">1</div>
          <div className="bg-green-300 rounded-lg">2</div>
          <div className="bg-green-300 rounded-lg">3</div>
          <div className="bg-green-300 rounded-lg">4</div>
        </div>
        <b>Tailwind CSS grid-flow-col Class</b>
        <div className="m-8 grid grid-flow-col gap-1">
          <div className="bg-green-300 rounded-lg">1</div>
          <div className="bg-green-300 rounded-lg">2</div>
          <div className="bg-green-300 rounded-lg">3</div>
          <div className="bg-green-300 rounded-lg">4</div>
        </div>
        <b>Tailwind CSS grid-flow-row-dense Class</b>
        <div className="m-8 grid grid-flow-row-dense gap-1">
          <div className="bg-green-300 rounded-lg">1</div>
          <div className="bg-green-300 rounded-lg">2</div>
          <div className="bg-green-300 rounded-lg">3</div>
          <div className="bg-green-300 rounded-lg">4</div>
        </div>
        <b>Tailwind CSS grid-flow-col-dense Class</b>
        <div className="m-8 grid grid-flow-col-dense gap-1">
          <div className="bg-green-300 rounded-lg">1</div>
          <div className="bg-green-300 rounded-lg">2</div>
          <div className="bg-green-300 rounded-lg">3</div>
          <div className="bg-green-300 rounded-lg">4</div>
        </div>

        <p>&nbsp;</p>
        <p>3.6. Tailwind CSS Grid Auto Columns</p>
        <b>Tailwind CSS Grid auto-cols-auto Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-rows-2 grid-flow-col gap-4 auto-cols-auto">
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            Bootstrap become replacement of CSS
          </div>
        </div>
        <b>Tailwind CSS Grid auto-cols-min Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-rows-2 grid-flow-col gap-4 auto-cols-min">
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            Bootstrap become replacement of CSS
          </div>  
        </div>
        <b>Tailwind CSS Grid auto-cols-max Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-rows-2 grid-flow-col gap-4 auto-cols-max">
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            Bootstrap become replacement of CSS
          </div>
        </div>
        <b>Tailwind CSS Grid auto-cols-fr Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-rows-2 grid-flow-col gap-4 auto-cols-fr">
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            Bootstrap become replacement of CSS
          </div>
        </div>

        <p>&nbsp;</p>
        <p>3.7. Tailwind CSS Grid Auto Rows</p>
        <b>Tailwind CSS Grid auto-rows-auto Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-cols-2 grid-flow-row gap-4 auto-rows-auto">
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Bootstratp become replacement of CSS
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
        </div>
        <b>Tailwind CSS Grid auto-rows-min Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-cols-2 grid-flow-row gap-4 auto-rows-min">
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Bootstratp become replacement of CSS
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
        </div>
        <b>Tailwind CSS Grid auto-rows-max Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-cols-2 grid-flow-row gap-4 auto-rows-max">
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Bootstratp become replacement of CSS
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
        </div>
        <b>Tailwind CSS Grid auto-rows-fr Class</b>
        <div className="m-8 p-8 grid bg-green-600 grid-cols-2 grid-flow-row gap-4 auto-rows-fr">
          <div className="p-4 bg-green-200">
            LiveScript Become JavaScript
          </div>
          <div className="p-4 bg-green-200">
            HyperText Markup language
          </div>
          <div className="p-4 bg-green-200">
            Bootstratp become replacement of CSS
          </div>
          <div className="p-4 bg-green-200">
            Cascading Style Sheet
          </div>
        </div>

        <p>&nbsp;</p>
        <p>3.8. Tailwind CSS Gap</p>
        <b>Tailwind CSS gap-number Class</b>
        <div id="main" className="grid grid-rows-2 grid-flow-col gap-5">
          <div className="bg-green-500 rounded-lg m-4 h-12">1</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">2</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">3</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">4</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">5</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">6</div>
        </div>
        <b>Tailwind CSS gap-x-number Class</b>
        <div id="main" className="grid grid-rows-2 grid-flow-col gap-x-5">
          <div className="bg-green-500 rounded-lg m-4 h-12">1</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">2</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">3</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">4</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">5</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">6</div>
        </div>
        <b>Tailwind CSS gap-y-number Class</b>
        <div id="main" className="grid grid-rows-2 grid-flow-col gap-y-5">
          <div className="bg-green-500 rounded-lg m-4 h-12">1</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">2</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">3</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">4</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">5</div>
          <div className="bg-green-500 rounded-lg m-4 h-12">6</div>
        </div>
      </div>
    </>
  );
}
