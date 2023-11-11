import { ADD_LOAITIN, REMOVE_LOAITIN, EDIT_LOAITIN } from "../const/index";

//action thêm comment
export const actAddLoaiTin = (ten) => {
  return { type: ADD_LOAITIN, ten};
};
//action xóa comment
export const actRemoveLoaiTin = (id) => {
  return {type: REMOVE_LOAITIN, id,};
};
//action sửa comment
export const actEditLoaiTin = (id, ten) => {
  return { type: EDIT_LOAITIN, id, ten,};
};
