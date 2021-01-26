import React, {useState,useEffect} from "react"
import { useMutation, useQuery } from "@apollo/client"
import { OfficeTabel } from "../components"
import { office } from "../query"
export default function OfficeList () {

    const {data :offices, loading, error} = useQuery(office.GET_ALL_OFFICE) 

    if(loading) return <h1>loading ...</h1>
    if(error) return <h1>ERROR</h1>
    return (
        <div className="flex justify-center my-20">
            <div className = "flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
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
                    {offices.offices.map(office =>{
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