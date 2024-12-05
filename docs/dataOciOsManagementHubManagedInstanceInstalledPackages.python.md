# `dataOciOsManagementHubManagedInstanceInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackages <a name="DataOciOsManagementHubManagedInstanceInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages oci_os_management_hub_managed_instance_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]] = None,
  id: str = None,
  time_install_date_end: str = None,
  time_install_date_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.timeInstallDateEnd">time_install_date_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.timeInstallDateStart">time_install_date_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#filter DataOciOsManagementHubManagedInstanceInstalledPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_install_date_end`<sup>Optional</sup> <a name="time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.timeInstallDateEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}.

---

##### `time_install_date_start`<sup>Optional</sup> <a name="time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.timeInstallDateStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateEnd">reset_time_install_date_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateStart">reset_time_install_date_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_install_date_end` <a name="reset_time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateEnd"></a>

```python
def reset_time_install_date_end() -> None
```

##### `reset_time_install_date_start` <a name="reset_time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateStart"></a>

```python
def reset_time_install_date_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceInstalledPackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.installedPackageCollection">installed_package_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEndInput">time_install_date_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStartInput">time_install_date_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEnd">time_install_date_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStart">time_install_date_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList</a>

---

##### `installed_package_collection`<sup>Required</sup> <a name="installed_package_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.installedPackageCollection"></a>

```python
installed_package_collection: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `time_install_date_end_input`<sup>Optional</sup> <a name="time_install_date_end_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEndInput"></a>

```python
time_install_date_end_input: str
```

- *Type:* str

---

##### `time_install_date_start_input`<sup>Optional</sup> <a name="time_install_date_start_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStartInput"></a>

```python
time_install_date_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `time_install_date_end`<sup>Required</sup> <a name="time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEnd"></a>

```python
time_install_date_end: str
```

- *Type:* str

---

##### `time_install_date_start`<sup>Required</sup> <a name="time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStart"></a>

```python
time_install_date_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]] = None,
  id: str = None,
  time_install_date_end: str = None,
  time_install_date_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateEnd">time_install_date_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateStart">time_install_date_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#filter DataOciOsManagementHubManagedInstanceInstalledPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_install_date_end`<sup>Optional</sup> <a name="time_install_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```python
time_install_date_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}.

---

##### `time_install_date_start`<sup>Optional</sup> <a name="time_install_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateStart"></a>

```python
time_install_date_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#name DataOciOsManagementHubManagedInstanceInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#values DataOciOsManagementHubManagedInstanceInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#regex DataOciOsManagementHubManagedInstanceInstalledPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#name DataOciOsManagementHubManagedInstanceInstalledPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#values DataOciOsManagementHubManagedInstanceInstalledPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#regex DataOciOsManagementHubManagedInstanceInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection()
```


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems()
```


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceInstalledPackagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>]

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.packageClassification">package_classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeInstalled">time_installed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeIssued">time_issued</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_classification`<sup>Required</sup> <a name="package_classification" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.packageClassification"></a>

```python
package_classification: str
```

- *Type:* str

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList</a>

---

##### `time_installed`<sup>Required</sup> <a name="time_installed" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeInstalled"></a>

```python
time_installed: str
```

- *Type:* str

---

##### `time_issued`<sup>Required</sup> <a name="time_issued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeIssued"></a>

```python
time_issued: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_installed_packages

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection</a>

---



