
function errorHandler(res:any){
    if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
    }
}
export default errorHandler;