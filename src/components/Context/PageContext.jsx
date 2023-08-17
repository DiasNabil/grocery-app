import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { PAGE_QUERY } from "../../utils/query";


export const PageContext = createContext({
    pageQuery: () => null
})

function formatPage(data){
    let format = {}
    Object.entries(data.page).forEach(([keyFields , valueFields]) => {
        if(typeof valueFields === 'object'){
            format.fields = {...format.fields, [keyFields]: []}
            Object.entries(valueFields).forEach(([keyArr, valueArr])=>{
                if(typeof valueArr === 'object'){
                    if(valueArr){
                        valueArr.forEach(obj => {
                            let {titre, texte, image, cta} = obj
                            image = image = image && image.sourceUrl
                            format.fields[keyFields] = [...format.fields[keyFields], {titre , texte , image, cta}]
                        })
                    }
                }
            })
        }
    })

    format.id = data.page.databaseId
    format.title = data.page.title

    return format
}


export function PageProvider({children}){

    function pageQuery(id){
        let getPage = useQuery(PAGE_QUERY, {variables: {id: id}})

        if(!getPage.loading && !getPage.error){
            return formatPage(getPage.data)
        }
    }

    return(
        <PageContext.Provider value={{pageQuery}}>
            {children}
        </PageContext.Provider>
    )
}