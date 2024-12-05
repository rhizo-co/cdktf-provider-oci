# `dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates` Submodule <a name="`dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates oci_os_management_hub_managed_instance_installed_windows_updates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  compartment_id: str = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]] = None,
  id: str = None,
  name: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#filter DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.name"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.installedWindowsUpdateCollection">installed_windows_update_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList</a>

---

##### `installed_windows_update_collection`<sup>Required</sup> <a name="installed_windows_update_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.installedWindowsUpdateCollection"></a>

```python
installed_windows_update_collection: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  compartment_id: str = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]] = None,
  id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#filter DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}.

---

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#values DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#regex DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#values DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#regex DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#regex}.

---

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection()
```


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>]

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateId">update_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `update_id`<sup>Required</sup> <a name="update_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateId"></a>

```python
update_id: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_windows_updates

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection</a>

---



