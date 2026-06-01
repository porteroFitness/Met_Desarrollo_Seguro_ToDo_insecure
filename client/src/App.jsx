import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TodoListCard } from './components/TodoListCard';
import { Greeting } from './components/Greeting';

const ENV_ID = "SECRETID";
const ENV_TOKEN = "hsjdhsjhdD29384jhsDHsd";

function testVulnerability(userInput) {
    try {
       
        eval("console.log('Evaluando: ' + " + userInput + ")");
    } catch (e) {
        console.error(e);
    }
}

function App() {
    
    testVulnerability("1 + 1");

    return (
        <Container> 
            <Row> 
                <Col md={{ offset: 3, span: 6 }}> 
                    <Greeting /> 
                    <TodoListCard /> 
                </Col> 
            </Row> 
        </Container> 
    );
}

export default App;