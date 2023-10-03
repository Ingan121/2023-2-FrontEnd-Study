const darkToggle = document.getElementById("darktoggle");
const sessionList = document.getElementById("sessions");
const doneSessionList = document.getElementById("donesessions");
const dummySession = sessionList.children[0];
let sessions = {};

function addSession(event) {
  if (event && event.key != 'Enter') return;
  const name = document.getElementById("input").value;
  if (name in sessions) {
    alert("An item with the same name already exists!");
    return false;
  }
  sessions[name] = 0;
  addSessionUI(name, 0);
  saveSessions();
  return true;
}

function addSessionUI(name) {
  const li = dummySession.cloneNode(true);
  li.getElementsByClassName("name")[0].textContent = name;
  if (sessions[name]) {
    doneSessionList.appendChild(li);
    li.getElementsByClassName("checkbox")[0].checked = true;
  } else sessionList.appendChild(li);
}

function editSession(elem) {
  const li = elem.parentElement.parentElement;
  const prevName = li.getElementsByClassName("name")[0].textContent;

  const newName = prompt("Enter new name");
  const seconds = sessions[prevName];
  if (newName == null) return;

  sessions[newName] = seconds;
  delete sessions[prevName];
  saveSessions();

  li.getElementsByClassName("name")[0].textContent = newName;
}

function deleteSession(elem) {
  if (confirm("Are you sure you want to delete this item?")) {
    const li = elem.parentElement.parentElement;
    delete sessions[li.getElementsByClassName("name")[0].textContent];
    li.remove();
    saveSessions();

    if (sessionList.childElementCount == 1) {
      saveToggle.checked = false;
    }
  }
}

function selectSession(elem) {
  const li = elem.parentElement.parentElement;
  const name = li.getElementsByClassName("name")[0].textContent;

  if (elem.checked) {
    doneSessionList.appendChild(li);
    sessions[name] = 1;
  } else {
    sessionList.appendChild(li);
    sessions[name] = 0;
  }

  saveSessions();
}

function saveSessions() {
  localStorage.sessions = JSON.stringify(sessions);
}

function reset() {
  if (confirm("This will remove every items. Are you sure you want to continue?")) {
    localStorage.clear();
    location.reload(true);
  }
}

if (localStorage.sessions) {
  sessions = JSON.parse(localStorage.sessions);

  for (let [name, seconds] of Object.entries(sessions)) {
    addSessionUI(name, seconds);
  }
} else localStorage.sessions = "{}";