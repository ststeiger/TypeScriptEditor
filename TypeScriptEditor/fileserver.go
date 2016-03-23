
package main


import (
    "fmt"
    "net/http"
    "strings"
)   

var chttp = http.NewServeMux()


func main() {
    fs := http.FileServer(http.Dir("./"))
    http.Handle("/", fs)
    fmt.Println("Listening on port 8080...")
    http.ListenAndServe(":8080", nil)
    
    
    // http.Handle("/", AuthHandler)
    // chttp.Handle("/", http.FileServer(http.Dir(".")))
    // // http.ListenAndServe(":8080", chttp)
    // fmt.Println("Listening on port 8080...")
    // http.ListenAndServe(":8080", nil)
}   


// http://stackoverflow.com/questions/14086063/serve-homepage-and-static-content-from-root
func AuthHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Println(r.URL.Path)

    if (strings.Contains(r.URL.Path, ".")) {
        chttp.ServeHTTP(w, r)
	return
    } 
    
    fmt.Fprintf(w, "AuthHandler")
} 


// http://www.shakedos.com/2014/Feb/08/serving-static-files-with-go.html

