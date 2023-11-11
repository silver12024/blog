import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import React, {useEffect, useState} from 'react';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'


import './showPost.css';

function CountComments({ postId, comments}){
    var count = 0;
    comments.map((comment) => (
       (comment.postId) == (postId) ? (count++) : (count)
    ))
    return (
        <Badge bg="secondary"> {count}</Badge>
    )
}

function CustomToggle({children, eventKey}){
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),);
    return (
        <div onClick={decoratedOnClick}> {children} </div>
      );
}


function GetPosts(){

    const [posts, setPost] = useState([]);
    useEffect(() => {
		// API_ENDPOINT là bất kỳ đường dẫn API nào trả về dạng JSON
        // axios.get('https://localhost:5000/api/posts')
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return setPost(response.data);
			}).catch(err => alert("Có lỗi"))
			.finally(() => {
				console.log("End")
			})

	}, [])
    const [comments, setComments] = useState([]);
    useEffect(() => {
		// API_ENDPOINT là bất kỳ đường dẫn API nào trả về dạng JSON
        // axios.get('https://localhost:5000/api/comments')
		axios.get('https://jsonplaceholder.typicode.com/comments')
			.then(response => {
				return setComments(response.data);
			}).catch(err => alert("Có lỗi"))
			.finally(() => {
				console.log("End")
			})
	}, [])
    // const comments = useSelector(state => state.comment);
    
    // const posts = useSelector(state => state.posts);
    // const {fetchPosts} = getShowPosts();
    // console.log("postseX:" + posts);
    
    console.log("postseX:" + posts);
    return (
        <Container>
                {posts ? posts.map((post) =>(
                    <Card>
                    <Card.Header className='title-post' key={post.id}>{post.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <div class='info-post'>
                            <Row>
                                <Col>
                               
                                <p>Author : {post.owner}</p>
                                <p> created:{post.created_at}</p></Col>
                                <Col></Col>
                                <Col>
                                    <Stack direction="horizontal" gap={1}>
                                        <Badge bg={post.tags} class={post.tags}>{post.tags}</Badge>
                                    </Stack>

                                </Col>
                            </Row>
                                

                            </div>

                            <div class='content-post'>
                                <p> {' '}
                                    {post.body}</p>
                            </div>
                        <footer className="blockquote-footer">
                            {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                        </footer>
                        </blockquote>
                       <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="1">Replies <CountComments  comments = {comments} postId={post.id}></CountComments> </CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    {comments.map((comment) =>(
                                        post.id == comment.postId ? 
                                            <div>
                                                <i class="bi bi-person-square"></i>
                                                <p class='info' key={comment.id}> {comment.name}</p>
                                                <p class='time-comment'>{comment.created_at}</p>
                                                <p class = 'content-comment'>{comment.body}</p>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Reply to"
                                                    className="mb-3">
                                                    <Form.Control type="text" placeholder="hi" />
                                                </FloatingLabel>
                                            </div>
                                             : null
                                    )
                                    )}
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card> 
                        </Accordion>
                    </Card.Body>
                </Card>
            )) : null}
                
            
        </Container>
    )
}

// const mapStateToProps = state => ({
//         posts: getPostsData(state),
//         error: getPostsError(state)
//     })
    
// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchPosts: getShowPosts
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   {getPostsAction}
// )(GetPosts);
export default GetPosts;