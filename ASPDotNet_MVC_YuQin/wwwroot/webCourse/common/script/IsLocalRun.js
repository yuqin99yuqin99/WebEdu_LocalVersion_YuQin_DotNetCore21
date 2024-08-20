function fnIsLocalRun() {
    if (window.URL.toString().toUpperCase().indexOf("LOCALHOST")>=0) {
        return true;
    }
    else { return false; }
}