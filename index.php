<?php
require 'koneksi.php';
?>

<!DOCTYPE html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kodekuh by Cyvas.Angin</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link href='https://fonts.googleapis.com/css?family=Averia Sans Libre' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Poor Story' rel='stylesheet'>


</head>

<body>
    <div class="container">
        <center>
            <div class="papanNama">
                <span style="display: block;"><a class="a" href="https://cyvas.my.id/">/</a></span>
                <span class="nyetSatu">🐒</span>Kodekuh by <br class="brHome"><span class="nyetDua">🐒</span><b><span
                        class="cyvas">Cyvas.Angin</span></b>🐒
            </div>

        </center>
        <br><br>
        <center>
            <span style="display: block;"><i>Kata-kata hari ini :</i></span>
            <span id="teks"> </span>
        </center>

    </div>
    <div class="post">
        <center><button onclick="window.open('add.php')"
                style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px;">PASTE</button>
        </center>
        <ul>
            <?php
            $judul = mysqli_query($koneksi, "SELECT * FROM link ORDER BY id DESC;
");
            foreach ($judul as $j) : ?>
            <p>
                <li>
                    <a class="a" href="post/?id=<?= $j['id']; ?>">
                        <?= $j["judul"]; ?><span id="tanggal">
                            <?= $j["tanggal"] ?>
                        </span>
                </li>
            </p>
            <?php endforeach
            ?>
        </ul>
    </div>
    </div>

    <footer class="footerHome"><a class="b" href="">versi 0.2.3-feb</a></footer>

</body>
<script type="text/javascript" src="kata.js"></script>

</html>
