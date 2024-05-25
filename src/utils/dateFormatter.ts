export const dateFormatter = (value: string) => {
  const date = new Date(value);
  // Extract year, month, and day
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because getMonth() returns zero-based month index
  const day = date.getDate().toString().padStart(2, "0");
  // Extract hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, "0");

  // Construct the desired format
  const formattedDate = `${year}-${month}-${day}, ${formattedHours}:${minutes} ${ampm}`;

  return formattedDate;
};
