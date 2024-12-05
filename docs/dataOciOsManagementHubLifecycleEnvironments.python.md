# `dataOciOsManagementHubLifecycleEnvironments` Submodule <a name="`dataOciOsManagementHubLifecycleEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubLifecycleEnvironments <a name="DataOciOsManagementHubLifecycleEnvironments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments oci_os_management_hub_lifecycle_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubLifecycleEnvironmentsFilter]] = None,
  id: str = None,
  lifecycle_environment_id: str = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  os_family: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.lifecycleEnvironmentId">lifecycle_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.archType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#filter DataOciOsManagementHubLifecycleEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_environment_id`<sup>Optional</sup> <a name="lifecycle_environment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.lifecycleEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.location"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.locationNotEqualTo"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetArchType">reset_arch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLifecycleEnvironmentId">reset_lifecycle_environment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocationNotEqualTo">reset_location_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubLifecycleEnvironmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]

---

##### `reset_arch_type` <a name="reset_arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetArchType"></a>

```python
def reset_arch_type() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_environment_id` <a name="reset_lifecycle_environment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLifecycleEnvironmentId"></a>

```python
def reset_lifecycle_environment_id() -> None
```

##### `reset_location` <a name="reset_location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_location_not_equal_to` <a name="reset_location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocationNotEqualTo"></a>

```python
def reset_location_not_equal_to() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubLifecycleEnvironments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubLifecycleEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubLifecycleEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList">DataOciOsManagementHubLifecycleEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentCollection">lifecycle_environment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archTypeInput">arch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentIdInput">lifecycle_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationInput">location_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualToInput">location_not_equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentId">lifecycle_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.location">location</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filter"></a>

```python
filter: DataOciOsManagementHubLifecycleEnvironmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList">DataOciOsManagementHubLifecycleEnvironmentsFilterList</a>

---

##### `lifecycle_environment_collection`<sup>Required</sup> <a name="lifecycle_environment_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentCollection"></a>

```python
lifecycle_environment_collection: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList</a>

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archTypeInput"></a>

```python
arch_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubLifecycleEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_environment_id_input`<sup>Optional</sup> <a name="lifecycle_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentIdInput"></a>

```python
lifecycle_environment_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationInput"></a>

```python
location_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to_input`<sup>Optional</sup> <a name="location_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualToInput"></a>

```python
location_not_equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_environment_id`<sup>Required</sup> <a name="lifecycle_environment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentId"></a>

```python
lifecycle_environment_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to`<sup>Required</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubLifecycleEnvironmentsConfig <a name="DataOciOsManagementHubLifecycleEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubLifecycleEnvironmentsFilter]] = None,
  id: str = None,
  lifecycle_environment_id: str = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  os_family: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycleEnvironmentId">lifecycle_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubLifecycleEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#filter DataOciOsManagementHubLifecycleEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_environment_id`<sup>Optional</sup> <a name="lifecycle_environment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycleEnvironmentId"></a>

```python
lifecycle_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}.

---

### DataOciOsManagementHubLifecycleEnvironmentsFilter <a name="DataOciOsManagementHubLifecycleEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#name DataOciOsManagementHubLifecycleEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#values DataOciOsManagementHubLifecycleEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#regex DataOciOsManagementHubLifecycleEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#name DataOciOsManagementHubLifecycleEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#values DataOciOsManagementHubLifecycleEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#regex DataOciOsManagementHubLifecycleEnvironments#regex}.

---

### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection()
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems()
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages()
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubLifecycleEnvironmentsFilterList <a name="DataOciOsManagementHubLifecycleEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubLifecycleEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]]

---


### DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubLifecycleEnvironmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>]

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.stages">stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.stages"></a>

```python
stages: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentDisplayName">lifecycle_environment_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentId">lifecycle_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.managedInstances">managed_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.rank">rank</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.softwareSourceId">software_source_id</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_environment_display_name`<sup>Required</sup> <a name="lifecycle_environment_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentDisplayName"></a>

```python
lifecycle_environment_display_name: str
```

- *Type:* str

---

##### `lifecycle_environment_id`<sup>Required</sup> <a name="lifecycle_environment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentId"></a>

```python
lifecycle_environment_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.managedInstances"></a>

```python
managed_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `rank`<sup>Required</sup> <a name="rank" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.rank"></a>

```python
rank: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.softwareSourceId"></a>

```python
software_source_id: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_lifecycle_environments

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection</a>

---



