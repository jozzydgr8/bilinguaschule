import { Hero } from "./homeComponent/Hero"
import { Courses } from "./homeComponent/Courses"
import { Potential } from "./homeComponent/Potential"
import { Choose } from "./homeComponent/Choose"
import { Expectation } from "./homeComponent/Expectation"
import { Cta } from "./homeComponent/Cta"
import { GetInTouch } from "./homeComponent/GetInTouch"
import { Footer } from "./homeComponent/Footer"

export const HomePage = ()=>{
    return(
        <>
        <Hero/>
        <Choose/>
        <Courses/>
        <Expectation/>
        <Potential/>
        <Cta/>
        <GetInTouch/>
        <Footer/>
        </>
    )
}