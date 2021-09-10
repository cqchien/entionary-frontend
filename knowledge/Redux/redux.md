## Redux
Redux is built based on `Elm` language and `flux` architecture introduced by Facebook

### **Core Concepts and Principles**
- ***Single Source of Truth:*** State của toàn bộ ứng được chứa trong một object tree nằm trong Store duy nhất
- ***State is Read-Only:*** Cách duy nhất để thay đổi State của ứng dụng là phát (**dispatch)** một **Action** 
- ***Changes are Made with Pure Reducer Functions:*** Để chỉ ra cách mà State được biến đổi bởi Action chúng ta dùng các pure function gọi là **Reducer**

### **Redux Terminology**
1. **Action**:An action is a plain **JavaScript object** that has **a type field**. *You can think of an action as an event that describes something that happened in the application.*
2. **Reducer**: A reducer is a function that receives the `current state` and `an action object`, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. *You can think of a reducer as an event listener which handles events based on the received action (event) type.*
    - They should only calculate the new state value based on the `state` and `action` arguments
    - They are **not allowed to modify the existing state.** Instead, they must make *immutable updates*, by copying the existing state and making changes to the copied values.
    - They must **not do any asynchronous logic**, calculate random values, or cause other "side effects"
3. **Store**: Là nơi quản lý State, cho phép truy cập State qua getState(), update State qua dispatch(action), đăng kí listener qua subscribe(listener).
4. **Dispatch** The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:
        
      `store.dispatch({ type: 'counter/incremented' })`
      `console.log(store.getState())`
5. **Selectors**: are functions that know how to extract specific pieces of information from a store state value. 
6. **View**: Hiển thị dữ liệu được cung cấp bởi Store


**The Action creators**
- Giữ nhiệm vụ ***tạo ra các Action***, là bước đầu tiên trong luồng mà các thay đổi và tương tác đều đi qua
- ***Tạo ra một action là formated object chứa type và thông tin của action đó.*** 

**The Store**
-  Quan ly toàn bộ các thao tác với State tree
- ***Chỉ quản lý trạng thái của State tree***. Khi nhận được Action ông ấy sẽ đi hỏi The reducers xem State sẽ thay đổi ra sao chứ không tự làm.

**The Reducers**
- Có một ông là **Root Reducer** nữa sẽ chịu trách nhiệm ***cắt ra State cần thay đổi dựa trên keys mà The Store gửi*** cho và đưa nó cho Reducer biết cách xử lý.
- ***State không được thao tác trực tiếp***. Thay vào đó, mỗi phần được sao chép và sau đó tất cả các phần được kết hợp thành một đối tượng trạng thái mới.
- Các reducer gửi bản sao của chúng cho root reducer, và ***root reducer sẽ ghép các bản sao với nhau để tạo State mới***. 
- Sau đó, ***root reducer sẽ gửi các State mới trở lại Store và Store sẽ sử dụng nó như State chính thức mới.***

**The Views**: *Smart and dumb components*
1. Smart Components:
    - **Phụ trách các Action.** 
    - Khi các thành viên dưới **(dumb components)** cần phát 1 action, anh ta sẽ **gửi action cho các thành viên dưới dạng props**, các thành viên chỉ cần coi đó là các callback mà không quan tâm nó là cái gì.
    - **không có css**.
    - Khi có việc cần thay đổi (DOM) thì sẽ sắp xếp các thành viên dưới làm chứ hiếm khi tự làm.
2. Dumb Components:
    - không phụ thuộc trực tiếp vào các Action
    - có css riêng
    - nhận props style tu smart component

**The view layer binding**

  Để **The Store giao tiếp đc với The views**, *chúng ta cần một ai đó kết nối họ lại với nhau, và chúng ta có The view layer binding, với React anh ta tên là* **react-redux.**
  - đảm bảo các components kết nối được với Store
    - **The Provider component:** là thành phần bao quanh components tree. Giúp các components con kết nối với Store dễ dàng thông qua connect()
    - **connect()** : là function cung cấp bởi The view layer binding như react-redux. Nếu một *component muốn nhận được update State, nó phải tự bao lại bằng connect()*. Sau đó, connect function sẽ thiết lập tất cả các hệ thống liên kết cho nó, bằng cách sử dụng selector
    - **selector** : Đây là function mà bạn viết. Nó chỉ rõ phần nào của State mà component cần như properties.

**The root component**
- Sẽ tạo ra The Store và chỉ định The Reducers nào được sử dụng, tập hợp The view layer binding cùng với The views.

### **Setup**
1. A Redux store is created using a root reducer function
2. The store calls the root reducer once, and saves the return value as its initial state
3. When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
### ***Data Flow***
**Redux uses a "one-way data flow" app structure**
1. Something happens in the app, such as a user clicking a button
2. The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/incremented'})`
3. The store runs the reducer function again with the `previous state` and the `current action`, and saves the return value as the `new state`
4. The store notifies all parts of the UI that are subscribed that the store has been updated
5. Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
6. Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen