import z, { string } from "zod";

export const singupInput = z.object({
    username: string().email(),
    password: string().min(8),
    name : string()
})

export type singupInput = z.infer<typeof singupInput>

export const singinInput = z.object({
    username: string().email(),
    password: string().min(8)
})

export type singinInput = z.infer<typeof singinInput>

export const createblogInput = z.object({
    title: string(),
    content: string()
})

export type blogInput = z.infer<typeof createblogInput>

export const updateblogInput = z.object({
    id: string(),
    title: string(),
    content: string()
})

export type updateblogInput = z.infer<typeof updateblogInput>



