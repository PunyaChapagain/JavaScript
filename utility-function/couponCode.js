function myVoucher(check) {




    if (check.match(/^\(?(\d{5})\)?-?(\d{5})-?([A-Z]{2})$/)) {


        // calculating value of first five number

        let firstAlpha = (((check[0] * check[1]) + check[2] * 1) * check[3] + check[4] * 1) % 26;
        //calculating value of second five number
        let firstAlpha1 = (((check[6] * check[7]) + check[8] * 1) * check[9] + check[10] * 1) % 26;
        // Converting value of A to 0 and goes on
        let textValue = (check.charCodeAt(12) - 65);

        let textValue1 = (check.charCodeAt(13) - 65);

        // Checking if my  value is valid
        if ((firstAlpha == textValue) && (firstAlpha1 == textValue1))
            return "you have a valid coupon"

        return "enter a valid coupon"


    }
}


console.log(myVoucher("12311-12311-GG"))