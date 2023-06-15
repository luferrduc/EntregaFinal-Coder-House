


export async function getHoteles(){
    try {
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/hoteles`)
        const  hoteles =  await response.json()
        // console.log(hoteles)
        return hoteles
    } catch (error) {
        console.log(error)
    }
}

export async function getHoteleByID(id){
    try {
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/hoteles/${id}`)
        const  hotel =  await response.json()
        console.log(hotel)
        return hotel 
    
    } catch (error) {
        console.log(error)
    }
    
}

export async function postHotel(hotel){
    try {
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/hoteles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hotel)
        })   
        const result  = await response.json()   
        return result  
    } catch (error) {
        console.log(error)
    }
}