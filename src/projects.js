import mapguess from "./img/mapguess.png"
import quizz from "./img/quizz.png"



const projects = []

// const {name,image,text,ghLink,liveLink}= props

const newProject = (name,image,text,ghLink,liveLink) => {
    return {
        name,image,text,ghLink,liveLink
    }
}


const project1 = newProject("Map Guess",mapguess,"Makiere die gesuchten Dinge auf einem Foto. Lade selbst ein Bild hoch, makiere die Flächen und teile es mit anderen.", "https://github.com/feindreh/mapguess", "https://feindreh.github.io/mapguess/" )
const project2 = newProject("QuizzIt",quizz,"Beantworte die Fragen in einem Quiz. Erstelle selbst ein Quiz und teile es mit Freunden.", "Link-Gh", "Link-Live" )
const project3 = newProject("ShoppingCart","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )
const project4 = newProject("Api","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )

projects.push(project1,project2,project3,project4)


export default projects