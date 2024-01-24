let mech_students_details = [
	{
		student_id: 1,
		student_name: "John",
		student_age: 22,
	},
	{
		student_id: 2,
		student_name: "aish",
		student_age: 26,
	},
];

let cse_students_details = [
	{
		student_id: 1,
		student_name: "John",
		student_age: 22,
	},
	{
		student_id: 2,
		student_name: "aish",
		student_age: 26,
	},
];

let compareTwoArrayOfObj =(mech_students_details,cse_students_details)=>{
        return(
            mech_students_details.length  === cse_students_details.length &&
            mech_students_details.every((m_student)=>
                    cse_students_details.some((cse_student)=>
                          m_student.student_name === cse_student.student_name &&
                          m_student.student_age === cse_student.student_age
                    )
            )
        )
};
console.log(compareTwoArrayOfObj(mech_students_details,cse_students_details));

//Using object keys
let compareTwoArrayOfObj2 =(mech_students_details,cse_students_details)=>{
    return(
        mech_students_details.length === cse_students_details.length &&
        mech_students_details.every((mstudent)=>
            cse_students_details.some((csestudent)=>
                Object.keys(mstudent).every((key)=>
                    mstudent[key] === csestudent [key]
                )
            )
        )
    )
}
console.log(compareTwoArrayOfObj2(mech_students_details,cse_students_details));