# `dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources oci_os_management_hub_managed_instance_group_available_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#managed_instance_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#filter DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.availableSoftwareSourceCollection">available_software_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_software_source_collection`<sup>Required</sup> <a name="available_software_source_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.availableSoftwareSourceCollection"></a>

```python
available_software_source_collection: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection()
```


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems()
```


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#managed_instance_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#filter DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#values DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#regex DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#values DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#regex DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_available_software_sources

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>]

---



