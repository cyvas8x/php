<?php
require '../koneksi.php';
$idd = $_GET["id"];
$que = query("SELECT * FROM link WHERE id = $idd");
$a = $que[0]["judul"];
?>

<!DOCTYPE html>
<html>

<head>
  <title></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <center>
    <h1>
      <?= $a ?>
    </h1>
    <div class="text">
      <textarea rows="10" cols="50" readonly>
        <?= file_get_contents("../files/$a.txt"); ?>
      </textarea>
    </div>
  </center>

</body>

</html>
