import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {

    const sectionref = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    
    
    

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index)=>{
        gsap.fromTo(
            card,
            {
                y:50, opacity: 0
            },
            {
                y:0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index +1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    })
        gsap.fromTo(
            sectionref.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    }, []);



  return (
    <section id="work" ref={sectionref} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
              {/* LEFT*/ }
              <div className='first-project-wrapper' ref={project1Ref} >
                <div className='image-wrapper'>
                    <img src="/images/Ai4see.png" alt="Ryde" />
                </div>
                <div className='text-content'>
                  <h2>Empowering Vision with AI — Seamless, Intelligent Image & Video Analysis at Your Fingertips.</h2>
                  <p className='text-white-50 md:text-xl'>
                      A Webpage built with React+Vite along with TailwindCSS for a
                      fast, user-friendly experience.
                  </p>
                </div>
              </div>

              {/*Right */}
              <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref} >
                    <div className='image-wrapper bg-[#2b2f35]'>
                        <img src="/images/myhome.png" alt="My Home" />
                    </div>
                    <h2>E-commerce Website</h2>
                </div>

                <div className='project' ref={project3Ref}>
                    <div className='image-wrapper bg-[#2d4232]'>
                        <img src="/images/sportify.png" alt="Sportify" />
                    </div>
                    <h2>Sportify-Clone</h2>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection