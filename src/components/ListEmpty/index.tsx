import { Container, Message } from './styles';

type Props = {
  message: string;
}

export function ListyEmpty({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
