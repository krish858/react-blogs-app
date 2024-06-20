import z, { string } from "zod";

export const SingupInput = z.object({
    username: string().email(),
    password: string().min(8),
    name : string()
})

export type singupInput = z.infer<typeof SingupInput>

export const SinginInput = z.object({
    username: string().email(),
    password: string().min(8)
})

export type singinInput = z.infer<typeof SinginInput>

export const createblogInput = z.object({
    title: string(),
    content: string()
})

export type blogInput = z.infer<typeof createblogInput>

export const UpdateblogInput = z.object({
    id: string(),
    title: string(),
    content: string()
})

export type updateblogInput = z.infer<typeof UpdateblogInput>



