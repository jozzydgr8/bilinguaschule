import { Hero } from "./homeComponent/Hero"
import { Courses } from "./homeComponent/Courses"
import { Potential } from "./homeComponent/Potential"
import { Choose } from "./homeComponent/Choose"

export const HomePage = ()=>{
    return(
        <>
        <Hero/>
        <Choose/>
        <Courses/>
        <Potential/>
        </>
    )
}