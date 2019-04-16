
$(document).ready(function() {

    var table = $('#tb_cot').DataTable({
        "language":{
                "search": "Procurar:",
                "paginate":{
                        "first":      "Primeira",
                        "last":       "Última",
                        "next":       "Próxima",
                        "previous":   "Anterior"
                    },
               "info": "Mostrando de _START_ a _END_ de _TOTAL_",
               "lengthMenu":     "Mostrando _MENU_ Linhas",
            }


    });

    $('.fixed').addClass('is-sticky');
} );

