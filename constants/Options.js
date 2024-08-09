export const SelectTravelerList=[
    {
        id:1,
        title:'Solo',
        desc:'A solo traveler exploring',
        people:'1 people'
    },
    {
        id:2,
        title:'Family',
        desc:'Travelling with your family',
        people:'2 to 5 people'
    },
    {
        id:3,
        title:'Friends',
        desc:'Travelling with your friends',
        people:'5 to 10 people'
    },
    
];

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Strictly budget friendly',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Flexible till some extent',
    },
    {
        id:3,
        title:'Luxury',
        desc:'For the best experience'
    }
];

export const AI_PROMPT='Generate Travel plan for Location:{location}, for {totalDays} days and {totalNight} nights for {traveler} with a {budget} budget with the flight details, flight price with booking url, hotel address, price, hotel image url, geo coordinates, ticket pricing, time to travel each of the location for {totalDays} day and {totalNight} night with each day plan with best time to visit in JSON'