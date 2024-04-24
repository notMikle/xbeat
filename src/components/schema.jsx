import { z } from 'zod'

export const FormDataSchema = z.object({
    name: z.string().nonempty('Name is required.'),
    phone:z.string()
})