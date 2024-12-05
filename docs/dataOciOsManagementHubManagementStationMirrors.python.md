# `dataOciOsManagementHubManagementStationMirrors` Submodule <a name="`dataOciOsManagementHubManagementStationMirrors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagementStationMirrors <a name="DataOciOsManagementHubManagementStationMirrors" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors oci_os_management_hub_management_station_mirrors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_station_id: str,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagementStationMirrorsFilter]] = None,
  id: str = None,
  mirror_states: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.managementStationId">management_station_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#management_station_id DataOciOsManagementHubManagementStationMirrors#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name DataOciOsManagementHubManagementStationMirrors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name_contains DataOciOsManagementHubManagementStationMirrors#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#id DataOciOsManagementHubManagementStationMirrors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.mirrorStates">mirror_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#mirror_states DataOciOsManagementHubManagementStationMirrors#mirror_states}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_station_id`<sup>Required</sup> <a name="management_station_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.managementStationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#management_station_id DataOciOsManagementHubManagementStationMirrors#management_station_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name DataOciOsManagementHubManagementStationMirrors#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name_contains DataOciOsManagementHubManagementStationMirrors#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#filter DataOciOsManagementHubManagementStationMirrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#id DataOciOsManagementHubManagementStationMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mirror_states`<sup>Optional</sup> <a name="mirror_states" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.Initializer.parameter.mirrorStates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#mirror_states DataOciOsManagementHubManagementStationMirrors#mirror_states}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetMirrorStates">reset_mirror_states</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagementStationMirrorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mirror_states` <a name="reset_mirror_states" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.resetMirrorStates"></a>

```python
def reset_mirror_states() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagementStationMirrors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagementStationMirrors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagementStationMirrors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagementStationMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagementStationMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList">DataOciOsManagementHubManagementStationMirrorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorsCollection">mirrors_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationIdInput">management_station_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStatesInput">mirror_states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationId">management_station_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStates">mirror_states</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filter"></a>

```python
filter: DataOciOsManagementHubManagementStationMirrorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList">DataOciOsManagementHubManagementStationMirrorsFilterList</a>

---

##### `mirrors_collection`<sup>Required</sup> <a name="mirrors_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorsCollection"></a>

```python
mirrors_collection: DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList</a>

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagementStationMirrorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_station_id_input`<sup>Optional</sup> <a name="management_station_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationIdInput"></a>

```python
management_station_id_input: str
```

- *Type:* str

---

##### `mirror_states_input`<sup>Optional</sup> <a name="mirror_states_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStatesInput"></a>

```python
mirror_states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_station_id`<sup>Required</sup> <a name="management_station_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.managementStationId"></a>

```python
management_station_id: str
```

- *Type:* str

---

##### `mirror_states`<sup>Required</sup> <a name="mirror_states" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.mirrorStates"></a>

```python
mirror_states: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagementStationMirrorsConfig <a name="DataOciOsManagementHubManagementStationMirrorsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_station_id: str,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagementStationMirrorsFilter]] = None,
  id: str = None,
  mirror_states: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.managementStationId">management_station_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#management_station_id DataOciOsManagementHubManagementStationMirrors#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name DataOciOsManagementHubManagementStationMirrors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name_contains DataOciOsManagementHubManagementStationMirrors#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#id DataOciOsManagementHubManagementStationMirrors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.mirrorStates">mirror_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#mirror_states DataOciOsManagementHubManagementStationMirrors#mirror_states}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_station_id`<sup>Required</sup> <a name="management_station_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.managementStationId"></a>

```python
management_station_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#management_station_id DataOciOsManagementHubManagementStationMirrors#management_station_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name DataOciOsManagementHubManagementStationMirrors#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#display_name_contains DataOciOsManagementHubManagementStationMirrors#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagementStationMirrorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#filter DataOciOsManagementHubManagementStationMirrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#id DataOciOsManagementHubManagementStationMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mirror_states`<sup>Optional</sup> <a name="mirror_states" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsConfig.property.mirrorStates"></a>

```python
mirror_states: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#mirror_states DataOciOsManagementHubManagementStationMirrors#mirror_states}.

---

### DataOciOsManagementHubManagementStationMirrorsFilter <a name="DataOciOsManagementHubManagementStationMirrorsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#name DataOciOsManagementHubManagementStationMirrors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#values DataOciOsManagementHubManagementStationMirrors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#regex DataOciOsManagementHubManagementStationMirrors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#name DataOciOsManagementHubManagementStationMirrors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#values DataOciOsManagementHubManagementStationMirrors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_management_station_mirrors#regex DataOciOsManagementHubManagementStationMirrors#regex}.

---

### DataOciOsManagementHubManagementStationMirrorsMirrorsCollection <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection()
```


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagementStationMirrorsFilterList <a name="DataOciOsManagementHubManagementStationMirrorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagementStationMirrorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagementStationMirrorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]]

---


### DataOciOsManagementHubManagementStationMirrorsFilterOutputReference <a name="DataOciOsManagementHubManagementStationMirrorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagementStationMirrorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsFilter">DataOciOsManagementHubManagementStationMirrorsFilter</a>]

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.log">log</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.timeLastSynced">time_last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log`<sup>Required</sup> <a name="log" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.log"></a>

```python
log: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_last_synced`<sup>Required</sup> <a name="time_last_synced" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.timeLastSynced"></a>

```python
time_last_synced: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItems</a>

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference <a name="DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_management_station_mirrors

dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection">DataOciOsManagementHubManagementStationMirrorsMirrorsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList">DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagementStationMirrorsMirrorsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagementStationMirrors.DataOciOsManagementHubManagementStationMirrorsMirrorsCollection">DataOciOsManagementHubManagementStationMirrorsMirrorsCollection</a>

---



