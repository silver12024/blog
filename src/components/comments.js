import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './comments.css'
import { render } from '@testing-library/react';

function CustomToggle({children, eventKey}){
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),);
    return (
        <div onClick={decoratedOnClick}> {children} </div>
      );
}

function Comments(){
    const comments = useSelector(state => state.comments);
    return (
        <Container>
            <Accordion defaultActiveKey="0">
            {comments ? comments.map((comment) =>(
                <Card>
                    <Card.Header>
                    <CustomToggle eventKey="1">Replies <Badge bg="secondary">9</Badge> </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div>
                            <i class="bi bi-person-square"></i>
                            <p class='user-comment' key={comment.id}> Name</p>
                            <p class='time-comment'>{comment.created_at}</p>
                            <p>{comment.content}</p>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Reply to"
                                className="mb-3">
                                <Form.Control type="text" placeholder="hi" />
                            </FloatingLabel>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )) : null};
            
            </Accordion>

        </Container>
    )
}
export default Comments