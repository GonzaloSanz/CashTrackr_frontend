import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string()
        .email({ message: 'El email no es válido' }),
    name: z.string()
        .min(1, { message: 'El nombre es obligatorio' }),
    password: z.string()
        .min(8, { message: 'La contraseña debe tener mínimo 8 caracteres' }),
    password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ['password_confirmation']
});

export const LoginSchema = z.object({
    email: z.string()
        .email({ message: 'El email no es válido' }),
    password: z.string()
        .min(1, { message: 'La contraseña es obligatoria' })
});

export const TokenSchema = z.string({ message: 'Token no válido' })
    .length(6, { message: 'Token no válido' });

export const ForgotPasswordSchema = z.object({
    email: z.string()
        .email({ message: 'El email no es válido' })
});

export const ResetPasswordSchema = z.object({
    password: z.string()
        .min(8, { message: 'La contraseña debe tener mínimo 8 caracteres' }),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirmation"]
});

export const PasswordValidationSchema = z.string().min(1, { message: 'La contraseña no es válida' });

export const DraftBudgetSchema = z.object({
    name: z.string()
        .min(1, { message: 'El nombre es obligatorio' }),
    amount: z.coerce.
        number({ message: 'La cantidad no es válida' })
        .min(1, { message: 'La cantidad no es válida' }),
});

export const DraftExpenseSchema = z.object({
    name: z.string().min(1, { message: 'El nombre es obligatorio' }),
    amount: z.coerce.number().min(1, { message: 'La cantidad no es válida' })
});

export const UpdatePasswordSchema = z.object({
    current_password: z.string().min(1, { message: 'La contraseña actual es obligatoria' }),
    password: z.string().min(8, { message: 'La contraseña nueva debe tener mínimo 8 caracteres' }),
    password_confirmation: z.string()
}).refine(data => data.password === data.password_confirmation, {
    message: 'Las contraseñas no coinciden',
    path: ["password_confirmation"]
});

export const ProfileFormSchema = z.object({
    name: z.string()
            .min(1, {message: 'El nombre no es válido'}),
    email: z.string()
            .email({message: 'El email no es válido'})
})

export const SuccessSchema = z.string();
export const ErrorResponseSchema = z.object({
    error: z.string()
});

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email()
});

export const ExpenseAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    budgetId: z.number(),
});

export const BudgetAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    userId: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    expenses: z.array(ExpenseAPIResponseSchema)
});

export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema.omit({ expenses: true }));

export type User = z.infer<typeof UserSchema>
export type Budget = z.infer<typeof BudgetAPIResponseSchema>
export type DraftExpense = z.infer<typeof DraftExpenseSchema>
export type Expense = z.infer<typeof ExpenseAPIResponseSchema>
