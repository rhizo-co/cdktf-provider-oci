# `dataOciOsManagementHubManagedInstanceGroups` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroups <a name="DataOciOsManagementHubManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups oci_os_management_hub_managed_instance_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: str = None,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupsFilter]] = None,
  id: str = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  managed_instance_group_id: str = None,
  os_family: str = None,
  software_source_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.archType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#filter DataOciOsManagementHubManagedInstanceGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.isManagedByAutonomousLinux"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.location"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.locationNotEqualTo"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}.

---

##### `managed_instance_group_id`<sup>Optional</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetArchType">reset_arch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetIsManagedByAutonomousLinux">reset_is_managed_by_autonomous_linux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocationNotEqualTo">reset_location_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetManagedInstanceGroupId">reset_managed_instance_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]

---

##### `reset_arch_type` <a name="reset_arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetArchType"></a>

```python
def reset_arch_type() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_managed_by_autonomous_linux` <a name="reset_is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetIsManagedByAutonomousLinux"></a>

```python
def reset_is_managed_by_autonomous_linux() -> None
```

##### `reset_location` <a name="reset_location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_location_not_equal_to` <a name="reset_location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocationNotEqualTo"></a>

```python
def reset_location_not_equal_to() -> None
```

##### `reset_managed_instance_group_id` <a name="reset_managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetManagedInstanceGroupId"></a>

```python
def reset_managed_instance_group_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList">DataOciOsManagementHubManagedInstanceGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupCollection">managed_instance_group_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archTypeInput">arch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinuxInput">is_managed_by_autonomous_linux_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationInput">location_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualToInput">location_not_equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.location">location</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList">DataOciOsManagementHubManagedInstanceGroupsFilterList</a>

---

##### `managed_instance_group_collection`<sup>Required</sup> <a name="managed_instance_group_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupCollection"></a>

```python
managed_instance_group_collection: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList</a>

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archTypeInput"></a>

```python
arch_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux_input`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinuxInput"></a>

```python
is_managed_by_autonomous_linux_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationInput"></a>

```python
location_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to_input`<sup>Optional</sup> <a name="location_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualToInput"></a>

```python
location_not_equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to`<sup>Required</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupsConfig <a name="DataOciOsManagementHubManagedInstanceGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: str = None,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupsFilter]] = None,
  id: str = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  managed_instance_group_id: str = None,
  os_family: str = None,
  software_source_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#filter DataOciOsManagementHubManagedInstanceGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}.

---

##### `managed_instance_group_id`<sup>Optional</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}.

---

### DataOciOsManagementHubManagedInstanceGroupsFilter <a name="DataOciOsManagementHubManagedInstanceGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#name DataOciOsManagementHubManagedInstanceGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#values DataOciOsManagementHubManagedInstanceGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#regex DataOciOsManagementHubManagedInstanceGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#name DataOciOsManagementHubManagedInstanceGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#values DataOciOsManagementHubManagedInstanceGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#regex DataOciOsManagementHubManagedInstanceGroups#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection()
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems()
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings()
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupsFilterList <a name="DataOciOsManagementHubManagedInstanceGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceGroupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>]

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId">scheduled_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_data_collection_authorized`<sup>Required</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_job_id`<sup>Required</sup> <a name="scheduled_job_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```python
scheduled_job_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.autonomousSettings">autonomous_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceCount">managed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceIds">managed_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.pendingJobCount">pending_job_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSourceIds">software_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `autonomous_settings`<sup>Required</sup> <a name="autonomous_settings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.autonomousSettings"></a>

```python
autonomous_settings: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_instance_count`<sup>Required</sup> <a name="managed_instance_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceCount"></a>

```python
managed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_instance_ids`<sup>Required</sup> <a name="managed_instance_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceIds"></a>

```python
managed_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `pending_job_count`<sup>Required</sup> <a name="pending_job_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.pendingJobCount"></a>

```python
pending_job_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_source_ids`<sup>Required</sup> <a name="software_source_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSourceIds"></a>

```python
software_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_groups

dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection</a>

---



