import { useQuery, useQueryClient, useQueries } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import { supabase } from "../utils";


const QuoteContext = createContext(null);


export function QuoteProvider({children}) {

    const queryClient = useQueryClient();

    const getQuotes = async () => {

        const {data, error} = await supabase.rpc('get_quotes_json');

        if (error) throw error;

        return data;
    }

    const getChars = async () => {

        const { data, error } = await supabase.rpc('get_character_names');

        if (error) throw error;

        return data;
    }

    const results = useQueries({
        queries: [
            {
                queryKey: ["quotes"],
                queryFn: getQuotes
            },
            {
                queryKey: ["characters"],
                queryFn: getChars
            }
        ]
    });

    const [quotesQuery, charQuery] = results;

    
    return (
        <QuoteContext.Provider value={{ quotesQuery, charQuery }}>
            { children }
        </QuoteContext.Provider>   
    )
}

export function useQuoteContext(){
    return useContext(QuoteContext);
}

