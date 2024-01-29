export const name="John"; //individual exporting
// to export values to other files
export const PhNo= "123456789"; //individual exporting

const address="Mangalore";
const pincode= 575020;

export {address, pincode} // Grouped exporting

// Default exporting
const Hello = () => {
    alert("This is a default function call")
}

export default Hello