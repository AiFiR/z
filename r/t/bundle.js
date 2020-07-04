$(document).ready(function(){
  setTimeout(function(){
  $('#centServerMenu').toggleClass('centConfigMenuCf'),
  $('#centServerNav2').toggleClass('centUploadNav2'),
  $('#centServerNav0').toggleClass('centUploadNav0'),
  $('#centServerNav1').toggleClass('centServerNav1'),
  $('#centServerNavF').toggleClass('centUploadNavF')
  },800)
}),
$('#centServerMenuSm').click(function(){
  $('#centServerMenu').toggleClass('centConfigMenuCf'),
  $('#centServerNav2').toggleClass('centUploadNav2'),
  $('#centServerNav0').toggleClass('centUploadNav0'),
  $('#centServerNav1').toggleClass('centServerNav1'),
  $('#centServerNavF').toggleClass('centUploadNavF')
}),
$('#nextConfig').click(function(){
  $('#centEdiCplNav').toggleClass('centEdiClp centCheMrk'),
  $('#centCheMrkMenu').toggleClass('centConfNav1'),
  $('#centConfNav0').toggleClass('centConfNav0'),
  $('#centConfNav2').toggleClass('centConfNav2'),
  $('#centConfNav3').toggleClass('centConfNav3'),
  $('#centConfNav4').toggleClass('centConfNav4'),
  $('#centConfNav5').toggleClass('centConfNav5'),
  $('#centCheMrkMenuSpec').toggleClass('centConfNav2'),
  $('#centCritical').toggleClass('centCriticalMax')
}),
$('#nextConfig').attr('title','Edit Configuration').click(function(){
  var titleVa='Lock Configuration';
  $(this).hasClass('centConfNav0')&&(titleVa='Edit Configuration'),
  $(this).attr('title',titleVa)
}),
$('#centNextToken').click(function(){
  $('#centDim').toggleClass('centDims1Nav'),
  $('#centTokenNav').toggleClass('centTokenH centTokenS'),
  $('#centEyeNav').toggleClass('centEyeClo centEyeOpn')
}),
$('#centNextToken2').click(function(){
  $('#centDims2').toggleClass('centDims1Nav2'),
  $('#centTokenNav2').toggleClass('centTokenH centTokenS'),
  $('#centEyeNav2').toggleClass('centEyeClo centEyeOpn')
}),
/*crit:cross-platform-compat-reload-to-top*/
$(window).on('beforeunload',function(){$(window).scrollTop(0)});