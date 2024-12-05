# `osManagementHubManagementStation` Submodule <a name="`osManagementHubManagementStation` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStation <a name="OsManagementHubManagementStation" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station oci_os_management_hub_management_station}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStation(
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
  display_name: str,
  hostname: str,
  mirror: OsManagementHubManagementStationMirror,
  proxy: OsManagementHubManagementStationProxy,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  refresh_trigger: typing.Union[int, float] = None,
  timeouts: OsManagementHubManagementStationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.mirror">mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | mirror block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | proxy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.refreshTrigger">refresh_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}.

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.mirror"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

mirror block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#mirror OsManagementHubManagementStation#mirror}

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.proxy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#proxy OsManagementHubManagementStation#proxy}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_trigger`<sup>Optional</sup> <a name="refresh_trigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.refreshTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#timeouts OsManagementHubManagementStation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror">put_mirror</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy">put_proxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetRefreshTrigger">reset_refresh_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mirror` <a name="put_mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror"></a>

```python
def put_mirror(
  directory: str,
  port: str,
  sslport: str,
  sslcert: str = None
) -> None
```

###### `directory`<sup>Required</sup> <a name="directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror.parameter.directory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}.

---

###### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror.parameter.port"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

###### `sslport`<sup>Required</sup> <a name="sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror.parameter.sslport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}.

---

###### `sslcert`<sup>Optional</sup> <a name="sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror.parameter.sslcert"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}.

---

##### `put_proxy` <a name="put_proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy"></a>

```python
def put_proxy(
  is_enabled: typing.Union[bool, IResolvable],
  forward: str = None,
  hosts: typing.List[str] = None,
  port: str = None
) -> None
```

###### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}.

---

###### `forward`<sup>Optional</sup> <a name="forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy.parameter.forward"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}.

---

###### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy.parameter.hosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy.parameter.port"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_trigger` <a name="reset_refresh_trigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetRefreshTrigger"></a>

```python
def reset_refresh_trigger() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagementStation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagementStation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagementStation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.health">health</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList">OsManagementHubManagementStationHealthList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirror">mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference">OsManagementHubManagementStationMirrorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorCapacity">mirror_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorSyncStatus">mirror_sync_status</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList">OsManagementHubManagementStationMirrorSyncStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallPercentage">overall_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallState">overall_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxy">proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference">OsManagementHubManagementStationProxyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.scheduledJobId">scheduled_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference">OsManagementHubManagementStationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.totalMirrors">total_mirrors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorInput">mirror_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxyInput">proxy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTriggerInput">refresh_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTrigger">refresh_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.health"></a>

```python
health: OsManagementHubManagementStationHealthList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList">OsManagementHubManagementStationHealthList</a>

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirror"></a>

```python
mirror: OsManagementHubManagementStationMirrorOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference">OsManagementHubManagementStationMirrorOutputReference</a>

---

##### `mirror_capacity`<sup>Required</sup> <a name="mirror_capacity" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorCapacity"></a>

```python
mirror_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_sync_status`<sup>Required</sup> <a name="mirror_sync_status" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorSyncStatus"></a>

```python
mirror_sync_status: OsManagementHubManagementStationMirrorSyncStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList">OsManagementHubManagementStationMirrorSyncStatusList</a>

---

##### `overall_percentage`<sup>Required</sup> <a name="overall_percentage" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallPercentage"></a>

```python
overall_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overall_state`<sup>Required</sup> <a name="overall_state" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallState"></a>

```python
overall_state: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxy"></a>

```python
proxy: OsManagementHubManagementStationProxyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference">OsManagementHubManagementStationProxyOutputReference</a>

---

##### `scheduled_job_id`<sup>Required</sup> <a name="scheduled_job_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.scheduledJobId"></a>

```python
scheduled_job_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeouts"></a>

```python
timeouts: OsManagementHubManagementStationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference">OsManagementHubManagementStationTimeoutsOutputReference</a>

---

##### `total_mirrors`<sup>Required</sup> <a name="total_mirrors" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.totalMirrors"></a>

```python
total_mirrors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mirror_input`<sup>Optional</sup> <a name="mirror_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorInput"></a>

```python
mirror_input: OsManagementHubManagementStationMirror
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxyInput"></a>

```python
proxy_input: OsManagementHubManagementStationProxy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---

##### `refresh_trigger_input`<sup>Optional</sup> <a name="refresh_trigger_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTriggerInput"></a>

```python
refresh_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagementStationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `refresh_trigger`<sup>Required</sup> <a name="refresh_trigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTrigger"></a>

```python
refresh_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationConfig <a name="OsManagementHubManagementStationConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  hostname: str,
  mirror: OsManagementHubManagementStationMirror,
  proxy: OsManagementHubManagementStationProxy,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  refresh_trigger: typing.Union[int, float] = None,
  timeouts: OsManagementHubManagementStationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.mirror">mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | mirror block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.proxy">proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | proxy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.refreshTrigger">refresh_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}.

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.mirror"></a>

```python
mirror: OsManagementHubManagementStationMirror
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

mirror block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#mirror OsManagementHubManagementStation#mirror}

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.proxy"></a>

```python
proxy: OsManagementHubManagementStationProxy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#proxy OsManagementHubManagementStation#proxy}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_trigger`<sup>Optional</sup> <a name="refresh_trigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.refreshTrigger"></a>

```python
refresh_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagementStationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#timeouts OsManagementHubManagementStation#timeouts}

---

### OsManagementHubManagementStationHealth <a name="OsManagementHubManagementStationHealth" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationHealth()
```


### OsManagementHubManagementStationMirror <a name="OsManagementHubManagementStationMirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationMirror(
  directory: str,
  port: str,
  sslport: str,
  sslcert: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslport">sslport</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslcert">sslcert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.directory"></a>

```python
directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

##### `sslport`<sup>Required</sup> <a name="sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslport"></a>

```python
sslport: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}.

---

##### `sslcert`<sup>Optional</sup> <a name="sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslcert"></a>

```python
sslcert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}.

---

### OsManagementHubManagementStationMirrorSyncStatus <a name="OsManagementHubManagementStationMirrorSyncStatus" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus()
```


### OsManagementHubManagementStationProxy <a name="OsManagementHubManagementStationProxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationProxy(
  is_enabled: typing.Union[bool, IResolvable],
  forward: str = None,
  hosts: typing.List[str] = None,
  port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.forward">forward</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}. |

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}.

---

##### `forward`<sup>Optional</sup> <a name="forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.forward"></a>

```python
forward: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

### OsManagementHubManagementStationTimeouts <a name="OsManagementHubManagementStationTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationHealthList <a name="OsManagementHubManagementStationHealthList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationHealthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubManagementStationHealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsManagementHubManagementStationHealthOutputReference <a name="OsManagementHubManagementStationHealthOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth">OsManagementHubManagementStationHealth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagementStationHealth
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth">OsManagementHubManagementStationHealth</a>

---


### OsManagementHubManagementStationMirrorOutputReference <a name="OsManagementHubManagementStationMirrorOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resetSslcert">reset_sslcert</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sslcert` <a name="reset_sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resetSslcert"></a>

```python
def reset_sslcert() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcertInput">sslcert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslportInput">sslport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcert">sslcert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslport">sslport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `sslcert_input`<sup>Optional</sup> <a name="sslcert_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcertInput"></a>

```python
sslcert_input: str
```

- *Type:* str

---

##### `sslport_input`<sup>Optional</sup> <a name="sslport_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslportInput"></a>

```python
sslport_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `sslcert`<sup>Required</sup> <a name="sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcert"></a>

```python
sslcert: str
```

- *Type:* str

---

##### `sslport`<sup>Required</sup> <a name="sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslport"></a>

```python
sslport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagementStationMirror
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---


### OsManagementHubManagementStationMirrorSyncStatusList <a name="OsManagementHubManagementStationMirrorSyncStatusList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubManagementStationMirrorSyncStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsManagementHubManagementStationMirrorSyncStatusOutputReference <a name="OsManagementHubManagementStationMirrorSyncStatusOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.failed">failed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.queued">queued</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.synced">synced</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.syncing">syncing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.unsynced">unsynced</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus">OsManagementHubManagementStationMirrorSyncStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failed`<sup>Required</sup> <a name="failed" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.failed"></a>

```python
failed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queued`<sup>Required</sup> <a name="queued" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.queued"></a>

```python
queued: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synced`<sup>Required</sup> <a name="synced" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.synced"></a>

```python
synced: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `syncing`<sup>Required</sup> <a name="syncing" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.syncing"></a>

```python
syncing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unsynced`<sup>Required</sup> <a name="unsynced" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.unsynced"></a>

```python
unsynced: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagementStationMirrorSyncStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus">OsManagementHubManagementStationMirrorSyncStatus</a>

---


### OsManagementHubManagementStationProxyOutputReference <a name="OsManagementHubManagementStationProxyOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetForward">reset_forward</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forward` <a name="reset_forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetForward"></a>

```python
def reset_forward() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forwardInput">forward_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forward">forward</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forward_input`<sup>Optional</sup> <a name="forward_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forwardInput"></a>

```python
forward_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `forward`<sup>Required</sup> <a name="forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forward"></a>

```python
forward: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagementStationProxy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---


### OsManagementHubManagementStationTimeoutsOutputReference <a name="OsManagementHubManagementStationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_management_station

osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagementStationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>]

---



