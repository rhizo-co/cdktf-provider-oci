# `dataOciOsManagementHubManagedInstanceAvailableSoftwareSources` Submodule <a name="`dataOciOsManagementHubManagedInstanceAvailableSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSources <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources oci_os_management_hub_managed_instance_available_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources(
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
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#filter DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceAvailableSoftwareSources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceAvailableSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceAvailableSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.availableSoftwareSourceCollection">available_software_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_software_source_collection`<sup>Required</sup> <a name="available_software_source_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.availableSoftwareSourceCollection"></a>

```python
available_software_source_collection: DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection()
```


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems()
```


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#filter DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#values DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#regex DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#values DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#regex DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_software_sources

dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter</a>]

---



