## redux-toolkit: configureStore
`const store = createStore(rootReducer)`

Chúng ta khởi tạo một store bằng hàm `createStore` của redux với tham số nhận vào là một reducer, `configureStore` sẽ làm điều tương tự như vậy, chúng ta sẽ khởi tạo store theo phương pháp sau:

    const store = configureStore({reducer: rootReducer})

- `configureStore` sẽ mặc định thiết lập cho phép sử dụng redux devtool để debug và theo dõi quá trình cập nhật state cũng như thiết lập sẵn một số middleware.

## redux-toolkit: createAction
`createReducer` cho phép chúng ta khởi tạo reducer một cách đơn giản và trực quan hơn khá nhiều so với cách viết thuần, logic nhìn sẽ trực quan hơn như một object tham chiếu, với mỗi key là một type và value là một reducer function

    const counter = createReducer({ count: 0 }, {
      [increment]: state => ({ count: state.count + 1 }),
      [decrement]: state => ({ count: state.count - 1 })
    }

 Computed Properties

    let propName = "c";
    const rank = {
        a: 1,
        b: 2,
        [propName]: 3,
    };

    console.log(rank.c);

Do increasement và descreasement không phải là một string, computed property sẽ tự động gọi hàm toString(), tương tự như [increasement.toString()].

`createReducer` nhận vào 2 tham số là giá trị ban đầu của state và object giúp reducer lắng nghe và cập nhật state,