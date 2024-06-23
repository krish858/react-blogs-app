import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import {createblogInput,UpdateblogInput} from './../../../common/src/index'

const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL : string;
      JWT_SECRET : string;
    },
    Variables: {
      userId : string;
    }
}>()

blogRouter.use("/*",async (c,next)=>{
  const token = await c.req.header("authorization") || "" ;
  const user = await verify(token,c.env.JWT_SECRET)
  if(user){
    c.set("userId",user.id as any );
    await next();
  }
  return c.json({
    message: "you are not logged in"
  })
})

blogRouter.post("/create",async (c)=>{
  const body = await c.req.json();
  const sucess = await createblogInput.safeParse(body);
  if(!sucess.success){
    return c.text("Invalid inputs")
  }
  const authorId = c.get("userId")
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blog = await prisma.blog.create({
    data: {
      title : body.title,
      content : body.content,
      authorId : Number(authorId),
    }
  })

  return c.json({
    id : blog.id
  })
})

blogRouter.put("/edit",async (c)=>{
  const body = await c.req.json();
  const sucess = await UpdateblogInput.safeParse(body);
  if(!sucess.success){
    return c.text("Invalid inputs")
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blog = await prisma.blog.update({
    where:{
      id : Number(body.id)
    },
    data:{
      title : body.title,
      content : body.content
    }
  })

  return c.json({
    id : blog.id
  })
})

blogRouter.get("/blogs",async (c)=>{
  const authorId = c.get("userId")
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const blog = await prisma.blog.findMany({
      where:{
        authorId : Number(authorId)
      }
    })

    return c.json({
      blog
    })
  } catch (error) {
    return c.text("Somehing went wrong");
  }
})

blogRouter.get("/blog/:id",async (c)=>{
  const id = await c.req.param('id')
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const blog = await prisma.blog.findFirst({
      where:{
        id: Number(id)
      },
      select:{
        content:true,
        title:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({
      blog
    })
  }catch(e){
    return c.text("something went wrong")
  }
})

blogRouter.get("/allblogs",async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try {
    const blogs = await prisma.blog.findMany({
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });

    return c.json({
      blogs
    })
  } catch (error) {
    return c.text("something went wrong")
  }
})

export default blogRouter