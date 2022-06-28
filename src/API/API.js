import * as axios from 'axios'
const instance = axios.create({
	//withCredentials: true,
	baseURL:'https://fortniteapi.io/v2/items',
	headers:{
		Authorization:'bfa36a93-b545fa41-b22ed794-693722c6'
			},   
})
export const itemsAPI={			
			getItems(){return instance.get(`/list?lang=ru`)},
	 	
}