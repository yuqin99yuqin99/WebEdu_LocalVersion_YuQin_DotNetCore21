var province = document.querySelector("#province");
  var city = document.querySelector("#city");
  var county = document.querySelector("#county");
  //二级联动不用定义你选的省份,直接用省份(key)来决定下面的市(value)值
  var provinceName = null;
 
  for (ele in region){
    var op = new Option(ele , ele , false , false); //new Option("文本","值",true,true).后面两个true分别表示默认被选中和有效
    //console.log(op);
    province.options[province.length] = op;
  }
 
  var change = function(src){
    city.innerHTML = "";
    if(src === '请选择省份'){
      var op = new Option('请选择地市' , '请选择地市' , false , false);
      city.options[0] = op;
    }else{
      for (index in region[src]){
        //console.log(index);
        var op = new Option(index , index , false , false);
        city.options[city.length] = op;
      }
    }
    //记住选择省份的值
    provinceName=src;
    countyChange(city.value)
  }
 
  var countyChange = function(src2){
    county.innerHTML = "";
    if(src2 === '请选择地市'){
      var op = new Option('请选择县城','请选择县城', false , false);
      county.options[0] = op;
    }else{
      for (index in region[provinceName][src2]){
        //console.log(index);
        var op = new Option(region[provinceName][src2][index] , region[provinceName][src2][index] , false , false);
        county.options[county.length] = op;
      }
    }
  }