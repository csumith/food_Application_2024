
import { sum } from "../sum";
test("Sum function should be calculate the sum of two numbers", ()=>{
    
   const result = sum(5,2)
   expect(result).toBe(7)
})