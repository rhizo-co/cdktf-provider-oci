# `dataOciFleetAppsManagementMaintenanceWindows` Submodule <a name="`dataOciFleetAppsManagementMaintenanceWindows` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementMaintenanceWindows <a name="DataOciFleetAppsManagementMaintenanceWindows" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows oci_fleet_apps_management_maintenance_windows}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementMaintenanceWindowsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#filter DataOciFleetAppsManagementMaintenanceWindows#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementMaintenanceWindowsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementMaintenanceWindows to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementMaintenanceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementMaintenanceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList">DataOciFleetAppsManagementMaintenanceWindowsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.maintenanceWindowCollection">maintenance_window_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filter"></a>

```python
filter: DataOciFleetAppsManagementMaintenanceWindowsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList">DataOciFleetAppsManagementMaintenanceWindowsFilterList</a>

---

##### `maintenance_window_collection`<sup>Required</sup> <a name="maintenance_window_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.maintenanceWindowCollection"></a>

```python
maintenance_window_collection: DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementMaintenanceWindowsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementMaintenanceWindowsConfig <a name="DataOciFleetAppsManagementMaintenanceWindowsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementMaintenanceWindowsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementMaintenanceWindowsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#filter DataOciFleetAppsManagementMaintenanceWindows#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}.

---

### DataOciFleetAppsManagementMaintenanceWindowsFilter <a name="DataOciFleetAppsManagementMaintenanceWindowsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#name DataOciFleetAppsManagementMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#values DataOciFleetAppsManagementMaintenanceWindows#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#regex DataOciFleetAppsManagementMaintenanceWindows#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#name DataOciFleetAppsManagementMaintenanceWindows#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#values DataOciFleetAppsManagementMaintenanceWindows#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#regex DataOciFleetAppsManagementMaintenanceWindows#regex}.

---

### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection()
```


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementMaintenanceWindowsFilterList <a name="DataOciFleetAppsManagementMaintenanceWindowsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementMaintenanceWindowsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]]

---


### DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetAppsManagementMaintenanceWindowsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter">DataOciFleetAppsManagementMaintenanceWindowsFilter</a>]

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isOutage">is_outage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isRecurring">is_recurring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.maintenanceWindowType">maintenance_window_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.recurrences">recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.taskInitiationCutoff">task_initiation_cutoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_outage`<sup>Required</sup> <a name="is_outage" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isOutage"></a>

```python
is_outage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_recurring`<sup>Required</sup> <a name="is_recurring" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isRecurring"></a>

```python
is_recurring: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_window_type`<sup>Required</sup> <a name="maintenance_window_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.maintenanceWindowType"></a>

```python
maintenance_window_type: str
```

- *Type:* str

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `task_initiation_cutoff`<sup>Required</sup> <a name="task_initiation_cutoff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.taskInitiationCutoff"></a>

```python
task_initiation_cutoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_schedule_start`<sup>Required</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems</a>

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_maintenance_windows

dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection</a>

---



