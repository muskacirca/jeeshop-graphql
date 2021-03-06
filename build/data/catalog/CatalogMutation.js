'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteCatalogLocalizedContent = exports.ModifyCatalogLocalizedContent = exports.CreateCatalogLocalizedContentMutation = exports.DeleteCatalogMutation = exports.ModifyCatalogMutation = exports.CreateCatalogMutation = undefined;

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _Model = require('../Model');

var _UserStore = require('../stores/UserStore');

var _CatalogService = require('./CatalogService');

var _CatalogService2 = _interopRequireDefault(_CatalogService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

require("babel-polyfill");

var CreateCatalogMutation = exports.CreateCatalogMutation = new _graphqlRelay.mutationWithClientMutationId({
    name: 'CreateCatalog',
    description: 'Function to create a catalog',
    inputFields: {
        name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        description: { type: _graphql.GraphQLString },
        disabled: { type: _graphql.GraphQLBoolean },
        startDate: { type: _graphql.GraphQLString },
        endDate: { type: _graphql.GraphQLString },
        visible: { type: _graphql.GraphQLBoolean },
        rootCategoriesIds: { type: new _graphql.GraphQLList(_graphql.GraphQLInt) }
    },
    outputFields: {
        viewer: {
            type: _Model.ViewerType,
            resolve: function resolve() {
                return (0, _UserStore.getViewer)("me");
            }
        },
        catalogEdge: {
            type: _Model.CatalogEdge,
            resolve: function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(payload) {
                    var catalogs, cursor;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _CatalogService2.default.findAllCatalog();

                                case 2:
                                    catalogs = _context.sent;
                                    cursor = (0, _graphqlRelay.cursorForObjectInConnection)(catalogs, payload);
                                    return _context.abrupt('return', {
                                        cursor: cursor,
                                        node: payload
                                    });

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));

                return function resolve(_x) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    },
    mutateAndGetPayload: function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(args) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            delete args.clientMutationId;
                            _context2.next = 3;
                            return _CatalogService2.default.createCatalog(args);

                        case 3:
                            return _context2.abrupt('return', _context2.sent);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function mutateAndGetPayload(_x2) {
            return _ref2.apply(this, arguments);
        };
    }()
});

var ModifyCatalogMutation = exports.ModifyCatalogMutation = new _graphqlRelay.mutationWithClientMutationId({
    name: 'ModifyCatalog',
    description: 'Function to modify a catalog',
    inputFields: {
        id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        description: { type: _graphql.GraphQLString },
        disabled: { type: _graphql.GraphQLBoolean },
        startDate: { type: _graphql.GraphQLString },
        endDate: { type: _graphql.GraphQLString },
        visible: { type: _graphql.GraphQLBoolean },
        localizedPresentation: { type: _graphql.GraphQLString },
        rootCategoriesIds: { type: new _graphql.GraphQLList(_graphql.GraphQLInt) }
    },
    outputFields: {
        viewer: {
            type: _Model.ViewerType,
            resolve: function resolve() {
                return (0, _UserStore.getViewer)("me");
            }
        },
        catalogEdge: {
            type: _Model.CatalogEdge,
            resolve: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(payload) {
                    var catalogs, cursor;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return _CatalogService2.default.findAllCatalog();

                                case 2:
                                    catalogs = _context3.sent;
                                    cursor = (0, _graphqlRelay.cursorForObjectInConnection)(catalogs, payload);
                                    return _context3.abrupt('return', {
                                        cursor: cursor,
                                        node: payload
                                    });

                                case 5:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, undefined);
                }));

                return function resolve(_x3) {
                    return _ref3.apply(this, arguments);
                };
            }()
        }
    },
    mutateAndGetPayload: function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(args) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:

                            delete args.clientMutationId;
                            args.id = (0, _graphqlRelay.fromGlobalId)(args.id).id;

                            _context4.next = 4;
                            return _CatalogService2.default.modifyCatalog(args);

                        case 4:
                            return _context4.abrupt('return', _context4.sent);

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function mutateAndGetPayload(_x4) {
            return _ref4.apply(this, arguments);
        };
    }()
});

var DeleteCatalogMutation = exports.DeleteCatalogMutation = new _graphqlRelay.mutationWithClientMutationId({
    name: 'DeleteCatalog',
    description: 'Function to delete a catalog',
    inputFields: {
        id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    outputFields: {
        viewer: {
            type: _Model.ViewerType,
            resolve: function resolve() {
                return (0, _UserStore.getViewer)("me");
            }
        }
    },
    mutateAndGetPayload: function () {
        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(args) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            console.log("delete catalog mutate");
                            _context5.next = 3;
                            return _CatalogService2.default.deleteCatalog((0, _graphqlRelay.fromGlobalId)(args.id).id);

                        case 3:
                            return _context5.abrupt('return', _context5.sent);

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function mutateAndGetPayload(_x5) {
            return _ref5.apply(this, arguments);
        };
    }()
});

var CreateCatalogLocalizedContentMutation = exports.CreateCatalogLocalizedContentMutation = new _graphqlRelay.mutationWithClientMutationId({
    name: 'CreateCatalogLocalizedContent',
    description: 'Creates a localized content for a catalog',
    inputFields: {
        catalogId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        locale: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        displayName: { type: _graphql.GraphQLString },
        shortDescription: { type: _graphql.GraphQLString },
        mediumDescription: { type: _graphql.GraphQLString },
        longDescription: { type: _graphql.GraphQLString }
    },
    outputFields: {
        viewer: {
            type: _Model.ViewerType,
            resolve: function resolve() {
                return (0, _UserStore.getViewer)("me");
            }
        }
    },
    mutateAndGetPayload: function () {
        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(args) {
            var catalogId;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            catalogId = (0, _graphqlRelay.fromGlobalId)(args.catalogId).id;

                            delete args.catalogId;
                            delete args.clientMutationId;
                            console.log("args : " + JSON.stringify(args));
                            _context6.next = 6;
                            return _CatalogService2.default.createCatalogLocalizedContent(catalogId, args);

                        case 6:
                            return _context6.abrupt('return', _context6.sent);

                        case 7:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined);
        }));

        return function mutateAndGetPayload(_x6) {
            return _ref6.apply(this, arguments);
        };
    }()
});

var ModifyCatalogLocalizedContent = exports.ModifyCatalogLocalizedContent = new _graphqlRelay.mutationWithClientMutationId({
    name: 'ModifyCatalogLocalizedContent',
    description: 'Modify a localized content for a catalog',
    inputFields: {
        catalogId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        locale: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        displayName: { type: _graphql.GraphQLString },
        shortDescription: { type: _graphql.GraphQLString },
        mediumDescription: { type: _graphql.GraphQLString },
        longDescription: { type: _graphql.GraphQLString }
    },
    outputFields: {
        viewer: {
            type: _Model.ViewerType,
            resolve: function resolve() {
                return (0, _UserStore.getViewer)("me");
            }
        }
    },
    mutateAndGetPayload: function () {
        var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(args) {
            var catalogId;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            args.id = (0, _graphqlRelay.fromGlobalId)(args.id).id;
                            catalogId = (0, _graphqlRelay.fromGlobalId)(args.catalogId).id;

                            delete args.clientMutationId;
                            delete args.catalogId;
                            _context7.next = 6;
                            return _CatalogService2.default.modifyCatalogLocalizedContent(catalogId, args);

                        case 6:
                            return _context7.abrupt('return', _context7.sent);

                        case 7:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined);
        }));

        return function mutateAndGetPayload(_x7) {
            return _ref7.apply(this, arguments);
        };
    }()
});

// Seems to work but there's an error
var DeleteCatalogLocalizedContent = exports.DeleteCatalogLocalizedContent = new _graphqlRelay.mutationWithClientMutationId({
    name: 'DeleteCatalogLocalizedContent',
    description: 'Delete a localized content for a catalog',
    inputFields: {
        catalogId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        locale: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    outputFields: {
        viewer: {
            type: _Model.ViewerType,
            resolve: function resolve() {
                return (0, _UserStore.getViewer)("me");
            }
        }
    },
    mutateAndGetPayload: function () {
        var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(args) {
            var catalogId;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            catalogId = (0, _graphqlRelay.fromGlobalId)(args.catalogId).id;
                            _context8.next = 3;
                            return _CatalogService2.default.deleteCatalogLocalizedContent(catalogId, args.locale);

                        case 3:
                            return _context8.abrupt('return', _context8.sent);

                        case 4:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, undefined);
        }));

        return function mutateAndGetPayload(_x8) {
            return _ref8.apply(this, arguments);
        };
    }()
});