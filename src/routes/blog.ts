import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";

export const blogrouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables:{
        userId : string;
    }
}>();

blogrouter.use("/*",async (c,next)=>{
    const token = c.req.header("authorization") || "" ;
    const response = await verify(token,c.env.JWT_SECRET)
    if(response){
        // @ts-ignore
        c.set("userId",response.id);
        await next();
    }else{
        c.status(403);
        return c.json({
            msg: "You ane not logged in"
        })
    }
});

blogrouter.post('/',async (c) => {
    const body = await c.req.json();
    const userId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorid: Number(userId)
        }
    })
    return c.json({
        id: blog.id,
    })
})
  
blogrouter.put('/',async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blog = await prisma.blog.update({
        where:{
            id: body.id,
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: blog.id,
    })
})
  
blogrouter.get('/',async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id: body.id
            }
        })
        return c.json({
            blog
        });
    }catch(e){
        c.status(411)
        return c.json({
            msg: "Error occured while fetching the blog"
        })
    }
    
    
})
  
blogrouter.get('/blogs',async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.blog.findMany();
    return c.json({
        blogs
    });
})