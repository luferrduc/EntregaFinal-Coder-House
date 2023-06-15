

export async function getReservas(){
    try {
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/reservas`)
        const  reservas =  await response.json()
        // console.log(reservas)
        return reservas
    } catch (error) {
        console.log(error)
    }
}

export async function getReservaByName(reserva){

    try {
        let {nombrePersona} =  reserva
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/reservas/${nombrePersona}`)
        const reservas  = await response.json()
        console.log(reservas)
        return reservas
    } catch (error) {
        console.log(error)
    }
}


export async function getReservaByID(reserva){

    try {
        let {id} =  reserva
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/reservas/${id}`)
        const reservas  = await response.json()
        
        return  reservas
    } catch (error) {
        console.log(error)
    }
}

export async function postReserva(reserva){

    try {
        const response =  await fetch(`https://648120a229fa1c5c5031239e.mockapi.io/api/v1/reservas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reserva)
        })   
        const result  = await response.json()   
        return result  
    } catch (error) {
        console.log(error)
    }
}