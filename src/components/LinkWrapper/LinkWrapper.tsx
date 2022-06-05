import Link from 'next/link'

import * as S from './LinkWrapper.styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = (props: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={props.href}>{props.children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
