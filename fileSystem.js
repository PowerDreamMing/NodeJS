const fs = require('fs')

/*
fs.writeFile('./demo.txt','NodeJS入門課程',()=>{
    console.log('寫入已經完成')
})
*/

/*
fs.readFile('./demo.txt',(error,data)=>{
    if(error)
        console.log(error)
    else
        console.log(data.toString())
})
*/

if(!fs.existsSync('./image'))
{
fs.mkdir('./image',(error)=>{
    if(error)
        console.log(error)
    else
        console.log('資料夾已成創立')
})
}


/*     if(fs.existsSync('./delete.txt')){
    fs.unlink('./delete.txt',(error)=>{
        if(error)
            console.log(error)
        else
            console.log('檔案已經刪除')
    })        
    }  */
    
