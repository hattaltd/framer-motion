import { NextPage } from 'next';
import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';
import { btmToTop, btn_hover, contain, l_to_r, r_to_l } from '../configuration/framer-variants';

import classNames from 'classnames';
import { useState } from 'react';

const Home:NextPage = () => {

    const [show, setShow] = useState(false);

    const fn_show = () => {
        setShow(!show);
    }

    return (
        <main
            className={classNames(
                "",
            )}
        >
            <header
                className={classNames(
                    "bg-slate-50"
                )}
            >
                <div className="h-[0.35rem] bg-gradient-to-r from-[#fb8817] via-[#ff4b01] to-[#e02aff]" />

                <nav 
                    className="flex justify-between max-w-7xl mx-auto py-3"
                >
                    <h1 >Logo</h1>
                    <ul className="flex gap-x-10" >
                        {   ['About', 'Skill', 'Project'].map((i, index) =>
                            <li
                                key={index}
                            >
                                {i}
                            </li>
                        )}
                    </ul>
                    <button>Learn More</button>
                </nav>

            </header>

            {/* START first section */}
            <motion.section
                className={classNames(
                    "grid grid-cols-1 lg:grid-cols-[60%_40%] max-w-7xl mx-auto py-20" 
                )}
                variants={contain}
                initial='initial'
                animate='animate'
            >
                {/* col-1 */}
                <motion.div 
                    className="flex flex-col gap-y-16" 
                    variants={l_to_r}
                >
                    {/* title */}
                    <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                    {/* description */}
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda tempora vitae facere laborum 
                        id similique optio corporis culpa provident deserunt accusantium quaerat non, placeat totam suscipit. Fugit, quis doloribus!
                    </p>
                    
                    {/* button */}
                    <motion.div 
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }}
                        className="bg-green-700 place-self-start text-clr-bg-primary py-2 px-6 rounded font-medium text-xl"
                    >
                        Let's Discover
                    </motion.div>

                </motion.div>
                
                {/* col-2 */}
                <motion.span
                    variants={r_to_l}
                    // initial= {{
                    //     x: 70,
                    //     opacity: 0
                    // }}
                    // animate= {{
                    //     x: 0,
                    //     opacity: 1,
                    //     transition: { duration: 0.7 }
                    // }}
                    className="relative w-4/6 h-5/6 block justify-self-end self-center"
                >
                    <Image 
                        alt="Svg Illustration"
                        src="/winter.png"
                        fill
                        quality={100}
                    />
                </motion.span>

            </motion.section>{/* END first section */}
            
            {/* START second section */}
            <section
                className="pt-96 pb-40"
            >
                <motion.div
                    className={classNames(
                        "grid grid-cols-1 lg:grid-cols-[60%_40%] max-w-7xl mx-auto border" 
                    )}
                    variants={contain}
                    initial='initial'
                    whileInView={'animate'}
                    viewport={{once:true}}
                >
                    {/* col-1 */}
                    <motion.div 
                        className="flex flex-col gap-y-16 order-2" 
                        variants={btmToTop}
                    >
                        <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda tempora vitae facere laborum 
                            id similique optio corporis culpa provident deserunt accusantium quaerat non, placeat totam suscipit. Fugit, quis doloribus!</p>
                        <p className="bg-green-700 place-self-start text-clr-bg-primary py-2 px-6 rounded font-medium text-xl">Let's Discover</p>
                    </motion.div>
                    
                    {/* col-2 */}
                    <motion.span
                        variants={btmToTop}
                        className="relative w-3/6 h-4/6 block justify-self-center self-center order-1"
                    >
                        <Image 
                            alt="Svg Illustration"
                            src="/winter.png"
                            fill
                            quality={100}
                        />
                    </motion.span>
                </motion.div>

            </section>{/* END second section */}

            <section
                className="max-w-7xl mx-auto py-64"
            >

                <h1>This is a Third section</h1>

                <button
                    className="mt-10 bg-green-500 py-2 px-4 rounded-md text-white font-medium"
                    onClick={fn_show}
                >Show
                </button>
                
                <AnimatePresence >
                {   show &&
                    <motion.div
                        // key="modal"
                        variants={r_to_l} 
                        initial={'initial'}
                        animate={'animate'}
                        exit={{
                            opacity: 0,
                            y: 70
                        }}
                        className="mt-10 border flex flex-col"
                    >
                        <h1 className="text-lg font-semibold">I'm a card</h1>
                        <p className="mt-2">This card contains something useful</p>
                    </motion.div>
                }
                </AnimatePresence>

                {/* <div 
                        className="mt-10 border flex flex-col"
                    >
                        <h1 className="text-lg font-semibold">I'm a second card</h1>
                        <p className="mt-2">This card contains something useful</p>
                    </div> */}
                

            </section>

        </main>
    )
}
export default Home;
