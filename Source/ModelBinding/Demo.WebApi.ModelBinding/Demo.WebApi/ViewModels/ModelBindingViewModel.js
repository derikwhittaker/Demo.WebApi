var ModelBindingViewModel = (function () {
    function ModelBindingViewModel() {
        this.FirstName = ko.observable("Demo");
        this.MiddleName = ko.observable("-- Middle --");
        this.LastName = ko.observable("Dude");
        this.FullName = ko.observable("");
    }
    ModelBindingViewModel.prototype.bindingPut = function () {
        var _this = this;
        var url = "http://localhost:49587/api/Awesome/ModelBinding";
        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName()
        };
        $.post(url, model).done(function (results) {
            _this.FullName(results);
        });
    };
    ModelBindingViewModel.prototype.overBindingPut = function () {
        var _this = this;
        var url = "http://localhost:49587/api/Awesome/OverModelBinding";
        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName(),
            MiddleName: this.MiddleName()
        };
        $.post(url, model).done(function (results) {
            _this.FullName(results);
        });
    };
    ModelBindingViewModel.prototype.validationBindingPut = function () {
        var _this = this;
        var url = "http://localhost:49587/api/Awesome/ValidationModelBinding";
        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName(),
            Age: 101
        };
        $.post(url, model).done(function (results) {
            _this.FullName(results);
        }).fail(function (results) {
            var x = results;
        });
    };
    return ModelBindingViewModel;
})();
