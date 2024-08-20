using Microsoft.AspNetCore.Components;
using System.Security.Cryptography;
namespace Blazor_WebAssembly_PWA_YuQin.Pages
{
    //public partial class CounterPartialClass : System.Object
    public partial class CounterPartialClass : ComponentBase
   
    {
       // NavigationManager _NavigationManager;
       /**
        public CounterPartialClass(NavigationManager navigationManager) 
        {
            _NavigationManager= navigationManager;
        }
       **/
       internal class MyNavigationManager: NavigationManager
        {
        }
        static private Int32 CurrentCount = 0;
        static private String MyHTML ="hi! MyHTML";
        static private String MyRawHTML = "hi! MyRawHTML";

        static private void IncrementCount()
        {
            CurrentCount++;
        }
        static private void ToggleHTML()
        {
            MyHTML = "<h1>" + MyHTML+"</h1>";
        }
        static private void ToggleRawHTML()
        {
            MyRawHTML= "<h1>" + MyRawHTML + "</h1>";
        }
        protected override void OnInitialized()
        {

            // _NavigationManager.NavigateTo("/counter_partial_class");
            /**
            MyNavigationManager myNavigationManager = new MyNavigationManager();
          myNavigationManager.NavigateTo("/counter_partial_class");
            **/
            CurrentCount = 10;
        }

        protected override void OnAfterRender(Boolean firstRender)
        {
            base.OnAfterRender(firstRender);
        }
        protected override void OnParametersSet()
        {
            base.OnParametersSet();
        }
    }
}