import React, {useState,useEffect} from "react"
import { useMutation, useQuery } from "@apollo/client"
import { OfficeTabel } from "../components"
import { office, user } from "../query"
export default function OfficeList () {

    const {data :offices, loading, error} = useQuery(office.GET_ALL_OFFICE) 
    const {data : userPosition , loading :userPositionLoading , error : userPositionError} = useQuery(user.GET_USER_POSITION)
    const cariJarak = (lokasiUser,lokasiKantor) => {
        let x =Math.abs((lokasiUser[0]-lokasiKantor[0]))
        let y = Math.abs((lokasiUser[1]-lokasiKantor[1]))

        x = Math.pow(x,2)
        y = Math.pow(y,2)

        return Math.sqrt(x+y)
    }
    if(loading || userPositionLoading) return <h1>loading ...</h1>
    if(error) return <h1>ERROR</h1>
    const lokasiUser = userPosition.getUserPosition

    let sortedOffice = JSON.parse(JSON.stringify(offices.offices))
    sortedOffice.forEach(element => {
        const lokasiKantor = [element.latitude, element.longitude]
        element["jarak"] = cariJarak(lokasiUser,lokasiKantor)
    });
    sortedOffice.sort( (a,b) => a.jarak - b.jarak )

    return (
        <div className="flex justify-center my-20">
            <div className = "flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <p>{JSON.stringify(userPosition)}</p>
                <table className = "w-full text-sm lg:text-base">
                    <thead>
                        <tr className='h-12 uppercase'>
                            <th className="text-left">
                                ADDRESS 
                            </th>
                            <th className="text-left">
                                PHONE NUMBER
                            </th>
                            <th className="text-left">
                                CATEGORY
                            </th>
                        </tr>
                    </thead>
                    {sortedOffice.map(office =>{

                        return( 
                        <OfficeTabel
                            key= {office.id}
                            office ={office}
                        >
                        </OfficeTabel> )
                    })}
                    
                </table>
            </div>
        </div>
    )
}