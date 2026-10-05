import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';


const QuoteContext = createContext(null);



export function QuoteProvider({children}) {


    const queryClient = useQueryClient();

    const [ testString , setTest ] = useState("Test Props");

    const query = useQuery({ queryKey: ['quotes']})
    
    return (
        <QuoteContext.Provider value={{ testString }}>
            { children }
        </QuoteContext.Provider>   
    )
}

export function useQuoteContext(){
    return useContext(QuoteContext);
}

