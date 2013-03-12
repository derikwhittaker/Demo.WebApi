var IndexViewModel = (function () {
    function IndexViewModel() {
        this.SimpleGetResult = ko.observable("Waiting on response...");
    }
    IndexViewModel.prototype.simpleGet = function () {
        var _this = this;
        var url = "http://localhost:49587/api/Awesome/Status";
        $.get(url).done(function (results) {
            _this.SimpleGetResult(results);
        });
    };
    return IndexViewModel;
})();
