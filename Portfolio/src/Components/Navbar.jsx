// import React from 'react'
import {Link,NavLink} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
// import { faBlog } from '@fortawesome/free-solid-svg-icons'
// import { faAward } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
// function Navbar({ toggleGradient, toggleYellow }) {

//   return (
//     <>
//       <header className='h-[131%] bg-gradient-to-r from-slate-900 to-slate-800 w-16 absolute left-[93.4%] mt-14 md:block hidden'>
//           <table>
//             <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200'/ ></button></td>
//             </tr>
//             <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button onClick={toggleGradient}><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200' / ></button></td>
//             </tr>
//             <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button onClick={toggleYellow}><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200' / ></button></td>
//             </tr>
//             <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button><FontAwesomeIcon icon={faUser} className='w-14 h-10 text-slate-200'/></button></td>
//             </tr>
//               <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button><FontAwesomeIcon icon={faBriefcase} className='w-14 h-10 text-slate-200'/></button></td>
//             </tr>
//               <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button><FontAwesomeIcon icon={faBlog} className='w-14 h-10 text-slate-200'/></button></td>
//             </tr>
//               <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button><FontAwesomeIcon icon={faAward} className='w-14 h-10 text-slate-200'/></button></td>
//             </tr>
//               <tr>
//               <td className='border-b-2 border-green-700 pt-5 pb-5'><button><FontAwesomeIcon icon={faEnvelope} className='w-14 h-10 text-slate-200'/></button></td>
//             </tr>
//             <div className='bg-slate-700'>
//                <tr>
//               <td className='pt-5 pb-5 pl-2'><button><FontAwesomeIcon icon={faLinkedin} className='w-10 h-8 text-slate-200'/></button></td>
//             </tr>
//               <tr>
//               <td className='pt-5 pb-5 pl-2'><button><FontAwesomeIcon icon={faSquareInstagram} className='w-10 h-8 text-slate-200' /></button></td>
//             </tr>
//               <tr>
//               <td className='pt-5 pb-5 pl-2'><button><FontAwesomeIcon icon={faSquareWhatsapp} className='w-10 h-8 text-slate-200' /></button></td>
//             </tr>
//             </div>
//           </table>
//          </header>
//   </>
//   )
// }

// export default Navbar


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faBriefcase,
  faAward,
  faEnvelope,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faSquareInstagram,
  faSquareWhatsapp
} from '@fortawesome/free-brands-svg-icons';

function Navbar({ toggleGradient, toggleYellow }) {
  return (
    <>
      <header className='h-[105%] bg-gradient-to-r from-slate-900 to-slate-800 w-16 absolute left-[93.4%] mt-14 md:block hidden'>
        <table>
          <tbody>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
               <NavLink to=''> <button><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            {/* <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <button onClick={toggleGradient}><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200' /></button>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <button onClick={toggleYellow}><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200' /></button>
              </td>
            </tr> */}
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
               <NavLink to='/About'> <button><FontAwesomeIcon icon={faUser} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <NavLink to='/Projects'><button><FontAwesomeIcon icon={faBriefcase} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <NavLink to='/Skills'><button><FontAwesomeIcon icon={faLaptopCode} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <NavLink to='/CertfCard'><button><FontAwesomeIcon icon={faAward} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <Link to="mailto:gk0507818@gmail.com"><button><FontAwesomeIcon icon={faEnvelope} className='w-14 h-10 text-slate-200' /></button></Link>
              </td>
            </tr>
            {/* Social Icons */}
            <tr>
              <td className='pt-5 pb-5 pl-2 bg-slate-700'>
               <Link to='https://www.linkedin.com/in/gulshan-kumar-ray-5243072b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> <button><FontAwesomeIcon icon={faLinkedin} className='w-10 h-8 text-slate-200' /></button></Link>
              </td>
            </tr>
            <tr>
              <td className='pt-5 pb-5 pl-2 bg-slate-700'>
                <Link to='https://www.instagram.com/raygulshan2003' target='_blank'><button><FontAwesomeIcon icon={faSquareInstagram} className='w-10 h-8 text-slate-200'/></button></Link>
              </td>
            </tr>
            <tr>
              <td className='pt-5 pb-5 pl-2 bg-slate-700'>
                <Link to='https://wa.me/9354330996?text="Hello"'><button><FontAwesomeIcon icon={faSquareWhatsapp} className='w-10 h-8 text-slate-200' target='_blank'/></button></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </header>


       <header className='h-[100%] bg-gradient-to-r from-slate-900 to-slate-800 w-14 ml-[2px] absolute left-[85%] mt-36 block md:hidden'>
        <table>
          <tbody>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
               <NavLink to=''> <button><FontAwesomeIcon icon={faHouse} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
           
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
              <NavLink to="/About"><button><FontAwesomeIcon icon={faUser} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <NavLink to='/Projects'><button><FontAwesomeIcon icon={faBriefcase} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
               <NavLink to="/Skills"> <button><FontAwesomeIcon icon={faLaptopCode} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
              <NavLink to="/CertfCard"><button><FontAwesomeIcon icon={faAward} className='w-14 h-10 text-slate-200' /></button></NavLink>
              </td>
            </tr>
            <tr>
              <td className='border-b-2 border-green-700 pt-5 pb-5'>
                <Link to="mailto:gk0507818@gmail.com"><button><FontAwesomeIcon icon={faEnvelope} className='w-14 h-10 text-slate-200' /></button></Link>
              </td>
            </tr>
            {/* Social Icons */}
            <tr>
              <td className='pt-5 pb-5 pl-2 bg-slate-700'>
                <Link to="https://www.linkedin.com/in/gulshan-kumar-ray-5243072b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><button><FontAwesomeIcon icon={faLinkedin} className='w-10 h-8 text-slate-200'/></button></Link>
              </td>
            </tr>
            <tr>
              <td className='pt-5 pb-5 pl-2 bg-slate-700'>
                <Link to="https://www.instagram.com/raygulshan2003" target='_blank'><button><FontAwesomeIcon icon={faSquareInstagram} className='w-10 h-8 text-slate-200' /></button></Link>
              </td>
            </tr>
            <tr>
              <td className='pt-5 pb-5 pl-2 bg-slate-700'>
                <Link to='https://wa.me/9354330996?text="Hello"' target='_blank'><button><FontAwesomeIcon icon={faSquareWhatsapp} className='w-10 h-8 text-slate-200' /></button></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </>
  );
}

export default Navbar;

