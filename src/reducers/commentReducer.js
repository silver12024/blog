// import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from "../const/index";
 
const commentReducer = (state = []) => {
    state = [
        {
          "id": 1,
          "owner": 1,
          "post": 1,
          "content": "Boring!!!",
          "created_at": 1576506719083
        },
        {
          "id": 2,
          "owner": 3,
          "post": 1,
          "content": "Very good. But very bad also",
          "created_at": 1576506719083
        },
        {
          "id": 3,
          "owner": 2,
          "post": 2,
          "content": "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ",
          "created_at": 1576506719083
        }
      ];
      return state;
//   switch (action.type) {
//     case ADD_COMMENT:
//       const id_LT = new Date().getTime();
//       state = [...state, { id: id_LT, ten: action.ten }];
//       console.log("Thêm LT:" , state);
//       return state;
//     case EDIT_COMMENT:
//       const indexLT = state.findIndex((row) =>  row.id === action.id);
//       if (indexLT !== -1) state[indexLT].ten = action.ten;
//       console.log("Chỉnh LT: ", state);
//       return state;
//     case REMOVE_COMMENT:
//       const idLT = action.id;
//       state = state.filter(loaitin => {
//         if (loaitin.id === idLT) return false
//         return true
//       })
//       console.log("Xóa LT:", state);
//       return state;
//     default: return state;
//   }
}; 

export default commentReducer