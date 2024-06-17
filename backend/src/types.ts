import z from "zod";

export const singupInput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    name : z.string()
})

export type singupInput = z.infer<typeof singupInput>