import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import YellowActionButton from '@/shared/YellowActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isMediumLargeScreen = useMediaQuery("(min-width: 1060px)");

    return <section 
        id="home" 
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* main header section */}
        <motion.div 
            className='md:flex mx-auto w-5/6 items-center justify-center md:5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/*header*/}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* headings */}
                <motion.div 
                    className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext before:h-20">
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>                        
                        Welcome to Evogym, the pinnacle of fitness excellence. Here, elite meets unmatched dedication. 
                        With cutting-edge equipment, personalized training, and a community committed to success, 
                        we redefine what it means to reach your peak. 
                        Experience the unrivaled excellence of Evogym – where there's simply no room for excuses.
                    </p>
                </motion.div>

                {/* call to action */}
                <motion.div 
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <YellowActionButton setSelectedPage={setSelectedPage}>
                        Join Now!
                    </YellowActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* title image */}
            <div className='flex basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-end'>
                <img src={HomePageGraphic} alt="homepg graphic"/>
            </div>
        </motion.div>

        {/* sponsor logos */}
        {isMediumLargeScreen && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img className="w-[140px]" src={SponsorForbes} alt="forbes"/>
                        <img className="h-[32px]" src={SponsorRedBull} alt="redbull"/>
                        <img className="w-[140px]" src={SponsorFortune} alt="fortune"/>
                    </div>
                </div>
            </div>
        )}
    </section>
}

export default Home
