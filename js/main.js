function text_update([data1, data2, data3]) {
    let text1 = [], text2 = [], text3 = []

    if (text1.length !== data1.length){
        text1.length = 0
        $('#sortable1 li').each(
            function () {
                text1.push($(this).text());
            }
        )
    }

    if (text2.length !== data2.length) {
        text2.length = 0
        $('#sortable2 li').each(
            function () {
                text2.push($(this).text());
            }
        )
    }

    if (text3.length !== data3.length) {
        text3.length = 0
        $('#sortable3 li').each(
            function () {
                text3.push($(this).text())
            }
        )
    }

    return [text1, text2, text3]

}

function get_task_ids(){
    let data1 = $("#sortable1").sortable("toArray");
    let data2 = $("#sortable2").sortable("toArray");
    let data3 = $("#sortable3").sortable("toArray");
    return [data1, data2, data3]
}

$(function () {

    $("#sortable1, #sortable2, #sortable3").sortable({
        connectWith: ".connectedSortable",
        stop: (event) => {

            let data = get_task_ids()

            save_text(text_update(data))
            save_state(data)
        }
    }).disableSelection();

    $("#sortable1_add, #sortable2_add, #sortable3_add").button({
        disabled: false
    });

    $("#sortable1_add").click(function () {
        const id = load_last_item_id() + 1;
        $("#sortable1").append(`<li class=\"ui-state-default kanban_item\" id=\"${id}\">New Task</li>`);
        save_last_item_id(id);
    });

    $("#sortable2_add").click(function () {
        const id = load_last_item_id() + 1;
        $("#sortable2").append(`<li class=\"ui-state-default kanban_item\" id=\"${id}\">New Task</li>`);
        save_last_item_id(id);
    });

    $("#sortable3_add").click(function () {
        const id = load_last_item_id() + 1;
        $("#sortable3").append(`<li class=\"ui-state-default kanban_item\" id=\"${id}\">New Task</li>`);
        save_last_item_id(id);
    });

    const state = load_state()
    const texts = load_texts()

    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
            $("#sortable" + (i+1)).append(`<li class=\"ui-state-default kanban_item\" id=\"${state[i][j]}\">${texts[i][j]}</li>`)
        }
    }

    let edited_li = 0

    $("li").dblclick(
        function () {
            edited_li = $(this)
            $("#task_name").val(edited_li.text())
            $("#edit_modal").show()
        }
    )

    $("#save_task_name").click(
        function () {
            edited_li.text($("#task_name").val())
            save_text(text_update(get_task_ids()))
            $("#edit_modal").hide()
        }
    )

    $("#cancel_task_name").click(
        function () {
            $("#edit_modal").hide()
        }
    )

});
