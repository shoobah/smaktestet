import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
    namespace: 'temp',
    host: 'http://sensorydata.table.core.windows.net',
    headers: {
        'Authorization': 'SharedKey sensorydata:gZMxuxKbwSPCLyh+l7dXax4v+QCGb+E0X/+/zk1GseE='
    }
});