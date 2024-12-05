# `vnMonitoringPathAnalyzerTest` Submodule <a name="`vnMonitoringPathAnalyzerTest` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalyzerTest <a name="VnMonitoringPathAnalyzerTest" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test oci_vn_monitoring_path_analyzer_test}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  destination_endpoint: VnMonitoringPathAnalyzerTestDestinationEndpoint,
  protocol: typing.Union[int, float],
  source_endpoint: VnMonitoringPathAnalyzerTestSourceEndpoint,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  protocol_parameters: VnMonitoringPathAnalyzerTestProtocolParameters = None,
  query_options: VnMonitoringPathAnalyzerTestQueryOptions = None,
  timeouts: VnMonitoringPathAnalyzerTestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}.

---

##### `destination_endpoint`<sup>Required</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.destinationEndpoint"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_endpoint VnMonitoringPathAnalyzerTest#destination_endpoint}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.protocol"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}.

---

##### `source_endpoint`<sup>Required</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.sourceEndpoint"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_endpoint VnMonitoringPathAnalyzerTest#source_endpoint}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol_parameters`<sup>Optional</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.protocolParameters"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol_parameters VnMonitoringPathAnalyzerTest#protocol_parameters}

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.queryOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#query_options VnMonitoringPathAnalyzerTest#query_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#timeouts VnMonitoringPathAnalyzerTest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint">put_destination_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters">put_protocol_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions">put_query_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint">put_source_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetProtocolParameters">reset_protocol_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetQueryOptions">reset_query_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_endpoint` <a name="put_destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint"></a>

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

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

###### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

###### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

###### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

###### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.vnicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

##### `put_protocol_parameters` <a name="put_protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters"></a>

```python
def put_protocol_parameters(
  type: str,
  destination_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  source_port: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

###### `destination_port`<sup>Optional</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.destinationPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}.

---

###### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.icmpCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}.

---

###### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.icmpType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}.

---

###### `source_port`<sup>Optional</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.sourcePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}.

---

##### `put_query_options` <a name="put_query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions"></a>

```python
def put_query_options(
  is_bi_directional_analysis: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_bi_directional_analysis`<sup>Optional</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions.parameter.isBiDirectionalAnalysis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}.

---

##### `put_source_endpoint` <a name="put_source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint"></a>

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

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

###### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

###### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

###### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

###### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.vnicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protocol_parameters` <a name="reset_protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetProtocolParameters"></a>

```python
def reset_protocol_parameters() -> None
```

##### `reset_query_options` <a name="reset_query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetQueryOptions"></a>

```python
def reset_query_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VnMonitoringPathAnalyzerTest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VnMonitoringPathAnalyzerTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalyzerTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference">VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference">VnMonitoringPathAnalyzerTestProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference">VnMonitoringPathAnalyzerTestQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference">VnMonitoringPathAnalyzerTestSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference">VnMonitoringPathAnalyzerTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpointInput">destination_endpoint_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParametersInput">protocol_parameters_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptionsInput">query_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpointInput">source_endpoint_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_endpoint`<sup>Required</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpoint"></a>

```python
destination_endpoint: VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference">VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference</a>

---

##### `protocol_parameters`<sup>Required</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParameters"></a>

```python
protocol_parameters: VnMonitoringPathAnalyzerTestProtocolParametersOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference">VnMonitoringPathAnalyzerTestProtocolParametersOutputReference</a>

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptions"></a>

```python
query_options: VnMonitoringPathAnalyzerTestQueryOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference">VnMonitoringPathAnalyzerTestQueryOptionsOutputReference</a>

---

##### `source_endpoint`<sup>Required</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpoint"></a>

```python
source_endpoint: VnMonitoringPathAnalyzerTestSourceEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference">VnMonitoringPathAnalyzerTestSourceEndpointOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeouts"></a>

```python
timeouts: VnMonitoringPathAnalyzerTestTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference">VnMonitoringPathAnalyzerTestTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `destination_endpoint_input`<sup>Optional</sup> <a name="destination_endpoint_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpointInput"></a>

```python
destination_endpoint_input: VnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_parameters_input`<sup>Optional</sup> <a name="protocol_parameters_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParametersInput"></a>

```python
protocol_parameters_input: VnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---

##### `query_options_input`<sup>Optional</sup> <a name="query_options_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptionsInput"></a>

```python
query_options_input: VnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---

##### `source_endpoint_input`<sup>Optional</sup> <a name="source_endpoint_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpointInput"></a>

```python
source_endpoint_input: VnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VnMonitoringPathAnalyzerTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalyzerTestConfig <a name="VnMonitoringPathAnalyzerTestConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  destination_endpoint: VnMonitoringPathAnalyzerTestDestinationEndpoint,
  protocol: typing.Union[int, float],
  source_endpoint: VnMonitoringPathAnalyzerTestSourceEndpoint,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  protocol_parameters: VnMonitoringPathAnalyzerTestProtocolParameters = None,
  query_options: VnMonitoringPathAnalyzerTestQueryOptions = None,
  timeouts: VnMonitoringPathAnalyzerTestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.destinationEndpoint">destination_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.sourceEndpoint">source_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocolParameters">protocol_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.queryOptions">query_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}.

---

##### `destination_endpoint`<sup>Required</sup> <a name="destination_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.destinationEndpoint"></a>

```python
destination_endpoint: VnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_endpoint VnMonitoringPathAnalyzerTest#destination_endpoint}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}.

---

##### `source_endpoint`<sup>Required</sup> <a name="source_endpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.sourceEndpoint"></a>

```python
source_endpoint: VnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_endpoint VnMonitoringPathAnalyzerTest#source_endpoint}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol_parameters`<sup>Optional</sup> <a name="protocol_parameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocolParameters"></a>

```python
protocol_parameters: VnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol_parameters VnMonitoringPathAnalyzerTest#protocol_parameters}

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.queryOptions"></a>

```python
query_options: VnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#query_options VnMonitoringPathAnalyzerTest#query_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.timeouts"></a>

```python
timeouts: VnMonitoringPathAnalyzerTestTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#timeouts VnMonitoringPathAnalyzerTest#timeouts}

---

### VnMonitoringPathAnalyzerTestDestinationEndpoint <a name="VnMonitoringPathAnalyzerTestDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint(
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vnicId">vnic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

##### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

##### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

##### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

### VnMonitoringPathAnalyzerTestProtocolParameters <a name="VnMonitoringPathAnalyzerTestProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters(
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}.

---

##### `source_port`<sup>Optional</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}.

---

### VnMonitoringPathAnalyzerTestQueryOptions <a name="VnMonitoringPathAnalyzerTestQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions(
  is_bi_directional_analysis: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.property.isBiDirectionalAnalysis">is_bi_directional_analysis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}. |

---

##### `is_bi_directional_analysis`<sup>Optional</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.property.isBiDirectionalAnalysis"></a>

```python
is_bi_directional_analysis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalyzerTestSourceEndpoint <a name="VnMonitoringPathAnalyzerTestSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint(
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vnicId">vnic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

##### `listener_id`<sup>Optional</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

##### `network_load_balancer_id`<sup>Optional</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

##### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

### VnMonitoringPathAnalyzerTestTimeouts <a name="VnMonitoringPathAnalyzerTestTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference <a name="VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetListenerId">reset_listener_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetNetworkLoadBalancerId">reset_network_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVnicId">reset_vnic_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_listener_id` <a name="reset_listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetListenerId"></a>

```python
def reset_listener_id() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```

##### `reset_network_load_balancer_id` <a name="reset_network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```python
def reset_network_load_balancer_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

##### `reset_vnic_id` <a name="reset_vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVnicId"></a>

```python
def reset_vnic_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicIdInput">vnic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `vnic_id_input`<sup>Optional</sup> <a name="vnic_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicIdInput"></a>

```python
vnic_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---


### VnMonitoringPathAnalyzerTestProtocolParametersOutputReference <a name="VnMonitoringPathAnalyzerTestProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetSourcePort">reset_source_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_port` <a name="reset_destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_source_port` <a name="reset_source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetSourcePort"></a>

```python
def reset_source_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPortInput">destination_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePortInput">source_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPortInput"></a>

```python
destination_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_input`<sup>Optional</sup> <a name="source_port_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePortInput"></a>

```python
source_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---


### VnMonitoringPathAnalyzerTestQueryOptionsOutputReference <a name="VnMonitoringPathAnalyzerTestQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">reset_is_bi_directional_analysis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_bi_directional_analysis` <a name="reset_is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```python
def reset_is_bi_directional_analysis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">is_bi_directional_analysis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis">is_bi_directional_analysis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_bi_directional_analysis_input`<sup>Optional</sup> <a name="is_bi_directional_analysis_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```python
is_bi_directional_analysis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_bi_directional_analysis`<sup>Required</sup> <a name="is_bi_directional_analysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```python
is_bi_directional_analysis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---


### VnMonitoringPathAnalyzerTestSourceEndpointOutputReference <a name="VnMonitoringPathAnalyzerTestSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetListenerId">reset_listener_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetNetworkLoadBalancerId">reset_network_load_balancer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVnicId">reset_vnic_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_listener_id` <a name="reset_listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetListenerId"></a>

```python
def reset_listener_id() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```

##### `reset_network_load_balancer_id` <a name="reset_network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```python
def reset_network_load_balancer_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

##### `reset_vnic_id` <a name="reset_vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVnicId"></a>

```python
def reset_vnic_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicIdInput">vnic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `vnic_id_input`<sup>Optional</sup> <a name="vnic_id_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicIdInput"></a>

```python
vnic_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue"></a>

```python
internal_value: VnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---


### VnMonitoringPathAnalyzerTestTimeoutsOutputReference <a name="VnMonitoringPathAnalyzerTestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vn_monitoring_path_analyzer_test

vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VnMonitoringPathAnalyzerTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>]

---



