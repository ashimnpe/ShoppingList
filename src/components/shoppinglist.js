import React from 'react';
import { Container, Button, ListGroup} from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends React.Component{
    state = {
        items : [
            {id: uuidv4(), name: "eggs"},
            {id: uuidv4(), name: "milk"},
            {id: uuidv4(), name: "flour"},
            {id: uuidv4(), name: "bread"}
        ]
    };
    render(){
        const {items} = this.state;
        return(
            <Container>
                <Button style={{marginBottom: '5px'}} onClick={() => {
                    const name = prompt("Enter the item");
                    if(name){
                        this.setState(state => ({
                            items: [...state.items,{id: uuidv4(), name}]
                        }));
                    }
                }}>Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shoppingList">
                        {items.map(({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroup.Item>
                                    <Button className="remove-btn" variant="danger"
                                    onClick={() => this.setState({
                                        items: this.state.items.filter(item => item.id !== id)})}>&times;</Button>
                                    {name}
                                </ListGroup.Item>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;