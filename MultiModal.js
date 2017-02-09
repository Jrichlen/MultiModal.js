$(function () {
    // Fix remote modal triggers - was encountering issues with bs.modal not clearing
    $('body').on('click', '[data-toggle=modal]', function () {
        var modal = $($(this).attr('data-target'));
        modal.removeData('bs.modal');
    });

    // Auto-stack modals
    $('body').on('show.bs.modal', '.modal', function () {
        var modals = $('.modal.in');
        $(this).on('hidden.bs.modal', function () {
            modal.show();
        });
    });
});
