import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { supabase } from "../utils";


const QuoteContext = createContext(null);



export function QuoteProvider({children}) {


    const queryClient = useQueryClient();

    const getQuotes = async () => {

        const {data, error} = await supabase.rpc('get_quotes_json');

        if(error) throw error;

        return data;
    }

    const {isPending, isError, data, error } = useQuery({ queryKey: ['quotes'], queryFn: getQuotes});
    
    return (
        <QuoteContext.Provider value={{ isPending, isError, data, error }}>
            { children }
        </QuoteContext.Provider>   
    )
}

export function useQuoteContext(){
    return useContext(QuoteContext);
}

