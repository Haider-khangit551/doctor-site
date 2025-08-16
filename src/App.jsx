// import React, { useEffect, useRef, useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustedBy from './components/TrustedBy'
// import Services from './components/Services'
// import Testemonial from './components/Testemonial'
// import Faq from './components/Faq'
// import ContactUs from './components/ContactUs'
// import Footer from './components/Footer'
// import AboutUs from './components/AboutUs'
// import Login from './models/Login'

// const App = () => {

//   const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

//   const dotRef = useRef(null)
//   const outerLineRef = useRef(null)


//   // track the postion of cursor----->
//   const mouse = useRef({ x: 0, y: 0 })
//   const postion = useRef({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouse.current.x = e.clientX,
//         mouse.current.y = e.clientY
//     }

//     document.addEventListener('mousemove', handleMouseMove)
//     const animate = () => {
//       postion.current.x += (mouse.current.x - postion.current.x) * 0.1
//       postion.current.y += (mouse.current.y - postion.current.y) * 0.1

//       if (dotRef.current && outerLineRef.current) {
//         dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
//         outerLineRef.current.style.transform = `translate3d(${postion.current.x - 20}px, ${postion.current.y - 20}px, 0)`
//       }

//       requestAnimationFrame(animate)

//     }



//     animate()

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove)
//     }




//   }, [])

//   return (
//     <div className='dark:bg-black relative overflow-x-hidden'>
//       <Navbar theme={theme} setTheme={setTheme} />
//       <Hero />
//       <TrustedBy />
//       <Services />
//       <AboutUs />
//       <Testemonial />
//       <Faq />
//       <ContactUs />
//       {/* <Login /> */}
//       <Footer />


//       {/* Custom Cursor */}

//       <div ref={outerLineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'></div>


//       {/* Cursor k andr ki dot */}
//       <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'
//         style={{ translate: 'transform 0.1s ease-out' }}
//       ></div>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Testemonial from './components/Testemonial'
import Faq from './components/Faq'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
// import Login from './models/Login'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  const dotRef = useRef(null)
  const outerLineRef = useRef(null)

  // track cursor position
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  // show/hide cursor based on screen size
  const [showCursor, setShowCursor] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!showCursor) return // mobile me cursor off

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outerLineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outerLineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [showCursor])

  return (
    <div className="dark:bg-black relative overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <AboutUs />
      <Testemonial />
      <Faq />
      <ContactUs />
      {/* <Login /> */}
      <Footer />

      {/* Custom Cursor → only desktop/tablet */}
      {showCursor && (
        <>
          {/* Outer Circle */}
          <div
            ref={outerLineRef}
            className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
          ></div>

          {/* Inner Dot */}
          <div
            ref={dotRef}
            className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
            style={{ translate: 'transform 0.1s ease-out' }}
          ></div>
        </>
      )}
    </div>
  )
}

export default App
