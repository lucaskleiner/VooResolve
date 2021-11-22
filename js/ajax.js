// Login de usuario
$(document).on("submit","#examineeLoginFrm", function(){
   $.post("query/loginExe.php", $(this).serialize(), function(data){
      if(data.res == "invalid")
      {
        Swal.fire(
          'Invalid',
          'por gentileza preencha seu email / password',
          'error'
        )
      }
      else if(data.res == "success")
      {
        $('body').fadeOut();
        window.location.href='home.php';
      }
   },'json');

   return false;
});




// Iniciar elegibilidade
$(document).on('submit', '#submitAnswerFrm', function(){
  var examAction = $('#examAction').val();

  if(examAction != "")
  {
    Swal.fire({
    title: 'Time Out',
    text: "your time is over, please click ok",
    icon: 'warning',
    showCancelButton: false,
    allowOutsideClick: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'OK!'
}).then((result) => {
if (result.value) {

   $.post("query/submitAnswerExe.php", $(this).serialize(), function(data){

    if(data.res == "alreadyTaken")
    {
       Swal.fire(
         'Already Taken',
         "you already take this exam",
         'error'
       ) 
    }
    else if(data.res == "success")
    {
        Swal.fire({
            title: 'Concluido com sucesso',
            text: "Sua analise foi concluida!",
            icon: 'success',
            allowOutsideClick: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK!'
        }).then((result) => {
        if (result.value) {
          $('#submitAnswerFrm')[0].reset();
           var exam_id = $('#exam_id').val();
           window.location.href='home.php?pagina=resultado&id=' + exam_id;
        }

        });


    }
    else if(data.res == "failed")
    {
     Swal.fire(
         'Error',
         "Something;s went wrong",
         'error'
       ) 
    }

   },'json');

}
});
  }
  else
  {
      Swal.fire({
    title: 'Are you sure?',
    text: "you want to submit your answer now?",
    icon: 'warning',
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, submit now!'
}).then((result) => {
if (result.value) {

   $.post("query/submitAnswerExe.php", $(this).serialize(), function(data){

    if(data.res == "alreadyTaken")
    {
       Swal.fire(
         'Already Taken',
         "you already take this exam",
         'error'
       ) 
    }
    else if(data.res == "success")
    {
        Swal.fire({
            title: 'Success',
            text: "Analise realizada!",
            icon: 'success',
            allowOutsideClick: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK!'
        }).then((result) => {
        if (result.value) {
          $('#submitAnswerFrm')[0].reset();
           var exam_id = $('#exam_id').val();
           window.location.href='home.php?pagina=resultado&id=' + exam_id;
        }

        });


    }
    else if(data.res == "failed")
    {
     Swal.fire(
         'Error',
         "Something;s went wrong",
         'error'
       ) 
    }

   },'json');

}
});
  }








return false;
});


// Submit Feedbacks
$(document).on("submit","#addFeebacks", function(){
   $.post("query/submitFeedbacksExe.php", $(this).serialize(), function(data){
      if(data.res == "limit")
      {
        Swal.fire(
          'Error',
          'You reached the 3 limit maximum for feedbacks',
          'error'
        )
      }
      else if(data.res == "success")
      {
        Swal.fire(
          'Success',
          'your feedbacks has been submitted successfully',
          'success'
        )
          $('#addFeebacks')[0].reset();
        
      }
   },'json');

   return false;
});

// Login de usuario
$(document).on("submit","#adminLoginFrm", function(){
   $.post("query/loginExe.php", $(this).serialize(), function(data){
      if(data.res == "invalid")
      {
        Swal.fire(
          'Invalid',
          'Please input valid username / password',
          'error'
        )
      }
      else if(data.res == "success")
      {
        $('body').fadeOut();
        window.location.href='home.php';
      }
   },'json');

   return false;
});



// Adicionar problema 
$(document).on("submit","#addCourseFrm" , function(){
  $.post("query/addCourseExe.php", $(this).serialize() , function(data){
  	if(data.res == "exist")
  	{
  		Swal.fire(
  			'Already Exist',
  			data.course_name.toUpperCase() + ' Already Exist',
  			'error'
  		)
  	}
  	else if(data.res == "success")
  	{
  		Swal.fire(
  			'Success',
  			data.course_name.toUpperCase() + ' Successfully Added',
  			'success'
  		)
          // $('#course_name').val("");
          refreshDiv();
            setTimeout(function(){ 
                $('#body').load(document.URL);
             }, 2000);
  	}
  },'json')
  return false;
});

// ADICIONAR USUARIO
$(document).on("submit","#addExamineeFrm" , function(){
  $.post("query/addExamineeExe.php", $(this).serialize() , function(data){
    if(data.res == "noGender")
    {
      Swal.fire(
          'No Gender',
          'Por gentileza selecione um genero',
          'error 404'
       )
    }
    else if(data.res == "noCourse")
    {
      Swal.fire(
          'No Course',
          'Selecione seu problema',
          'error 404'
       )
    }
    else if(data.res == "noLevel")
    {
      Swal.fire(
          'No Year Level',
          'quando ocorreu?',
          'error 404'
       )
    }
    else if(data.res == "fullnameExist")
    {
      Swal.fire(
          'Nome ja cadastrado em nosso sistema',
          data.msg + ' are already exist',
          'error'
       )
    }
    else if(data.res == "emailExist")
    {
      Swal.fire(
          'E-mail ja cadastrado em nosso sistema',
          data.msg + ' are already exist',
          'error'
       )
    }
    else if(data.res == "success")
    {
      Swal.fire(
          'Success',
          data.msg + ' are now successfully added',
          'success'
       )
        refreshDiv();
        $('#addExamineeFrm')[0].reset();
    }
    else if(data.res == "failed")
    {
      Swal.fire(
          "Something's Went Wrong",
          '',
          'error'
       )
    }


    
  },'json')
  return false;
});



// Atualiza usuario
$(document).on("submit","#updateExamineeFrm" , function(){
  $.post("query/updateExamineeExe.php", $(this).serialize() , function(data){
     if(data.res == "success")
     {
        Swal.fire(
            'Success',
            data.exFullname + ' <br> atualizado com sucesso!',
            'success'
          )
          refreshDiv();
     }
  },'json')
  return false;
});


function refreshDiv()
{
  $('#tableList').load(document.URL +  ' #tableList');
  $('#refreshData').load(document.URL +  ' #refreshData');

}




