// set initial count
let count = 0;
let total = 0;

//select value and buttons
const valu = document.querySelector('#valu')
const val = document.querySelector('#val')
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('save')){
            
            val.textContent += (count) + "/ ";
            
        }
        else if(styles.contains('add')){
                total = total + count
                valu.textContent = "Total: " + total   
        }
        else if(styles.contains('clear')){
            total = 0;
            count = 0;
            valu.textContent = "Total: " + total;
            val.textContent = "Count: " + "";
        }
        
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "black";
        }
        if(count < 0){
            value.style.color = "Red"
        }
        value.textContent = count;
        
    })
})