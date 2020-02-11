     $.getJSON("/blogarea/allblogarea", data => {
                    project = data;
                    console.log(data);
                    fillDropDown("blogarea", data, "Choose Location", 0);
                });



                $.getJSON("/addtype/alltype", data => {
                    project = data;
                    console.log(data);
                    a("typename", data, "Choose type", 0);
                });

                function fillDropDown(id, data, label, selectedid = 0) {
                    $(`#${id}`).empty();
                    $(`#${id}`).append(
                        $("<option>")
                            .val("null")
                            .text(label)
                    );
                    $.each(data, (i, item) => {
                        if (item.id == selectedid) {
                            $(`#${id}`).append(
                                $("<option selected>")
                                    .val(item.id)
                                    .text(item.blogareaname)
                            );
                        } else {
                            $(`#${id}`).append(
                                $("<option>")
                                    .val(item.id)
                                    .text(item.blogareaname)
                            );
                        }
                    });
                };

                function a(id, data, label, selectedid = 0) {
                    $(`#${id}`).empty();
                    $(`#${id}`).append(
                        $("<option>")
                            .val("null")
                            .text(label)
                    );
                    $.each(data, (i, item) => {
                        if (item.id == selectedid) {
                            $(`#${id}`).append(
                                $("<option selected>")
                                    .val(item.id)
                                    .text(item.typename)
                            );
                        } else {
                            $(`#${id}`).append(
                                $("<option>")
                                    .val(item.id)
                                    .text(item.typename)
                            );
                        }
                    });
                };
