import { NextPage } from 'next';
import { motion } from 'framer-motion';

import classNames from 'classnames';
import Image from 'next/image';

const Home:NextPage = () => {

    const contain = {
        animate: {
            transition: {
                staggerChildren: 0.4, // children
                delayChildren: 0.4,
            }
        }
    }

    const btmToTop = {
        initial: {
            y: -70,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { type: 'tween', duration: 0.7 }
        }
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
                    className="relative w-5/6 h-5/6 block justify-self-end self-center"
                >
                    <Image 
                        alt="Svg Illustration"
                        src="/winter.png"
                        fill
                        quality={100}
                    />
                </motion.span>

            </motion.section>

        </main>
    )
}
export default Home;
