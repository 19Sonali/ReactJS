import React from 'react'

export default function ArrayMethods() {
    const fruits = ['Apple', 'Orange', 'Mango', 'Kiwi']
    // map function
    const mapping = fruits.map((item)=><h1>{item}</h1>)
    var i;
    const students = ['Kiran', 'John', 'Karthik', 'Rahul']
    const mapping1 = students.map((name)=><h2>{name}</h2>)
    const studentdetails = [{
        name: "Kiran",
        roll_no:10,
        phone: 9485265659,
        address: "Manglore",
        marks: {
            maths: 80,
            science: 80,
            social_science: 99,
            kannada: "",
            hindi: 78,
            english: 69
        }
    },
    {
        name: "Riyonna",
        roll_no:35,
        phone: 9480502793,
        address: "Puttur",
        marks: {
            maths: 65,
            science: 90,
            social_science: 86,
            kannada: 80,
            hindi: 50,
            english: 99
        }
    },
    {
        name: "Rikita",
        roll_no:40,
        phone: 636059189,
        address: "Bangalore",
        marks: {
            maths: "",
            science: 75,
            social_science: "95",
            kannada: 97,
            hindi: 64,
            english: 87
        }
    },
    {
        name: "Lencita",
        roll_no:60,
        phone: 64462923648,
        address: "Karkala",
        marks: {
            maths: 79,
            science: "",
            social_science: 77,
            kannada: 95,
            hindi: 94,
            english: 86
        }
    },
]

// function to calculate total marks
const calculateTotalMarks = (marks) => {
  // Calculate total marks by summing up individual subject marks
  const sanitizedMarks = {
    maths: parseInt(marks.maths) || 0,
    science: parseInt(marks.science) || 0,
    social_science: parseInt(marks.social_science) || 0,
    kannada: parseInt(marks.kannada) || 0,
    hindi: parseInt(marks.hindi) || 0,
    english: parseInt(marks.english) || 0,
  };

  // Calculate total marks by summing up individual subject marks
  return sanitizedMarks.maths + sanitizedMarks.science + sanitizedMarks.social_science + sanitizedMarks.kannada + sanitizedMarks.hindi + sanitizedMarks.english;
};
//  const CalculatePercentage = () => {
//     return (totalMarks/600)*100;
//  }

  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "black"}}>Array Methods</h1>       
        {/* to print the variable */}
       {/*} {mapping}
        <hr></hr>
        {/* {mapping1} 
        {students.map((name)=><h2>{name}</h2>)} 
        <hr></hr>
        
        {/* Mapping in table 
        <table border={"1"}>
            <tr>
                <th>Sl No</th>
                <th>Student Name</th>
            </tr>
            {students.map((item, i)=>{
                return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item}</td>
                                            </tr>
                )
            })} 
        </table>*/}
        <hr></hr>
        <table border={"2"} align={"center"} cellPadding={"10px"}>
            <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Maths</th>
                <th>Science</th>
                <th>Social Science</th>
                <th>Kannada</th>
                <th>hindi</th>
                <th>English</th>
                <th>Total</th>
                <th>Percentage</th>
                 
            </tr>
            {studentdetails.map((item, i)=>{
                const totalMarks = calculateTotalMarks(item.marks);
                const percent = parseInt((totalMarks/600)*100)
                
                
                return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.roll_no}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.marks.maths !==""? item.marks.maths : "Absent"}</td>
                        <td>{item.marks.science !==""? item.marks.science : "Absent"}</td>
                        <td>{item.marks.social_science !==""? item.marks.social_science: "Absent"}</td>
                        <td>{item.marks.kannada !==""? item.marks.kannada : "Absent"}</td>
                        <td>{item.marks.hindi !==""? item.marks.hindi: "Absent"}</td>
                        <td>{item.marks.english !==""? item.marks.english: "Absent"}</td>
                        <td>{totalMarks}</td>
                        <td>{percent}</td>

                        
                        
                    </tr>
                )
            })}
        </table>
        <hr></hr>

    </div>
  )
}
