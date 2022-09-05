import { useEffect, useState } from "react";
import { getAdvice } from "../../utils/Api";
import { Container, Description, DiceButton, Divider, Title } from "./styled"

const AdviceCard = () => {

    const [dataAdvice, setDataAdvice] = useState(null);

    async function getData() {  
        setDataAdvice(null);    
        const data = await getAdvice();
        setDataAdvice(data);         
    }  
      
    useEffect(() => {       
        getData()
    }, [])

    return (
        <Container>
            <Title>
                    ADVICE #{dataAdvice?.slip?.id}
            </Title>
            <Description>
                { dataAdvice?.slip ? 
                  `“${dataAdvice?.slip.advice}”` :
                  <img src={'./images/loading-gif.gif'}/>
                }
                
            </Description>
            <Divider>
                <img src="./images/pattern-divider-desktop.svg" alt="image divider" />
            </Divider>
            <DiceButton onClick={() => getData()}>
                <img src="./images/icon-dice.svg" alt="image dice" />
            </DiceButton>
        </Container>
    )
}

export default AdviceCard;