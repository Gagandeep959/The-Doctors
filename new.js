<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Notes App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Notes App</h1>

        <form id="note-form">
            <textarea id="note-input" placeholder="Write your note here..." required></textarea>
            <button type="submit" id="add-note-btn">Add Note</button>
        </form>

        <div id="notes-list">
            </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
