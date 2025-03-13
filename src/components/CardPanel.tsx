'use client'
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel(){

    const cardReducer = (
        venueList: Map<string, number>,
        action: {   type:   string;
                    venueName:  string;
                    rating?: number;
                }
    ) => {
        switch(action.type){
            case "add": {
                const newVenueList = new Map(venueList);
                newVenueList.set(action.venueName, action.rating??0);
                return newVenueList;
            }
            case "remove": {
                const newVenueList = new Map(venueList);
                newVenueList.delete(action.venueName);
                return newVenueList;
            }
            default: return venueList
        }
    }

    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0],
    ])

    const [ venueList, dispatchCard] = useReducer(cardReducer, defaultVenue)

    return (
        <div>
            <div style={{margin: "20px", display:"flex",flexDirection:"row",
                flexWrap:"wrap", justifyContent: "space-around", alignContent: "space-around",
            }}>
                <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"
                     onRated={(name:string,rating:number)=>dispatchCard({type:'add',venueName:name, rating:rating})}
                />
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"
                    onRated={(name:string,rating:number)=>dispatchCard({type:'add',venueName:name, rating:rating})}
                />
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"
                    onRated={(name:string,rating:number)=>dispatchCard({type:'add',venueName:name, rating:rating})}
                />
            </div>

            <div>
            <div className="px-10 w-full text-xl font-bold">
                 Venue List with Rating : {venueList.size}
             </div>

                {Array.from(venueList).map(([venueName, rating]) => (
                    <div key={venueName} data-testid={venueName}
                    className="px-12"
                        onClick={()=>dispatchCard({type:'remove',venueName:venueName, rating:rating})}
                    >
                        {venueName} : {rating}
                    </div>
                ))}
            </div>
        </div>
    );
}



