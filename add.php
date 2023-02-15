<?php
require 'koneksi.php';
if (isset($_POST['submit'])) {
  $judul = $_POST['judul'];
  $jenis_file = $_POST['jenis_file'];
  $kode = $_POST['kode'];

  if (tambah($_POST) > 0) {
    $folder = "files/";
    if (!is_dir($folder)) {
      mkdir($folder, 0777, true);
    }

    $nama_file = $folder . $judul . ".txt";
    file_put_contents($nama_file, $kode);

    header("Location: index.php");
  }
}
?>

<html>

<head>
  <title>Tambah Post Baru</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h3 style="text-align: center;">Masukkan Teks/Code</h3>
  <form action="" method="post">
    <p style="text-align: center;">Judul: <input type="text" name="judul" required /></p>
    <p style="text-align: center;">Jenis File:
      <select name="jenis_file">
        <option value="txt">TXT</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
    </p>
    <p style="text-align: center;">
      <textarea name="kode" rows="10" cols="50" style="width: 500px;" required></textarea>
    </p>
    <p style="text-align: center;"><input type="submit" value="Submit" name="submit" /></p>
  </form>
</body>

</html>
