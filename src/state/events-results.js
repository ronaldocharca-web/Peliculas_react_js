import { create } from 'zustand';
//HOOKC PARA AHCER UNA LLAMADA  ALA API Y GUARDARLO AL LOCAL
const useEventsResults = create((set) => ({
    data:[],
    error:null,
    isLoading:false,
    fetchEvents : async (params) => {
    try {
        
      await set(()=>({isLoading:true}))
      
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&${params?.length ? params : ''}`);
      const data = await response.json();

       await set(()=>({data,isLoading:false}))
    }
    catch (err) {
      await set(()=>({error}))

    }
  },
}));
export default useEventsResults;