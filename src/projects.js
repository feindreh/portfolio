const projects = []


// const {name,image,text,ghLink,liveLink}= props

const newProject = (name,image,text,ghLink,liveLink) => {
    return {
        name,image,text,ghLink,liveLink
    }
}


const project1 = newProject("Map Guess","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )
const project2 = newProject("QuizzIt","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )
const project3 = newProject("ShoppingCart","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )
const project4 = newProject("Miss1","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )
const project5 = newProject("Miss2","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )
const project6 = newProject("Miss3","Screenshot","Karten raten macht Spaß", "Link-Gh", "Link-Live" )

projects.push(project1,project2,project3,project4,project5,project6)

console.log(projects)

export default projects