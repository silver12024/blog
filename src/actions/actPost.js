import axios from "axios";
import { GET_ALLPOST,GET_ALLPOST_ERROR } from "../const/index";
// hien tat ca post

export function actGetPost(posts){
  
  return {type: GET_ALLPOST, posts};
};

export function actGetPostError(error){
  
  return {type: GET_ALLPOST_ERROR, error: error};
};
//action thêm post
// export const actAddPost = (content) => {
//   return { type: ADD_NEW_NOTE, content,};
// };
// //action xóa post
// export const actRemovePost = (id) => {
//   return {type: REMOVE_NOTE, id,};
// };
// //action sửa post
// export const actEditPost = (id, content) => {
//   return { type: EDIT_NOTE, id, content,};
// };

