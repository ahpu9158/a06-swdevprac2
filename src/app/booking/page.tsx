import { MenuItem, Select, TextField } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function Booking () {

    return (
        <main className="bg-white p-4 min-h-screen w-[100%] flex flex-col items-center space-y-4">

            <div className="text-center text-black">Venue Booking</div>
            
            <TextField id="Name-Lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" />
            <TextField id="Contact-Number" name="Contact-Number" label="Contact-Number" variant="standard" />
            
            <Select variant="standard" id="venue"
                className = "h-[2em] w-[200px]"
                >
                    <MenuItem value="Bloom"> The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <DateReserve/>

            <button name="Book Venue" className="black rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
            Book Venue</button>

        </main>
    );
}