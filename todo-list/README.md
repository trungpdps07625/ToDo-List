This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

1.
- Thư viện CSS : Animation, tạo nhanh các hiệu ứng.
- Thư viện JS : React js , jQuery , Sortable 
2.
 - Đầu tiên khi chương trình bắt đầu chạy lệnh đầu tiên của chương trình (console.log('first line')) sẽ được đưa vào trong CALL STACK.
 - Lệnh này lập tức trả về dòng chữ ( first line ) đồng nghĩa với việc nó đã chạy xong và được đẩy ra khỏi CALL STACK.
 - Tiếp đến hàm setTimeout(function() { console.log('second line'); }, 1000); được đưa vào trong CALL STACK để thực hiện.
 - Tuy nhiên hàm nay không trả về kết qua ngay mà phải đợi 1 giây. Hàm setTimeout() ở đây chính là một API mà WEB APIs cung cấp. Lập tức đoạn code này được chuyển vào trong WEB APIs và trình duyệt sẽ tạo ra một bộ hẹn giờ tương ứng với thời gian trên là 1 giây trước khi trả về kết quả.
 - Khi đoạn code thứ 2 được chuyển sang WEB APIs thì lập tức đoạn code cuối cùng console.log('last line ') đã được đưa vào CALL STACK để thực hiện và trả về kết quả là dòng chữ ( last line ). Sau đó đoạn code này cũng được đẩy ra khỏi CALL STACK.
 - Sau khi bộ giờ trong WEB APIs chạy xong thì kết quả trả về lúc này không được in ngay ra màn hình mà nó được đẩy vào CALLBACK QUEUE.
 - EVENT LOOP với chức năng liên tục giám sát xem CALL STACK đã trống chưa và CALLBACK QUEUE có gì không. Lúc này CALLBACK QUEUE đang chứa kết quả mà WEB APIs trả về nên và CALL STACK lúc này cũng đã trống do toàn bộ code trong chương trình đã được thực hiện nên nó sẽ đẩy kết quả trong CALLBACK QUEUE vào lại CALL STACK và đoạn code console.log('second line') được thực hiện và trả kết quả ra màn hình.
3.
-jQuery là chỉ thư viện để thao tác với DOM.
-AngularJs là MVC hay MVVM framework, thường dùng để phát triển SPA. Có 2 phiên bản Angular khác nhau hoàn toàn, Angular JS và Angular 2. jQuery và Angular không liên quan gì nhau.
-ReactJs là thư viện để xây dựng giao diện, nó chỉ là phần V trong MVC.
4.
-Float là một kỹ thuật mà chúng ta thiết lập phần tử HTML trôi dạt về một hướng nào đó để lấp đầy các khoảng trống nếu có thể trong một khung chứa.
-Clearfix là kỹ thuật ngăn không cho các phần tử khác float theo.
-Khi áp dụng float chúng ta có bốn phần chính cần quan tâm:
   + Khung chứa
   + Phần tử trôi dạt
   + Các phần tử bị trôi dạt kéo theo
   + Kích thước của phần tử trôi dạt
5.
- Thuộc tính z-index giống như đánh số thứ tự hiển thị, thẻ nào có z-index cao thì nằm phía trên và thẻ nào có z-index thấp thì nằm phía dưới.
6.
- CSS Sprites nó là một phương thức dùng để gộp nhiều ảnh nền cần sử dụng vào một file hình duy nhất và thường sử dụng thuộc tính background-position để xác định vị trí thành phần ảnh nền cần sử dụng.
- Để lấy được icon theo đúng ý mình muốn lúc này mình sẽ dùng thuộc tính background-position để xác định vị trí của icon, height và width là hai thuộc tính dùng để scale đúng icon trong bức ảnh.