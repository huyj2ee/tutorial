import React from 'react';
import { createRoot } from 'react-dom/client';
import { faCaretDown, faMagnifyingGlass, faSuitcase, faXmark, faCartShopping,
  faUser, faCheck, faLocationDot, faPhone, faEnvelope, faBars }
  from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram, faSquareSnapchat, faPinterestP, faTwitter, faLinkedinIn }
  from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './app.css';
import './style.css';

const Header : React.FunctionComponent = () => {
  return (
    <div className="fixed z-10 bg-black top-0 left-0 right-0">
      <Navigation />
      <Search />
      <Menu />
    </div>
  );
}

const Slider : React.FunctionComponent = () => {
  return (
    <div
      className="relative min-h-[500px] bg-no-repeat bg-center bg-cover bg-[#333] mt-[46px] pt-[50%]"
      style={{backgroundImage: "url('img/chicago.jpg')"}}
    >
      <div className="absolute bottom-12 text-center w-full text-white" style={{textShadow: "0 0 1px #000"}}>
        <h2 className="font-medium text-[24px]">Chicago</h2>
        <p className="text-[15px] mt-[25px]">Thank you, Chicago - A night we won't forget.</p>
      </div>
    </div>
  );
}

const Content : React.FunctionComponent = () => {
  return (
    <div>
      <About />
      <Tour />
      <Contact />
      <Image />
    </div>
  );
}

const Footer : React.FunctionComponent = () => {
  return (
    <div id="footer" className="py-16 px-4 text-center">
      <div id="socials-list" className="text-[24px] [&>a]:text-black/60 [&>a]:no-underline [&>a:hover]:text-black/40">
        <a href="">
          <FontAwesomeIcon icon={faSquareFacebook}/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faSquareSnapchat}/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faPinterestP}/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
      </div>
      <p id="copyright" className="mt-[15px] text-black/60 [&>a]:text-black/60 [&>a:hover]:text-black/40">
        Powered by <a href="" className="underline">w3.css</a>
      </p>
    </div>
  );
}

const Main : React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

const Navigation : React.FunctionComponent = () => {
  const closeMenu = (e: React.MouseEvent<HTMLUListElement>):void => {
    document.getElementById("nav").style.height = "46px";
  };

  const   handleMoreMenu = (e: React.MouseEvent<HTMLAnchorElement>):void => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <ul id="nav" className="h-[46px] list-none max-md:block max-md:[&>li]:block max-md:[&_li_a]:block inline-block [&>li]:inline-block [&_li_a]:inline-block max-md:overflow-hidden [&>li>a]:uppercase [&>li>a]:text-white [&_li_a]:no-underline [&_li_a]:leading-[46px] [&_li_a]:px-6 [&>li:hover>a]:text-black [&>li:hover>a]:bg-[#ccc]" onClick={closeMenu}>
      <li><a href="#">Home</a></li>
      <li><a href="#band">Band</a></li>
      <li><a href="#tour">Tour</a></li>
      <li><a href="#contact">Contact</a></li>
      <li className="relative group">
        <a href="#" onClick={handleMoreMenu}>
          More
          &nbsp;
          <FontAwesomeIcon icon={faCaretDown} className="text-sm"/>
        </a>
        <ul className="list-none max-md:[&_a]:text-white max-md:bg-[#333] md:absolute top-full min-w-40 hidden bg-white shadow-lg group-hover:block [&_li_a]:w-full [&_li_a]:leading-[38px] [&_li_a]:px-3 max-md:[&_li_a]:px-10 [&_li_a]:py-0 [&_a]:text-black [&_li:hover_a]:text-black [&_li:hover_a]:bg-[#ccc]">
          <li><a href="#">Merchandise</a></li>
          <li><a href="#">Extras</a></li>
          <li><a href="#">Media</a></li>
        </ul>
      </li>
    </ul>
  );
}

const Search : React.FunctionComponent = () => {
  return (
    <div className="max-md:hidden float-right leading-[46px] px-[21px] cursor-pointer hover:bg-[#f44336]">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white"/>
    </div>
  );
}

const Menu : React.FunctionComponent = () => {
  const toggleMenu = (e: React.MouseEvent<HTMLDivElement>):void => {
    if (document.getElementById("nav").clientHeight === 46) {
      document.getElementById("nav").style.height = "auto";
    } else {
      document.getElementById("nav").style.height = "46px";
    }
  };
  return (
    <div className="group absolute top-0 right-0 md:hidden leading-[46px] px-[21px] hover:bg-[#ccc]" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className="text-white group-hover:text-black"/>
    </div>
  );
}

interface BandMemberProp {
  name: string;
  src: string;
}

const BandMember : React.FunctionComponent<BandMemberProp> = (props: BandMemberProp) => {
  return (
    <div>
      <div className="max-md:w-full max-md:mt-[30px] col col-1/3 text-center">
        <p className="text-[15px]">{props.name}</p>
        <img className="mt-[15px] max-md:w-[60%] w-[154px] mx-auto rounded-[4px]" src={props.src} alt={props.name} />
      </div>
    </div>
  );
}

const About : React.FunctionComponent = () => {
  return (
    <div id="band" className="content-section">
      <h2 className="section-heading">THE BAND</h2>
      <p className="section-sub-heading text-black text-opacity-60">We love music</p>
      <p className="mt-[25px] text-[15px] text-justify leading-[1.4rem]">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="row mt-12">
        <BandMember name="Name" src="img/bandmember.jpg" />
        <BandMember name="Name" src="img/bandmember.jpg" />
        <BandMember name="Name" src="img/bandmember.jpg" />
      </div>
    </div>
  );
}

interface TicketProp {
  month: string;
  remain: number;
}

const Ticket : React.FunctionComponent<TicketProp> = (props: TicketProp) => {
  let remain:string = props.remain === 0 ? "Sold out" : props.remain.toString();
  let quantityClass:string = props.remain === 0 ? "bg-[#f44336] text-white py-[3px] px-[4px] ml-4" : "float-right w-6 h-6 mt-[-1px] bg-black text-white rounded-[50%] text-center leading-6";

  return (
    <li className="text-[#757575] text-[15px] py-[11px] px-4 border-solid border-b-[1px] border-[#ddd]">{props.month} <span className={quantityClass}>{remain}</span></li>
  );
}

interface PlaceProp {
  img: string;
  heading: string;
  time: string;
  description: string;
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Place : React.FunctionComponent<PlaceProp> = (props: PlaceProp) => {
  return (
    <div className="max-md:w-full max-md:mt-4 col col-1/3">
      <img className="block w-full hover:opacity-60" src={props.img} alt={props.img} />
      <div className="bg-white p-4 text-[15px]">
        <h3 className="text-[15px] font-semibold">{props.heading}</h3>
        <p className="mt-[15px] text-[#757575]">{props.time}</p>
        <p className="mt-[15px] leading-[1.4]">{props.description}</p>
        <button className="max-md:w-full max-md:text-center inline-block py-[11px] px-4 mt-[15px] text-white bg-black no-underline hover:text-black hover:bg-[#ccc]" onClick={props.callBack}>Buy Tickets</button>
      </div>
    </div>
  );
}

const Tour : React.FunctionComponent = () => {
  let openModal = (e: React.MouseEvent<HTMLButtonElement>):void => {
    document.getElementById("modal").style["display"] = "flex";
  };
  return (
    <div id="tour" className="bg-black">
      <div className="content-section">
        <h2 className="section-heading text-white">TOUR DATES</h2>
        <p className="section-sub-heading text-white text-opacity-60">Remember to book your tickets!</p>
        <ul className="bg-white mt-10 list-none">
          <Ticket month="September" remain={0} />
          <Ticket month="October" remain={0} />
          <Ticket month="November" remain={3} />
        </ul>
        <div className="row max-md:mt-4 mt-8">
          <Place
            img="img/newyork.jpg"
            heading="New York"
            time="Fri 27 Nov 2016"
            description="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
            callBack={openModal}
          />
          <Place
            img="img/paris.jpg"
            heading="Paris"
            time="Sat 28 Nov 2016"
            description="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
            callBack={openModal}
          />
          <Place
            img="img/sanfran.jpg"
            heading="San Francisco"
            time="Sun 29 Nov 2016"
            description="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
            callBack={openModal}
          />
        </div>
      </div>
    </div>
  );
}

const Contact : React.FunctionComponent = () => {
  return (
    <div id="contact" className="content-section">
        <h2 className="section-heading text-black">CONTACT</h2>
        <p className="section-sub-heading text-black text-opacity-60">Fan? Drop a note!</p>
        <div className="row mt-12">
          <div className="col col-1/2 max-md:w-full text-[18px] leading-[1.5]">
            <p><FontAwesomeIcon icon={faLocationDot} className="w-[30px]" /> Chicago, US</p>
            <p><FontAwesomeIcon icon={faPhone} className="w-[30px]" /> Phone: +00 151515</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="w-[30px]" /> Email: mail@mail.com</p>
          </div>
          <div className="col col-1/2 max-md:w-full text-[15px]">
            <form action="">
              <div className="row">
                <div className="col col-1/2 max-md:w-full max-md:mt-2">
                  <input className="p-[10px] border-solid border-[#ccc] border-[1px] w-full" required type="text" name="" placeholder="Name" id="" />
                </div>
                <div className="col col-1/2 max-md:w-full max-md:mt-2">
                  <input className="p-[10px] border-solid border-[#ccc] border-[1px] w-full" required type="email" name="" placeholder="Email" id="" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col w-full">
                  <input className="p-[10px] border-solid border-[#ccc] border-[1px] w-full" required type="text" name="" placeholder="Message" id="" />
                </div>
              </div>
              <input className="max-md:w-full bg-black text-white hover:bg-[#ccc] hover:text-black cursor-pointer border-solid border-[0px] w-[72px] h-[38px] leading-[100%] text-center py-[10px] px-[16px] float-right mt-4" type="submit" value="SEND" />
            </form>
          </div>
        </div>
    </div>
  );
}

const Image : React.FunctionComponent = () => {
  return (
    <div>
      <img src="img/map.jpg" alt="Map" className="w-full"/>
    </div>
  );
}

const Modal : React.FunctionComponent = () => {
  let closeModal = (e: React.MouseEvent<HTMLDivElement>):void => {
    document.getElementById("modal").style["display"] = "none";
  };
  return (
    <div id="modal" className="fixed hidden items-center justify-center top-0 bottom-0 left-0 right-0 z-10 bg-black/40" onClick={closeModal}>
      <div className="relative bg-white w-[900px] min-h-[200px] max-w-[calc(100%-32px)] animate-modalFadeIn" onClick={(e: React.MouseEvent<HTMLDivElement>) => {e.stopPropagation()}}>
        <div className="absolute right-0 top-0 text-white/80 hover:text-white p-3 cursor-pointer" onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></div>
        <header className="flex items-center justify-center bg-[#009688] h-[130px] text-[30px] text-white">
          <FontAwesomeIcon icon={faSuitcase} className="mr-4"/>
          Tickets
        </header>
        <div className="p-4">
          <label htmlFor="ticket-quantity" className="block text-[15px] mb-3">
            <FontAwesomeIcon icon={faCartShopping} />
            Tickets, $15 per person
          </label>
          <input id="ticket-quantity" type="text" placeholder="How many?" className="border border-solid border-[#ccc] w-full p-[10px] text-[15px] mb-6"/>
          <label htmlFor="ticket-email" className="block text-[15px] mb-3">
            <FontAwesomeIcon icon={faUser} />
            Send to
          </label>
          <input id="ticket-email" type="email" placeholder="Enter email..." className="border border-solid border-[#ccc] w-full p-[10px] text-[15px] mb-6"/>
          <button className="h-[54px] bg-[#009688] border-none text-white w-full text-[15px] uppercase p-[18px] hover:opacity-90">
            Pay <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
        <footer className="p-4 text-right">
          <p>Need <a href="#" className="text-[#2196f3] underline">help?</a></p>
        </footer>
      </div>
    </div>
  );
}


const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Main />
    <Modal />
    <div className='block'>
      <p className='max-lg:hidden'>PC</p>
      <p className='max-md:hidden lg:hidden'>Tablet</p>
      <p className='md:hidden'>Mobile</p>
    </div>
  </>
);
