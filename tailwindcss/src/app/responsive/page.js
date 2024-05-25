export default function Home() {
  return (
    <>
      <div>
        <p>&nbsp;</p>
        <b>19. Responsive Design</b>
        <br />
        <b>Responsive design example</b>
        <div>
          <img className="w-16 md:w-32 lg:w-48" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdUShU7uleBaMs3KRXvNRus5Msc_HQGnIuSVhdB1KQog_1GkeNR_wNp4zmrTdsfGBaBHfcKFu1Bjb8JlrRCmbY8Qr56zVB0H6f4om6PGnyJqaI6C5z04wnUHDW3EFOee-HCUJW3Kgk4UD8FM96KjbVcTHWV3Jto0eZL4TUMrqipkfRFX2_y7eA-xuecvMA/s1600/person1.png"/>
        </div>

        <p>&nbsp;</p>
        <b>19.1. Working mobile-first</b>
        <br />
        <b>19.1.1. Targeting mobile screens</b>
        <div className="text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <br />
        <b>19.1.2. Targeting a breakpoint range</b>
        <div className="md:max-xl:underline">
          Lorem ipsum dolor sit amet...
        </div>
        <br />
        <b>19.1.3. Targeting a single breakpoint</b>
        <div className="md:max-lg:underline">
          Lorem ipsum dolor sit amet...
        </div>

        <p>&nbsp;</p>
        <b>19.2. Using custom breakpoints</b>
        <br />
        <b>19.2.1. Customizing your theme</b>
        <div className="tablet:underline">
          Lorem ipsum dolor sit amet...
        </div>
        <div className="laptop:underline">
          Lorem ipsum dolor sit amet...
        </div>
        <div className="desktop:underline">
          Lorem ipsum dolor sit amet...
        </div>
        <br />
        <b>19.2.2. Arbitrary values</b>
        <div className="min-[320px]:text-center max-[600px]:bg-sky-300">
          Lorem ipsum dolor sit amet...
        </div>
      </div>
    </>
  );
}
