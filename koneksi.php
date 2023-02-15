<?php
$koneksi = mysqli_connect("localhost", "root", "", "kodekuh");

function query($query)
{
  global $koneksi;
  $result = mysqli_query($koneksi, $query);
  $row = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  return $rows;
}


function tambah($data)
{
  global $koneksi;
  $judul = htmlspecialchars($data["judul"]);
  $tanggal = date("y-m-d", time());
  $query = "INSERT INTO link VALUES (NULL, '$judul', '$tanggal')";
  mysqli_query($koneksi, $query);

  return mysqli_affected_rows($koneksi);
}
