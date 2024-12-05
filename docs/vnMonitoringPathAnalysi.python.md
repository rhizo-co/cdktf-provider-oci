# `vnMonitoringPathAnalysi` Submodule <a name="`vnMonitoringPathAnalysi` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalysi <a name="VnMonitoringPathAnalysi" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi oci_vn_monitoring_path_analysi}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  cache_control: str = None,
  compartment_id: str = None,
  destination_endpoint: VnMonitoringPathAnalysiDestinationEndpoint = None,
  id: str = None,
  path_analyzer_test_id: str = None,
  protocol: typing.Union[int, float] = None,
  protocol_parameters: VnMonitoringPathAnalysiProtocolParameters = None,
  query_options: VnMonitoringPathAnalysiQueryOptions = None,
  source_endpoint: VnMonitoringPathAnalysiSourceEndpoint = None,
  timeouts: VnMonitoringPathAnalysiTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.pathAnalyzerTestId">path_analyzer_test_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.cacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}.

---

##### `destination_endpoint`<sup>Optional</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.destinationEndpoint"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_endpoint VnMonitoringPathAnalysi#destination_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_analyzer_test_id`<sup>Optional</sup> <a name="path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.pathAnalyzerTestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.protocol"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}.

---

##### `protocol_parameters`<sup>Optional</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.protocolParameters"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol_parameters VnMonitoringPathAnalysi#protocol_parameters}

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.queryOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#query_options VnMonitoringPathAnalysi#query_options}

---

##### `source_endpoint`<sup>Optional</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.sourceEndpoint"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_endpoint VnMonitoringPathAnalysi#source_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#timeouts VnMonitoringPathAnalysi#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint">put_destination_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters">put_protocol_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions">put_query_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint">put_source_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint">reset_destination_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId">reset_path_analyzer_test_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters">reset_protocol_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions">reset_query_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint">reset_source_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_endpoint` <a name="put_destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint"></a>

```python
def put_destination_endpoint(
  type: str,
  address: str = None,
  instance_id: str = None,
  listener_id: str = None,
  load_balancer_id: str = None,
  network_load_balancer_id: str = None,
  subnet_id: str = None,
  vlan_id: str = None,
  vnic_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

###### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

###### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

###### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

###### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.vnicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

##### `put_protocol_parameters` <a name="put_protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters"></a>

```python
def put_protocol_parameters(
  type: str,
  destination_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  source_port: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

###### `destination_port`<sup>Optional</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.destinationPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}.

---

###### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.icmpCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}.

---

###### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.icmpType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}.

---

###### `source_port`<sup>Optional</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.sourcePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}.

---

##### `put_query_options` <a name="put_query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions"></a>

```python
def put_query_options(
  is_bi_directional_analysis: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_bi_directional_analysis`<sup>Optional</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions.parameter.isBiDirectionalAnalysis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}.

---

##### `put_source_endpoint` <a name="put_source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint"></a>

```python
def put_source_endpoint(
  type: str,
  address: str = None,
  instance_id: str = None,
  listener_id: str = None,
  load_balancer_id: str = None,
  network_load_balancer_id: str = None,
  subnet_id: str = None,
  vlan_id: str = None,
  vnic_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

###### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

###### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

###### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

###### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.vnicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}.

---

##### `reset_cache_control` <a name="reset_cache_control" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_destination_endpoint` <a name="reset_destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint"></a>

```python
def reset_destination_endpoint() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_path_analyzer_test_id` <a name="reset_path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId"></a>

```python
def reset_path_analyzer_test_id() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocol_parameters` <a name="reset_protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters"></a>

```python
def reset_protocol_parameters() -> None
```

##### `reset_query_options` <a name="reset_query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions"></a>

```python
def reset_query_options() -> None
```

##### `reset_source_endpoint` <a name="reset_source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint"></a>

```python
def reset_source_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VnMonitoringPathAnalysi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VnMonitoringPathAnalysi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalysi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput">destination_endpoint_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput">path_analyzer_test_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput">protocol_parameters_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput">query_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput">source_endpoint_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId">path_analyzer_test_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_endpoint`<sup>Required</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint"></a>

```python
destination_endpoint: VnMonitoringPathAnalysiDestinationEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a>

---

##### `protocol_parameters`<sup>Required</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters"></a>

```python
protocol_parameters: VnMonitoringPathAnalysiProtocolParametersOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a>

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions"></a>

```python
query_options: VnMonitoringPathAnalysiQueryOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a>

---

##### `source_endpoint`<sup>Required</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint"></a>

```python
source_endpoint: VnMonitoringPathAnalysiSourceEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts"></a>

```python
timeouts: VnMonitoringPathAnalysiTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a>

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `destination_endpoint_input`<sup>Optional</sup> <a name="destination_endpoint_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput"></a>

```python
destination_endpoint_input: VnMonitoringPathAnalysiDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `path_analyzer_test_id_input`<sup>Optional</sup> <a name="path_analyzer_test_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput"></a>

```python
path_analyzer_test_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_parameters_input`<sup>Optional</sup> <a name="protocol_parameters_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput"></a>

```python
protocol_parameters_input: VnMonitoringPathAnalysiProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `query_options_input`<sup>Optional</sup> <a name="query_options_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput"></a>

```python
query_options_input: VnMonitoringPathAnalysiQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `source_endpoint_input`<sup>Optional</sup> <a name="source_endpoint_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput"></a>

```python
source_endpoint_input: VnMonitoringPathAnalysiSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VnMonitoringPathAnalysiTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `path_analyzer_test_id`<sup>Required</sup> <a name="path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId"></a>

```python
path_analyzer_test_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalysiConfig <a name="VnMonitoringPathAnalysiConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  cache_control: str = None,
  compartment_id: str = None,
  destination_endpoint: VnMonitoringPathAnalysiDestinationEndpoint = None,
  id: str = None,
  path_analyzer_test_id: str = None,
  protocol: typing.Union[int, float] = None,
  protocol_parameters: VnMonitoringPathAnalysiProtocolParameters = None,
  query_options: VnMonitoringPathAnalysiQueryOptions = None,
  source_endpoint: VnMonitoringPathAnalysiSourceEndpoint = None,
  timeouts: VnMonitoringPathAnalysiTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId">path_analyzer_test_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}.

---

##### `destination_endpoint`<sup>Optional</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint"></a>

```python
destination_endpoint: VnMonitoringPathAnalysiDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_endpoint VnMonitoringPathAnalysi#destination_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_analyzer_test_id`<sup>Optional</sup> <a name="path_analyzer_test_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId"></a>

```python
path_analyzer_test_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}.

---

##### `protocol_parameters`<sup>Optional</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters"></a>

```python
protocol_parameters: VnMonitoringPathAnalysiProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol_parameters VnMonitoringPathAnalysi#protocol_parameters}

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions"></a>

```python
query_options: VnMonitoringPathAnalysiQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#query_options VnMonitoringPathAnalysi#query_options}

---

##### `source_endpoint`<sup>Optional</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint"></a>

```python
source_endpoint: VnMonitoringPathAnalysiSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_endpoint VnMonitoringPathAnalysi#source_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts"></a>

```python
timeouts: VnMonitoringPathAnalysiTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#timeouts VnMonitoringPathAnalysi#timeouts}

---

### VnMonitoringPathAnalysiDestinationEndpoint <a name="VnMonitoringPathAnalysiDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint(
  type: str,
  address: str = None,
  instance_id: str = None,
  listener_id: str = None,
  load_balancer_id: str = None,
  network_load_balancer_id: str = None,
  subnet_id: str = None,
  vlan_id: str = None,
  vnic_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId">vnic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiProtocolParameters <a name="VnMonitoringPathAnalysiProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters(
  type: str,
  destination_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  source_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}.

---

##### `source_port`<sup>Optional</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}.

---

### VnMonitoringPathAnalysiQueryOptions <a name="VnMonitoringPathAnalysiQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions(
  is_bi_directional_analysis: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis">is_bi_directional_analysis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}. |

---

##### `is_bi_directional_analysis`<sup>Optional</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis"></a>

```python
is_bi_directional_analysis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalysiSourceEndpoint <a name="VnMonitoringPathAnalysiSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint(
  type: str,
  address: str = None,
  instance_id: str = None,
  listener_id: str = None,
  load_balancer_id: str = None,
  network_load_balancer_id: str = None,
  subnet_id: str = None,
  vlan_id: str = None,
  vnic_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId">vnic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiTimeouts <a name="VnMonitoringPathAnalysiTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalysiDestinationEndpointOutputReference <a name="VnMonitoringPathAnalysiDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId">reset_listener_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId">reset_network_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId">reset_vnic_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_listener_id` <a name="reset_listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId"></a>

```python
def reset_listener_id() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```

##### `reset_network_load_balancer_id` <a name="reset_network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```python
def reset_network_load_balancer_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

##### `reset_vnic_id` <a name="reset_vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId"></a>

```python
def reset_vnic_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput">vnic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `vnic_id_input`<sup>Optional</sup> <a name="vnic_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput"></a>

```python
vnic_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalysiDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---


### VnMonitoringPathAnalysiProtocolParametersOutputReference <a name="VnMonitoringPathAnalysiProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort">reset_source_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_port` <a name="reset_destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_source_port` <a name="reset_source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort"></a>

```python
def reset_source_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput">destination_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput">source_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput"></a>

```python
destination_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_input`<sup>Optional</sup> <a name="source_port_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput"></a>

```python
source_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalysiProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---


### VnMonitoringPathAnalysiQueryOptionsOutputReference <a name="VnMonitoringPathAnalysiQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">reset_is_bi_directional_analysis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_bi_directional_analysis` <a name="reset_is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```python
def reset_is_bi_directional_analysis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">is_bi_directional_analysis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis">is_bi_directional_analysis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_bi_directional_analysis_input`<sup>Optional</sup> <a name="is_bi_directional_analysis_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```python
is_bi_directional_analysis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_bi_directional_analysis`<sup>Required</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```python
is_bi_directional_analysis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalysiQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---


### VnMonitoringPathAnalysiSourceEndpointOutputReference <a name="VnMonitoringPathAnalysiSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId">reset_listener_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId">reset_network_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId">reset_vnic_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_listener_id` <a name="reset_listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId"></a>

```python
def reset_listener_id() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```

##### `reset_network_load_balancer_id` <a name="reset_network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```python
def reset_network_load_balancer_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

##### `reset_vnic_id` <a name="reset_vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId"></a>

```python
def reset_vnic_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput">vnic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `vnic_id_input`<sup>Optional</sup> <a name="vnic_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput"></a>

```python
vnic_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalysiSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---


### VnMonitoringPathAnalysiTimeoutsOutputReference <a name="VnMonitoringPathAnalysiTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analysi

vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VnMonitoringPathAnalysiTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>]

---



