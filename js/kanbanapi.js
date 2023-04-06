function save_last_item_id(id){
    localStorage.setItem("kanban-last-item-id", JSON.stringify(id))
}

function load_last_item_id(){
    const json = localStorage.getItem("kanban-last-item-id")

    if (!json) {
        return 1
    }

    return JSON.parse(json)
}

function save_state(data) {
    localStorage.setItem("kanban-state", JSON.stringify(data))
}

function save_text(data) {
    localStorage.setItem("kanban-texts", JSON.stringify(data))
}

function load_state() {
    const json = localStorage.getItem("kanban-state")

    if (!json) {
        return [
            {
                id: "sortable1",
                items: []
            },
            {
                id: "sortable2",
                items: []
            },
            {
                id: "sortable3",
                items: []
            },
        ];
    }

    return JSON.parse(json)
}

function load_texts() {
    const json = localStorage.getItem("kanban-texts")

    if (!json) {
        return [
            {
                id: "sortable1",
                items: []
            },
            {
                id: "sortable2",
                items: []
            },
            {
                id: "sortable3",
                items: []
            },
        ];
    }

    return JSON.parse(json)
}