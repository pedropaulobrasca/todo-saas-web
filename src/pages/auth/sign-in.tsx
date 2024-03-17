import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { api } from '@/lib/axios'

type FormData = {
  email: string
}

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data: FormData) => {
    console.log(data)

    const response = await api.post('/auth/login/magic-link', {
      email: data.email,
    })

    if (errors) console.log(errors)

    console.log(response)
  })

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant={'outline'}>
          <Link to="/sign-up">Cadastre</Link>
        </Button>

        <div className="flex max-w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas tarefas e gerencie seus projetos
            </p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
