using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using IdentityDemo.Models;
using IdentityDemo.Models.AccountViewModels;
using IdentityDemo.Services;
using Microsoft.AspNetCore.Http;
using IdentityDemo.Models;
using IdentityDemo.Models.AccountViewModels;
using IdentityDemo.Services;

namespace IdentityDemo.Controllers
{
    [Authorize]
    //[Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationIdentityUser> _ApplicationUserManager;
        private readonly SignInManager<ApplicationIdentityUser> _ApplicationUserSignInManager;
        private readonly IEmailSender _ApplicationIEmailSender;
        private readonly ILogger _ApplicationILogger;

        public AccountController(
            UserManager<ApplicationIdentityUser> applicationUserManager,
            SignInManager<ApplicationIdentityUser> applicationUserSignInManager,
            IEmailSender applicationIEmailSender,
            ILogger<AccountController> applicationILogger)
        {
            _ApplicationUserManager = applicationUserManager;
            _ApplicationUserSignInManager = applicationUserSignInManager;
            _ApplicationIEmailSender = applicationIEmailSender;
            _ApplicationILogger = applicationILogger;
        }

        [TempData]
        public string ErrorMessage { get; set; }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string returnUrl = null)
        {
            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid)
            {
                // This does not count login failures towards account lockout
                // To enable password failures to trigger account lockout,
                // set lockoutOnFailure: true
                var result = await _ApplicationUserSignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    _ApplicationILogger.LogInformation("User logged in.");
                    return RedirectToLocal(returnUrl);
                }
                if (result.RequiresTwoFactor)
                {
                    return RedirectToAction(nameof(LoginWith2fa), new { returnUrl, model.RememberMe });
                }
                if (result.IsLockedOut)
                {
                    _ApplicationILogger.LogWarning("User account locked out.");
                    return RedirectToAction(nameof(Lockout));
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return View(model);
                }
            }

            // If execution got this far, something failed, redisplay the form.
            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> LoginWith2fa(bool rememberMe, string returnUrl = null)
        {
            // Ensure that the user has gone through the username & password screen first
            var user = await _ApplicationUserSignInManager.GetTwoFactorAuthenticationUserAsync();

            if (user == null)
            {
                throw new ApplicationException($"Unable to load two-factor authentication user.");
            }

            var model = new LoginWith2faViewModel { RememberMe = rememberMe };
            ViewData["ReturnUrl"] = returnUrl;

            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginWith2fa(LoginWith2faViewModel model, bool rememberMe, string returnUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = await _ApplicationUserSignInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{_ApplicationUserManager.GetUserId(User)}'.");
            }

            var authenticatorCode = model.TwoFactorCode.Replace(" ", string.Empty).Replace("-", string.Empty);

            var result = await _ApplicationUserSignInManager.TwoFactorAuthenticatorSignInAsync(authenticatorCode, rememberMe, model.RememberMachine);

            if (result.Succeeded)
            {
                _ApplicationILogger.LogInformation("User with ID {UserId} logged in with 2fa.", user.Id);
                return RedirectToLocal(returnUrl);
            }
            else if (result.IsLockedOut)
            {
                _ApplicationILogger.LogWarning("User with ID {UserId} account locked out.", user.Id);
                return RedirectToAction(nameof(Lockout));
            }
            else
            {
                _ApplicationILogger.LogWarning("Invalid authenticator code entered for user with ID {UserId}.", user.Id);
                ModelState.AddModelError(string.Empty, "Invalid authenticator code.");
                return View();
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> LoginWithRecoveryCode(string returnUrl = null)
        {
            // Ensure the user has gone through the username & password screen first
            var user = await _ApplicationUserSignInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                throw new ApplicationException($"Unable to load two-factor authentication user.");
            }

            ViewData["ReturnUrl"] = returnUrl;

            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginWithRecoveryCode(LoginWithRecoveryCodeViewModel model, string returnUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = await _ApplicationUserSignInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                throw new ApplicationException($"Unable to load two-factor authentication user.");
            }

            var recoveryCode = model.RecoveryCode.Replace(" ", string.Empty);

            var result = await _ApplicationUserSignInManager.TwoFactorRecoveryCodeSignInAsync(recoveryCode);

            if (result.Succeeded)
            {
                _ApplicationILogger.LogInformation("User with ID {UserId} logged in with a recovery code.", user.Id);
                return RedirectToLocal(returnUrl);
            }
            if (result.IsLockedOut)
            {
                _ApplicationILogger.LogWarning("User with ID {UserId} account locked out.", user.Id);
                return RedirectToAction(nameof(Lockout));
            }
            else
            {
                _ApplicationILogger.LogWarning("Invalid recovery code entered for user with ID {UserId}", user.Id);
                ModelState.AddModelError(string.Empty, "Invalid recovery code entered.");
                return View();
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Lockout()
        {
            return View();
        }
        /**
        [HttpGet]
        [AllowAnonymous]
                public IActionResult Register(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }
        **/



        [HttpPost]       
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]//本来应该设置，但设置了就会禁止访问
        /**
         public async Task<IActionResult> Register(RegisterViewModel model, string returnUrl = null)
         {
             //ViewData["ReturnUrl"] = returnUrl;
             if (ModelState.IsValid)
             {
                 var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                 var result = await _userManager.CreateAsync(user, model.Password);
                 if (result.Succeeded)
                 {
                     _logger.LogInformation("User created a new account with password.");

                     var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                     var callbackUrl = Url.EmailConfirmationLink(user.Id, code, Request.Scheme);
                     await _emailSender.SendEmailConfirmationAsync(model.Email, callbackUrl);

                     await _signInManager.SignInAsync(user, isPersistent: false);
                     _logger.LogInformation("User created a new account with password.");
                    // return RedirectToLocal(returnUrl);
                     return Ok(model.Email+"注册成功");
                 }
                 AddErrors(result);
             }

             // If execution got this far, something failed, redisplay the form.
             //return View(model);
             return Ok("系统出错，请重试！");
         }
         **/
        public async Task<IActionResult> Register()
        {
         RegisterViewModel registerViewModel = new RegisterViewModel();
            
          String eMail= Request.Form["Input.Email"];
          String password = Request.Form["Input.Password"];
          String confirmPassword = Request.Form["Input.ConfirmPassword"];
            registerViewModel.Email = eMail;
            registerViewModel.Password = password;
            registerViewModel.ConfirmPassword = confirmPassword;
           // return Ok("已成功注册账号:" + registerViewModel.Email + "。可关闭当前界面!");
            if (password == confirmPassword)
            {
                //if (this.ModelState.IsValid)//IsValid属性是检查ModelState.Errors是否存在任何字段validation错误的快速方法。 如果您不确定在POST到控制器方法时导致模型无效的原因，您可以检查ModelState.Errors属性，该属性应至少产生一个表单validation错误。如果不加验证相关的特性，ModelState.IsValid会永远为true；如果加了验证相关的特性，不满足验证规则时，ModelState.IsValid为false.接收到参数属性类型与Model定义不符时，ModelState.IsValid也会为false.
               // {
                    ///**         
                    ApplicationIdentityUser applicationIdentityUser = new ApplicationIdentityUser { UserName = eMail, Email = eMail };
                    var result = await _ApplicationUserManager.CreateAsync(applicationIdentityUser, password);
                    if (result.Succeeded)
                    {
                        _ApplicationILogger.LogInformation("User created a new account with password.");

                        var code = await _ApplicationUserManager.GenerateEmailConfirmationTokenAsync(applicationIdentityUser);
                        var callbackUrl = Url.EmailConfirmationLink(applicationIdentityUser.Id, code, Request.Scheme);
                        await _ApplicationIEmailSender.SendEmailConfirmationAsync(eMail, callbackUrl);

                        await _ApplicationUserSignInManager.SignInAsync(applicationIdentityUser, isPersistent: false);
                        _ApplicationILogger.LogInformation("User created a new account with password.");
                        // return RedirectToLocal(returnUrl);
                        AddErrors(result);
                        return Ok("已成功注册账号:" + registerViewModel.Email + "。可关闭当前界面!");
                    }
                    else
                    {
                        return Ok("未能成功注册账号，虽然数据库的模型验证通过，但是操作数据库出错！请重试");
                    }
                    
                    // **/
                    
               // }
               // else { 
               //     return Ok("未能成功注册账号，因为数据库的模型验证出错！请重试"); 
               // }
            }

            else
            {
                return Ok("未能成功注册账号，因为口令与确认口令不一致！");
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            await _ApplicationUserSignInManager.SignOutAsync();
            _ApplicationILogger.LogInformation("User logged out.");
            // return RedirectToAction(nameof(HomeController.Index), "Home");
            return RedirectToAction("index.html");
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public IActionResult ExternalLogin(string provider, string returnUrl = null)
        {
            // Request a redirect to the external login provider.
            var redirectUrl = Url.Action(nameof(ExternalLoginCallback), "Account", new { returnUrl });
            var properties = _ApplicationUserSignInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return Challenge(properties, provider);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ExternalLoginCallback(string returnUrl = null, string remoteError = null)
        {
            if (remoteError != null)
            {
                ErrorMessage = $"Error from external provider: {remoteError}";
                return RedirectToAction(nameof(Login));
            }
            var info = await _ApplicationUserSignInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                return RedirectToAction(nameof(Login));
            }

            // Sign in the user with this external login provider if the user already has a login.
            var result = await _ApplicationUserSignInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
            if (result.Succeeded)
            {
                _ApplicationILogger.LogInformation("User logged in with {Name} provider.", info.LoginProvider);
                return RedirectToLocal(returnUrl);
            }
            if (result.IsLockedOut)
            {
                return RedirectToAction(nameof(Lockout));
            }
            else
            {
                // If the user does not have an account, then ask the user to create an account.
                ViewData["ReturnUrl"] = returnUrl;
                ViewData["LoginProvider"] = info.LoginProvider;
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                return View("ExternalLogin", new ExternalLoginViewModel { Email = email });
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ExternalLoginConfirmation(ExternalLoginViewModel model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {
                // Get the information about the user from the external login provider
                var info = await _ApplicationUserSignInManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    throw new ApplicationException("Error loading external login information during confirmation.");
                }
                var user = new ApplicationIdentityUser { UserName = model.Email, Email = model.Email };
                var result = await _ApplicationUserManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    result = await _ApplicationUserManager.AddLoginAsync(user, info);
                    if (result.Succeeded)
                    {
                        await _ApplicationUserSignInManager.SignInAsync(user, isPersistent: false);
                        _ApplicationILogger.LogInformation("User created an account using {Name} provider.", info.LoginProvider);
                        return RedirectToLocal(returnUrl);
                    }
                }
                AddErrors(result);
            }

            ViewData["ReturnUrl"] = returnUrl;
            return View(nameof(ExternalLogin), model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                //return RedirectToAction(nameof(HomeController.Index), "Home");
                return RedirectToAction("LogIn.html");
            }
            var user = await _ApplicationUserManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{userId}'.");
            }
            var result = await _ApplicationUserManager.ConfirmEmailAsync(user, code);
            return View(result.Succeeded ? "ConfirmEmail" : "Error");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _ApplicationUserManager.FindByEmailAsync(model.Email);
                if (user == null || !(await _ApplicationUserManager.IsEmailConfirmedAsync(user)))
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    return RedirectToAction(nameof(ForgotPasswordConfirmation));
                }

                // For more information on how to enable account confirmation and password reset please
                // visit https://go.microsoft.com/fwlink/?LinkID=532713
                var code = await _ApplicationUserManager.GeneratePasswordResetTokenAsync(user);
                var callbackUrl = Url.ResetPasswordCallbackLink(user.Id, code, Request.Scheme);
                await _ApplicationIEmailSender.SendEmailAsync(model.Email, "Reset Password",
                   $"Please reset your password by clicking here: <a href='{callbackUrl}'>link</a>");
                return RedirectToAction(nameof(ForgotPasswordConfirmation));
            }

            // If execution got this far, something failed, redisplay the form.
            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ForgotPasswordConfirmation()
        {
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ResetPassword(string code = null)
        {
            if (code == null)
            {
                throw new ApplicationException("A code must be supplied for password reset.");
            }
            var model = new ResetPasswordViewModel { Code = code };
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var user = await _ApplicationUserManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return RedirectToAction(nameof(ResetPasswordConfirmation));
            }
            var result = await _ApplicationUserManager.ResetPasswordAsync(user, model.Code, model.Password);
            if (result.Succeeded)
            {
                return RedirectToAction(nameof(ResetPasswordConfirmation));
            }
            AddErrors(result);
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ResetPasswordConfirmation()
        {
            return View();
        }


        [HttpGet]
        public IActionResult AccessDenied()
        {
            return View();
        }

        #region Helpers

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                //return RedirectToAction(nameof(HomeController.Index), "Home");                
                return RedirectToAction("LogIn.html");
            }
        }

        #endregion
    }
}
