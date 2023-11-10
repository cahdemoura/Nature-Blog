import { Button } from "../../styles/GlobalSyle";
import { ContainerLetter, Input,Section, Title} from "./NewsletterStyle";

const Newsletter = () => {
    return (
        <Section>
            <Title>Se inscreva na nossa newsletter</Title>
            <ContainerLetter>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Button>Enviar</Button>
            </ContainerLetter>
        </Section>
    )
}

export default Newsletter;