

import { z } from "zod"


export const  userSchema = z.object({
  name: z.string().min(4).max(50,{message:"name should contain atleast 4 characters"}),
  description: z.string().min(10).max(50,{message:"write atleast 10 characters"}),
  

})
