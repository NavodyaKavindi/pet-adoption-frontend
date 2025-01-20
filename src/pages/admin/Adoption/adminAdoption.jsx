const adoptions = [
    {
        adoptionId: 1,
        animalId: 101,
        email: 'example@example.com',
        status: 'pending',
        reason: 'Reason for Adoption',
        start: new Date('2025-01-15'),
        end: new Date('2025-02-15'),
        notes: 'Initial adoption'
    },
    {
        adoptionId: 2,
        animalId: 102,
        email: 'adoptor@example.com',
        status: 'approved',
        reason: 'Health care',
        start: new Date('2025-01-10'),
        end: new Date('2025-03-10'),
        notes: 'Successful adoption'
    },
    {
        adoptionId: 3,
        animalId: 103,
        email: 'john.doe@example.com',
        status: 'pending',
        reason: 'New home',
        start: new Date('2025-01-20'),
        end: new Date('2025-02-20'),
        notes: 'Awaiting approval'
    }
];


export default function AdminAdoption(){
    return(
<div className="w-full">
   <table className="table-auto border-collapse w-full text-left">
<thead>
<tr className="bg-blue-400 text-white">
                <th className="px-4 py-2">Adoption ID</th>
                <th className="px-4 py-2">Animal ID</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Reason</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Notes</th>
            </tr>
        </thead>
        <tbody>
            {
                adoptions.map(
                    (adoption, index)=>{
                        console.log(index)
return(
    <tr key= {adoption.adoptionId}>
        <td>
        {adoption.adoptionId}
        </td>
        <td>
            {adoption.animalId}
        </td>
        <td>
            {adoption.email}
        </td>
        <td>
            {adoption.status}
        </td>
        <td>
            {adoption.reason}
        </td>
        <td>
            {adoption.start.toDateString()}
        </td>
        <td>
            {adoption.end.toDateString()}
        </td>
        <td>
            {adoption.notes}
        </td>
    </tr>
)
                }
            )
                
            }
        

</tbody>
   </table>
</div>
    )
}

