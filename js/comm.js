function hide_modal(id) {
    modal = document.getElementById(id);
    modal.style.visibility = "hidden";
    button = document.getElementById("add-button");
    if (button)
        button.style.backgroundColor = "#66FFFF"
}

function show_modal(id) {
    modal = document.getElementById(id)
    if (id == "delete")
        document.getElementById('ok-button').style.borderColor = "blue"
    document.getElementById('ok-button').style.borderWidth = "3px"
    modal.style.visibility = "visible";
    button = document.getElementById("add-button");
    if (button != null)
        button.style.backgroundColor = "white"
}

function go_welcome() {
    window.location.href = "../html/login-success.html";
}
function add_nav(current) {
    document.write(
        `<table class="nav-bar" cellpadding="0" cellspacing="0">
    <tbody class="nav-bar-body" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <a class="nav-button" id="chat" href="./chat.html">Group Chat</a>
            </td>
            <td>
                <a class="nav-button" id="users-list" href="./users-list.html">Manage Users</a>
            </td>
            <td>
                <a class="nav-button" id="documents-list" href="./documents-list.html">Manage Documents</a>
            </td>
            <td>
                <a class="nav-button" id="logout" href="./logout.html">Logout</a>
            </td>
        </tr>
    </tbody>
</table>`)
    current_bars = document.getElementById(current)
    current_bars.style.backgroundColor = "white"

}