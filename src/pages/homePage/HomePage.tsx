import { Hero } from "./homeComponent/Hero"
import { Courses } from "./homeComponent/Courses"
import { Potential } from "./homeComponent/Potential"

export const HomePage = ()=>{
    return(
        <>
        <Hero/>
        <Courses/>
        <Potential/>
        </>
    )
}