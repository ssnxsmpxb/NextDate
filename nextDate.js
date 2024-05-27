//6321610160 Sasina Simapun Sec.700
function myFunction() {
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);

    document.getElementById("input").innerHTML = 'Input Date =>' + day + '/' + month + '/' + year;
    //เช็คเดือน 1 ถึง 12
    if (month >= 1 && month <= 12) {
        //เดือนที่ลงท้ายคม
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day >= 1 && day < 31) {
                //bug ตัวที่ 1 ถ้าเป็นวันที่ 12 เดือน 7 จะแสดงว่า Happy Birth Day to Me!
                //แบบที่ถูกต้องจะแสดงวันที่ 13 เดือน 7
                if (day == 12 && month == 7) {
                    document.getElementById("demo").innerHTML = 'Happy Birth Day to Me!';
                }
                //bug ตัวที่ 2 ถ้าเป็นวันที่ 8 เดือน 8 จะเป็นวันที่ 7
                //แบบที่ถูกต้องจะแสดงวันที่ 9 เดือน 8
                else if (day == 8 && month == 8) {
                    day = day - 1;
                    document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                }
                else {
                    day = day + 1;
                    document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                }
            } else if (day == 31) {
                day = 1;
                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                //bug ตัวที่ 4 ถ้าเป็นวันที่ 31 เดือน 12 จะแสดงว่า Happy New Year!
                //แบบที่ถูกต้องจะแสดงวันที่ 1 เดือน 1
                if (month == 12) {
                    // month = 1;
                    // year = year + 1;
                    // document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                    document.getElementById("demo").innerHTML = 'Happy New Year!';
                } else {
                    month = month + 1;
                    document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                }
            }
            else {
                document.getElementById("demo").innerHTML = 'Invalid Date';
            }
        }
        //เดือนที่ลงท้าย ยน
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            if (day >= 1 && day < 30) {
                day = day + 1;
                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
            }
            else if (day == 30) {
                day = 1;
                month = month + 1;
                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
            } else {
                document.getElementById("demo").innerHTML = 'Invalid Date';
            }
        }
        // เดือนกุมภาพันธ์
        else if (month == 2) {
            //คำนวน leap year
            if (year % 4 == 0) {
                if (year % 100 == 0) {
                    if (year % 400 == 0) {
                        if (day >= 1 && day < 29) {
                            //bug ตัวที่ 5 ถ้าเป็นวันที่ 14 เดือน 2 จะแสดงว่า Not have this Date!!!
                            //แบบที่ถูกต้องจะแสดงวันที่ 15 เดือน 2
                            if (day == 14) {
                                document.getElementById("demo").innerHTML = 'Not have this Date!!!';
                            }
                            else {
                                day = day + 1;
                                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                            }
                        }
                        else if (day == 29) {
                            //bug ตัวที่ 3 ถ้าเป็นวันที่ 29 ปี 2000 วันที่ จะวัน เดือน ปี จะทวีคูณ
                            //แบบที่ถูกต้องจะแสดงวันที่ 1 เดือน 3 ปี 2000
                            if (year == 2000) {
                                day = day * day;
                                month = month * month;
                                year = year * year;
                                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                            }
                            else {
                                day = 1;
                                month = month + 1;
                                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                            }
                        }
                        else {
                            document.getElementById("demo").innerHTML = 'Invalid Date';
                        }
                    } else if (day >= 1 && day < 28) {
                        day = day + 1;
                        document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                    }
                    else if (day == 28) {
                        day = 1;
                        month = month + 1;
                        document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                    } else {
                        document.getElementById("demo").innerHTML = 'Invalid Date';
                    }
                } else if (day >= 1 && day < 29) {
                    day = day + 1;
                    document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                }
                else if (day == 29) {
                    day = 1;
                    month = month + 1;
                    document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                } else {
                    document.getElementById("demo").innerHTML = 'Invalid Date';
                }
            } else if (day >= 1 && day < 28) {
                //bug ตัวที่ 5 ถ้าเป็นวันที่ 14 เดือน 2 จะแสดงว่า Not have this Date!!!
                //แบบที่ถูกต้องจะแสดงวันที่ 15 เดือน 2
                if (day == 14) {
                    document.getElementById("demo").innerHTML = 'Not have this Date!!!';
                }
                else {
                    day = day + 1;
                    document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
                }
            }
            else if (day == 28) {
                day = 1;
                month = month + 1;
                document.getElementById("demo").innerHTML = 'Next Date =>' + day + '/' + month + '/' + year;
            } else {
                document.getElementById("demo").innerHTML = 'Invalid Date';
            }
        }

    } else {
        document.getElementById("demo").innerHTML = 'Invalid Date';
    }

    //วาง bug
    //bug ตัวที่ 1 ถ้าเป็นวันที่ 12 เดือน 7 จะแสดงว่า Happy Birth Day to Me!
    //bug ตัวที่ 2 ถ้าเป็นวันที่ 8 เดือน 8 จะเป็นวันที่ 7
    //bug ตัวที่ 3 ถ้าเป็นวันที่ 29 ปี 2000 วันที่ จะวัน เดือน ปี จะทวีคูณ
    //bug ตัวที่ 4 ถ้าเป็นวันที่ 31 เดือน 12 จะแสดงว่า Happy New Year!
    //bug ตัวที่ 5 ถ้าเป็นวันที่ 14 เดือน 2 จะแสดงว่า Not have this Date!!!

}
