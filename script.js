function getFormvalue() {
    //Write your code here
	let fname = document.querySelector('#form1 input[name="fname"]')
	let lname = document.querySelector('#form1 input[name="lname"]')

	let first = fname.value
	let last = lname.value;
	alert(first+" "+last);
	

}
