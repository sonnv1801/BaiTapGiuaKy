        function submit() {
            var user = document.getElementById("username").value;
            var Phone = document.getElementById("Phone").value;
            var Email = document.getElementById("Email").value;
            var passWord = document.getElementById("passWord").value;
            var passWordR = document.getElementById("passWordR").value;
            var User = document.getElementById('username');
            var email = document.getElementById('Email');
            var phone = document.getElementById('Phone');
            var password = document.getElementById('passWord');
            var box = document.getElementById("action");

            
            // Check Tất Cả
            if(user == "" || passWord == ""|| passWordR == "" || Phone == "" || Email== "" ){
                            alert('LỖI!\nVui lòng nhập đầy đủ thông tin!');
                        return ;
                            } 
            // Nếu Tên Nó Bé Hơn 1 Kí Tự Thì Sẽ alert()
                else{
                        var UserName = /^[a-zA-Z0-9_-]{2,16}$/ ;
                        if(!UserName.test(User.value)){
                            alert("LỖI!\nTên phải viết liền không dấu\n Ví dụ: J97")
                        return;
                            }           
                // Check PhoneNumber Theo Chỗi Đệ Quy
                else{

                    var phoneNumber = /^(09|03|07|08|05)\(?([0-9]{1})\)?[-.]?([0-9]{4})[-. ]?([0-9]{3})$/;
                        if(!phoneNumber.test(phone.value)){
                            alert('LỖI!\nSố điện thoại không đúng')
                        return ;
                            }
                
                // Check Email Theo Chỗi Đệ Quy
                else{

                    var checkemail = /^[A-Za-z][\w$.]+@(gmail|hotmail|live|donga.edu|edu.com|icloud|yahoo|outlook|msn|Yandex)+\.(com|vn|gov|info|net|org|mail)$/;
                    if (!checkemail.test(email.value)) {
                        alert('LỖI!\nĐịa chỉ Email không hợp lệ\n ví dụ: vanson123@gmail.com');
                        email.focus;
                    return false;
                            }
                
                // Check Password1 Theo Chuỗi Đệ Quy
                else{

                    var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số
                        if(!pass.test(password.value)){
                            alert('LỖI!\nMật khẩu không hợp lệ\n*Tối thiểu tám ký tự, ít nhất một chữ cái và một số');
                        return ;
                            }

                // Check 2 Password  Có Trùng Khớp Không?

                else{
                        if(passWord != passWordR){
                            alert("LỖI!\nMật khẩu nhập lại không trùng khớp")
                            return;
                            }
                // Check CheckBox 

                else{
                        if(box.checked){

                var submit = confirm('XÁC NHẬN THÔNG TIN CỦA BẠN\n'
                +'Tên: '+user+"\n"
                + 'Số Điện Thoại: '+Phone+"\n"
                +'Email: '+Email+"\n"
                +'Mật Khẩu: '+passWord+"\n"
                +'Xác nhận Mật Khẩu: '+passWordR)

                if(submit == 1){
                    alert('ĐĂNG KÍ THÀNH CÔNG')
                    location.reload(); // Tải Lại Trang
                }
                else{
                    alert('Nhập Lại Thông Tin')
                            }
                }
                else{
                    alert("LỖI!\nVui lòng đồng ý điều khoản! ")
                            return;
                                }
                            }

                        }
                    }
                }
            }    
        }  
        }
    // Check User Trong InPut

        function checkUsername(){
            var yourUser = document.getElementById("username").value;
            var thisyourUser = /^[a-zA-Z0-9_-]{2,16}$/ ; // Đủ 3 Kí Tự Và Dưới 16 Kí Tự , Không Dùng Tên Riêng VD: Văn Sơn / Đúng VD : Van_Son
            
            if(yourUser.match(thisyourUser)){
                document.getElementById("username").style.borderColor = "#05ad23"
                document.getElementById("hienUser").innerHTML = "Thông Minh Rồi Đó 😅"
                document.getElementById("hienUser").style.color = "#1cb811"


            }else{
             document.getElementById("username").style.borderColor = "#ff0505"
            document.getElementById("hienUser").innerHTML = "Nhập Tên Cho Đúng Bạn Ê 😠"
            document.getElementById("hienUser").style.color = "#ff0505"
            }
            // if(username == ""){
            // document.getElementById("username").style.borderColor = "#ff0505"
            // document.getElementById("hienUser").innerHTML = "Nhập Tên Vô Bạn Ê 😠"
            // document.getElementById("hienUser").style.color = "#ff0505"
            // }
        }
 
    // Check Phone Trong Input

        function CheckPhone(){
            var Phone = document.getElementById('Phone').value;
            var yourPhoneNumber = /^(09|03|07|08|05)\(?([0-9]{1})\)?[-.]?([0-9]{4})[-. ]?([0-9]{3})$/ // Đủ 10 Số 
            if(Phone.match(yourPhoneNumber)){
                document.getElementById('Phone').style.borderColor = "#05ad23";
                document.getElementById("hienPhone").innerHTML = "Thông Minh Rồi Đó 😅"
                document.getElementById("hienPhone").style.color = "#1cb811"
            }else{
                document.getElementById('Phone').style.borderColor = "#ff0505";
                document.getElementById("hienPhone").innerHTML = "Nhập Số Điện Thoại Cho Đúng Bạn Ê 😠"
                document.getElementById("hienPhone").style.color = "#ff0505"
            }
            // if(Phone == ""){
            // document.getElementById('Phone').style.borderColor = "#ff0505";
            // }
        }
            // Check Email Trong Input

        function checkEmail(){
        var email = document.getElementById("Email").value;
        var yourEmail =/^[A-Za-z][\w$.]+@(gmail|hotmail|live|donga.edu|edu.com|icloud|yahoo|outlook|msn|Yandex)+\.(com|vn|gov|info|net|org|mail)$/;  // Đúng Tên Miền @gmail.c** , Không Được Có Dấu "." Ở Đầu 

        if(email.match(yourEmail)){
            document.getElementById("Email").style.borderColor = "#05ad23"
            document.getElementById("hienEmail").innerHTML = "Thông Minh Rồi Đó 😅"
            document.getElementById("hienEmail").style.color = "#1cb811"
        }else{
            document.getElementById("Email").style.borderColor = "#ff0505"
            document.getElementById("hienEmail").innerHTML = "Nhập Email Cho Đúng Bạn Ê 😠"
            document.getElementById("hienEmail").style.color = "#ff0505"
        }
        // if(Email== ""){
        //     document.getElementById("Email").style.borderColor = "#ff0505"
        // }
        }
            // Check PassWord 1 Trong Input

        function password(){
        var password = document.getElementById("passWord").value;
        var yourPassword =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số

        if(password.match(yourPassword)){
            document.getElementById("passWord").style.borderColor = "#05ad23"
            document.getElementById("hienPass1").innerHTML = "Thông Minh Rồi Đó 😅"
            document.getElementById("hienPass1").style.color = "#1cb811"
        }else{
            document.getElementById("passWord").style.borderColor = "#ff0505"
            document.getElementById("hienPass1").innerHTML = "Nhập Mật Khẩu Cho Đúng Bạn Ê 😠"
            document.getElementById("hienPass1").style.color = "#ff0505"
        }
        // if(passWord == ""){
        //     document.getElementById("passWord").style.borderColor = "#ff0505"
        // }
        }

            // Check PassWord 2 Trong Input

        // function checkPassword(){
        //     var yourCheck = document.getElementById("passWordR").value;
            // var yourPassword =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số
            
            // if(passWordR == passWord){
            //     document.getElementById("passWordR").style.borderColor = "#05ad23"
            // document.getElementById("hienPass2").innerHTML = "Thông Minh Rồi Đó 😅"
            // document.getElementById("hienPass2").style.color = "#1cb811"
            // }else{
            //   document.getElementById("passWordR").style.borderColor = "#ff0505"
            //   document.getElementById("hienPass2").innerHTML = "Nhập Mật Khẩu Cho Đúng Bạn Ê 😠"
            // document.getElementById("hienPass2").style.color = "#ff0505"
            // }
            // if(passWordR == ""){
            //    document.getElementById("passWordR").style.borderColor = "#ff0505"
            // }
        //  }

        function bam() {
            var show = document.getElementById("passWord");
            if (show.type === "password") {
            show.type = "text";
            } else {
            show.type = "password";
            }
        }

        function bam1() {
            var show = document.getElementById("passWordR");
            if (show.type === "password") {
            show.type = "text";
            } else {
            show.type = "password";
            }
        }