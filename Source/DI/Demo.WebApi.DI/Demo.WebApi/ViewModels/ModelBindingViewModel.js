var ModelBindingViewModel = (function () {
    function ModelBindingViewModel() {
        this.FirstName = ko.observable("Demo");
        this.LastName = ko.observable("Dude");
    }
    ModelBindingViewModel.prototype.bindingPut = function () {
        var url = "http://localhost:49587/api/Awesome/ModelBinding";
        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName()
        };
        $.post(url, model).done(function (results) {
        });
    };
    return ModelBindingViewModel;
})();
