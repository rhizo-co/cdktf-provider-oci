# `dataflowPrivateEndpoint` Submodule <a name="`dataflowPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowPrivateEndpoint <a name="DataflowPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint oci_dataflow_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpoint(
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
  dns_zones: typing.List[str],
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  max_host_count: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  scan_details: typing.Union[IResolvable, typing.List[DataflowPrivateEndpointScanDetails]] = None,
  timeouts: DataflowPrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#compartment_id DataflowPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#dns_zones DataflowPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#subnet_id DataflowPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#defined_tags DataflowPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#description DataflowPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#display_name DataflowPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#freeform_tags DataflowPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#id DataflowPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.maxHostCount">max_host_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#max_host_count DataflowPrivateEndpoint#max_host_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#nsg_ids DataflowPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.scanDetails">scan_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]</code> | scan_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#compartment_id DataflowPrivateEndpoint#compartment_id}.

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.dnsZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#dns_zones DataflowPrivateEndpoint#dns_zones}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#subnet_id DataflowPrivateEndpoint#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#defined_tags DataflowPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#description DataflowPrivateEndpoint#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#display_name DataflowPrivateEndpoint#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#freeform_tags DataflowPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#id DataflowPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_host_count`<sup>Optional</sup> <a name="max_host_count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.maxHostCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#max_host_count DataflowPrivateEndpoint#max_host_count}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#nsg_ids DataflowPrivateEndpoint#nsg_ids}.

---

##### `scan_details`<sup>Optional</sup> <a name="scan_details" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.scanDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]

scan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#scan_details DataflowPrivateEndpoint#scan_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#timeouts DataflowPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putScanDetails">put_scan_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetMaxHostCount">reset_max_host_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetScanDetails">reset_scan_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scan_details` <a name="put_scan_details" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putScanDetails"></a>

```python
def put_scan_details(
  value: typing.Union[IResolvable, typing.List[DataflowPrivateEndpointScanDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putScanDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#create DataflowPrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#delete DataflowPrivateEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#update DataflowPrivateEndpoint#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_host_count` <a name="reset_max_host_count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetMaxHostCount"></a>

```python
def reset_max_host_count() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_scan_details` <a name="reset_scan_details" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetScanDetails"></a>

```python
def reset_scan_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataflowPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataflowPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataflowPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.scanDetails">scan_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList">DataflowPrivateEndpointScanDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference">DataflowPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.dnsZonesInput">dns_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.maxHostCountInput">max_host_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.scanDetailsInput">scan_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.maxHostCount">max_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `owner_principal_id`<sup>Required</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `scan_details`<sup>Required</sup> <a name="scan_details" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.scanDetails"></a>

```python
scan_details: DataflowPrivateEndpointScanDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList">DataflowPrivateEndpointScanDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeouts"></a>

```python
timeouts: DataflowPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference">DataflowPrivateEndpointTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_zones_input`<sup>Optional</sup> <a name="dns_zones_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.dnsZonesInput"></a>

```python
dns_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_host_count_input`<sup>Optional</sup> <a name="max_host_count_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.maxHostCountInput"></a>

```python
max_host_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_details_input`<sup>Optional</sup> <a name="scan_details_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.scanDetailsInput"></a>

```python
scan_details_input: typing.Union[IResolvable, typing.List[DataflowPrivateEndpointScanDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataflowPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_host_count`<sup>Required</sup> <a name="max_host_count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.maxHostCount"></a>

```python
max_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowPrivateEndpointConfig <a name="DataflowPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  dns_zones: typing.List[str],
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  max_host_count: typing.Union[int, float] = None,
  nsg_ids: typing.List[str] = None,
  scan_details: typing.Union[IResolvable, typing.List[DataflowPrivateEndpointScanDetails]] = None,
  timeouts: DataflowPrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#compartment_id DataflowPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#dns_zones DataflowPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#subnet_id DataflowPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#defined_tags DataflowPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#description DataflowPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#display_name DataflowPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#freeform_tags DataflowPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#id DataflowPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.maxHostCount">max_host_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#max_host_count DataflowPrivateEndpoint#max_host_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#nsg_ids DataflowPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.scanDetails">scan_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]</code> | scan_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#compartment_id DataflowPrivateEndpoint#compartment_id}.

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#dns_zones DataflowPrivateEndpoint#dns_zones}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#subnet_id DataflowPrivateEndpoint#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#defined_tags DataflowPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#description DataflowPrivateEndpoint#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#display_name DataflowPrivateEndpoint#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#freeform_tags DataflowPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#id DataflowPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_host_count`<sup>Optional</sup> <a name="max_host_count" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.maxHostCount"></a>

```python
max_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#max_host_count DataflowPrivateEndpoint#max_host_count}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#nsg_ids DataflowPrivateEndpoint#nsg_ids}.

---

##### `scan_details`<sup>Optional</sup> <a name="scan_details" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.scanDetails"></a>

```python
scan_details: typing.Union[IResolvable, typing.List[DataflowPrivateEndpointScanDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]

scan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#scan_details DataflowPrivateEndpoint#scan_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: DataflowPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#timeouts DataflowPrivateEndpoint#timeouts}

---

### DataflowPrivateEndpointScanDetails <a name="DataflowPrivateEndpointScanDetails" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails(
  fqdn: str = None,
  port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#fqdn DataflowPrivateEndpoint#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#port DataflowPrivateEndpoint#port}. |

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#fqdn DataflowPrivateEndpoint#fqdn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#port DataflowPrivateEndpoint#port}.

---

### DataflowPrivateEndpointTimeouts <a name="DataflowPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#create DataflowPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#delete DataflowPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#update DataflowPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#create DataflowPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#delete DataflowPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_private_endpoint#update DataflowPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowPrivateEndpointScanDetailsList <a name="DataflowPrivateEndpointScanDetailsList" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataflowPrivateEndpointScanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataflowPrivateEndpointScanDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]]

---


### DataflowPrivateEndpointScanDetailsOutputReference <a name="DataflowPrivateEndpointScanDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fqdn` <a name="reset_fqdn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowPrivateEndpointScanDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointScanDetails">DataflowPrivateEndpointScanDetails</a>]

---


### DataflowPrivateEndpointTimeoutsOutputReference <a name="DataflowPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_private_endpoint

dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowPrivateEndpoint.DataflowPrivateEndpointTimeouts">DataflowPrivateEndpointTimeouts</a>]

---



