import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { singupInput } from "../types";


const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL : string;
      JWT_SECRET : string;
    }
}>();

userRouter.post('/signup',async (c) => {
    const body = await c.req.json();
    const sucess = singupInput.safeParse(body)
    if(!sucess.success){
      return c.json({
        message : "invalid inputs"
      })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const user = await prisma.user.create({
        data:{
          username: body.username,
          password: body.password,
          name : body.name,
        }
      })
      const jwt = await sign({
        id : user.id
      }, c.env.JWT_SECRET)
  
      return c.text(jwt)
    } catch (error) {
      return c.text("user already exsists");
    }
})
  
userRouter.post('/signin',async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.findFirst({
        where:{
          username : body.username,
          password : body.password
        }
      })
      if(!user){
        return c.text("Wrong email or password")
      }
      const jwt = await sign({
        id: user.id
      },c.env.JWT_SECRET)
  
      return c.text(jwt)
    }catch(e){
      return c.text("invalid")
    }
})

export default userRouter