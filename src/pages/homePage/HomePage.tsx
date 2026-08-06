import { Hero } from "./homeComponent/Hero"
import { Courses } from "./homeComponent/Courses"
import { Potential } from "./homeComponent/Potential"
import { Choose } from "./homeComponent/Choose"
import { Expectation } from "./homeComponent/Expectation"

export const HomePage = ()=>{
    return(
        <>
        <Hero/>
        <Choose/>
        <Courses/>
        <Expectation/>
        <Potential/>
        </>
    )
}