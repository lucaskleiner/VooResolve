<!-- Adicionar usuario -->
<div class="modal fade" id="modalForAddExaminee" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
   <form class="refreshFrm" id="addExamineeFrm" method="post">
    
      <div class="modal-body">
        <div class="col-md-12">
          <div class="form-group">
            <label>Nome completo</label>
            <input type="" name="fullname" id="fullname" class="form-control" placeholder="digite seu nome" autocomplete="off" required="">
          </div>
          <div class="form-group">
            <label>Data de nascimento</label>
            <input type="date" name="bdate" id="bdate" class="form-control" placeholder="sua data de nascimento" autocomplete="off" >
          </div>
          <div class="form-group">
            <label><?php echo utf8_encode('Gênero'); ?></label>
            <select class="form-control" name="gender" id="gender">
              <option value="0"><?php echo utf8_encode('Selecionar'); ?></option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <div class="form-group">
            <label>Selecione seu problema</label>
            <select class="form-control" name="course" id="course">
              <option value="0">Selecionar</option>
              <?php 
                $selCourse = $conn->query("SELECT * FROM course_tbl ORDER BY cou_id asc");
                while ($selCourseRow = $selCourse->fetch(PDO::FETCH_ASSOC)) { ?>
                  <option value="<?php echo $selCourseRow['cou_id']; ?>"><?php echo $selCourseRow['cou_name']; ?></option>
                <?php }
               ?>
            </select>
          </div>
          <div class="form-group">
            <label>quando ocorreu?</label>
            <select class="form-control" name="year_level" id="year_level">
              <option value="0">6 MESES</option>
              <option value="first year">1 ANO</option>
              <option value="second year">2 ANOS</option>
              <option value="third year">3 ANOS</option>
              <option value="fourth year">4 ANOS</option>
            </select>
          </div>
          <div class="form-group">
            <label>E-mail</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="Input Email" autocomplete="off" required="">
          </div>
          <div class="form-group">
            <label>Senha</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="Input Password" autocomplete="off" required="">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="submit" class="btn btn-primary">Criar conta</button>
      </div>
    </div>
   </form>
  </div>
</div>


<!-- Adicionar questao -->
<div class="modal fade" id="feedbacksModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
   <form class="refreshFrm" id="addFeebacks" method="post">
     <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Fale Conosco</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="col-md-12">
          <div class="form-group">
            <label>Deixe seu Feedback</label><br>
            <?php 
               $selMe = $conn->query("SELECT * FROM examinee_tbl WHERE exmne_id='$exmneId' ")->fetch(PDO::FETCH_ASSOC);
             ?>
            <input type="radio" name="asMe" value="<?php echo $selMe['exmne_fullname']; ?>"> <?php echo $selMe['exmne_fullname']; ?> <br>
            <input type="radio" name="asMe" value="Anonymous"> <?php echo utf8_encode('Anônimo'); ?>
            
          </div>
          <div class="form-group">
           <textarea name="myFeedbacks" class="form-control" rows="3" placeholder="Digite sua mensagem.."></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>
    </div>
   </form>
  </div>
</div>