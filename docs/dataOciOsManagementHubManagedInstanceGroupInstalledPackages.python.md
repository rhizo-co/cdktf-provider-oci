# `dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackages <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages oci_os_management_hub_managed_instance_group_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]] = None,
  id: str = None,
  time_install_date_end: str = None,
  time_install_date_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.timeInstallDateEnd">time_install_date_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.timeInstallDateStart">time_install_date_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#filter DataOciOsManagementHubManagedInstanceGroupInstalledPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_install_date_end`<sup>Optional</sup> <a name="time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.timeInstallDateEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}.

---

##### `time_install_date_start`<sup>Optional</sup> <a name="time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.timeInstallDateStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd">reset_time_install_date_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart">reset_time_install_date_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_install_date_end` <a name="reset_time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd"></a>

```python
def reset_time_install_date_end() -> None
```

##### `reset_time_install_date_start` <a name="reset_time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart"></a>

```python
def reset_time_install_date_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceGroupInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection">managed_instance_group_installed_package_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput">time_install_date_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput">time_install_date_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd">time_install_date_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart">time_install_date_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a>

---

##### `managed_instance_group_installed_package_collection`<sup>Required</sup> <a name="managed_instance_group_installed_package_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection"></a>

```python
managed_instance_group_installed_package_collection: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `time_install_date_end_input`<sup>Optional</sup> <a name="time_install_date_end_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput"></a>

```python
time_install_date_end_input: str
```

- *Type:* str

---

##### `time_install_date_start_input`<sup>Optional</sup> <a name="time_install_date_start_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput"></a>

```python
time_install_date_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `time_install_date_end`<sup>Required</sup> <a name="time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd"></a>

```python
time_install_date_end: str
```

- *Type:* str

---

##### `time_install_date_start`<sup>Required</sup> <a name="time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart"></a>

```python
time_install_date_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]] = None,
  id: str = None,
  time_install_date_end: str = None,
  time_install_date_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd">time_install_date_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart">time_install_date_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#filter DataOciOsManagementHubManagedInstanceGroupInstalledPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_install_date_end`<sup>Optional</sup> <a name="time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```python
time_install_date_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}.

---

##### `time_install_date_start`<sup>Optional</sup> <a name="time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart"></a>

```python
time_install_date_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection()
```


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>]

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_installed_packages

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a>

---



