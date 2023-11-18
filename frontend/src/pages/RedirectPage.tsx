import { useNavigate } from "react-router"
import useTimeout from "../hooks/useTimeout"
import { PropsWithChildren, useState } from "react"

type RedirectPageProps = {
  to?: string
}

export default function RedirectPage({
  to = "/",
  children,
}: PropsWithChildren<RedirectPageProps>) {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()

  const { clear, reset } = useTimeout({
    callback: () => {
      setCount((prev) => prev - 1)
      if (count - 1 === 0) {
        navigate(to)
      } else reset()
    },
    delay: 1000,
  })

  return (
    <div>
      <h2>Sorry, I couldn't find this page.</h2>
      <div className="redirect message-to-user">{children}</div>

      <div>You will be redirected in ...{count}</div>
    </div>
  )
}
