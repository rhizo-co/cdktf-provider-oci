# `dataOciOsManagementHubSoftwareSourcePackageGroups` Submodule <a name="`dataOciOsManagementHubSoftwareSourcePackageGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroups <a name="DataOciOsManagementHubSoftwareSourcePackageGroups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups oci_os_management_hub_software_source_package_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]] = None,
  group_type: typing.List[str] = None,
  id: str = None,
  name: str = None,
  name_contains: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.groupType">group_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#filter DataOciOsManagementHubSoftwareSourcePackageGroups#filter}

---

##### `group_type`<sup>Optional</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.groupType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.nameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetGroupType">reset_group_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetNameContains">reset_name_contains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_type` <a name="reset_group_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetGroupType"></a>

```python
def reset_group_type() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_contains` <a name="reset_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetNameContains"></a>

```python
def reset_name_contains() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourcePackageGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSourcePackageGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourcePackageGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList">DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.packageGroupCollection">package_group_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupTypeInput">group_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContainsInput">name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupType">group_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContains">name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList">DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList</a>

---

##### `package_group_collection`<sup>Required</sup> <a name="package_group_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.packageGroupCollection"></a>

```python
package_group_collection: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]

---

##### `group_type_input`<sup>Optional</sup> <a name="group_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupTypeInput"></a>

```python
group_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_contains_input`<sup>Optional</sup> <a name="name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContainsInput"></a>

```python
name_contains_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `group_type`<sup>Required</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupType"></a>

```python
group_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_contains`<sup>Required</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupsConfig <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]] = None,
  group_type: typing.List[str] = None,
  id: str = None,
  name: str = None,
  name_contains: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.groupType">group_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#filter DataOciOsManagementHubSoftwareSourcePackageGroups#filter}

---

##### `group_type`<sup>Optional</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.groupType"></a>

```python
group_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}.

---

### DataOciOsManagementHubSoftwareSourcePackageGroupsFilter <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#values DataOciOsManagementHubSoftwareSourcePackageGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#regex DataOciOsManagementHubSoftwareSourcePackageGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#values DataOciOsManagementHubSoftwareSourcePackageGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#regex DataOciOsManagementHubSoftwareSourcePackageGroups#regex}.

---

### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection()
```


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]]

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwareSourcePackageGroupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>]

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.groupType">group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isUserVisible">is_user_visible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_type`<sup>Required</sup> <a name="group_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.groupType"></a>

```python
group_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_user_visible`<sup>Required</sup> <a name="is_user_visible" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isUserVisible"></a>

```python
is_user_visible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_package_groups

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection</a>

---



