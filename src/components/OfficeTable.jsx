import react from "react"


export default function OfficeTable({office}) {

    return(
        <tbody>
            <tr>
                <td className = "text-right">
                    <span className="text-sm lg:text-base font-medium">
                       {office.address}
                    </span>
                </td>

                <td className = "text-right">
                    <span className="text-sm lg:text-base font-medium">
                        {office.phoneNumber}
                    </span>
                </td>                            
                <td className = "text-right">
                    <span className="text-sm lg:text-base font-medium">
                        {office.category}
                    </span>
                </td>
            </tr>
        </tbody>
    )
}