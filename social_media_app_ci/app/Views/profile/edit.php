<h2>Edit Profile</h2>
<form method="post" action="/profile/update">
    <?= csrf_field() ?>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="<?= $user['name'] ?>" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="<?= $user['email'] ?>" required>
    <br>
    <button type="submit">Update Profile</button>
</form>

<form method="post" action="/profile/delete">
    <?= csrf_field() ?>
    <button type="submit">Delete Profile</button>
</form>
