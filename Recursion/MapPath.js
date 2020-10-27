function path(n,m){
    if(m === 1 || n === 1){
        return 1
    }
    return path(n-1,m) + path(n,m-1)
}

console.log(path(3,3));