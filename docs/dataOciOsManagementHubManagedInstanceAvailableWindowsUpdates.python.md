# `dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates` Submodule <a name="`dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates oci_os_management_hub_managed_instance_available_windows_updates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates(
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
  classification_type: typing.List[str] = None,
  compartment_id: str = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]] = None,
  id: str = None,
  is_installable: str = None,
  name: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#classification_type DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.isInstallable">is_installable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#is_installable DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#is_installable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#managed_instance_id}.

---

##### `classification_type`<sup>Optional</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.classificationType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#classification_type DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#classification_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#filter DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_installable`<sup>Optional</sup> <a name="is_installable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.isInstallable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#is_installable DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#is_installable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.Initializer.parameter.name"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetClassificationType">reset_classification_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetIsInstallable">reset_is_installable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]

---

##### `reset_classification_type` <a name="reset_classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetClassificationType"></a>

```python
def reset_classification_type() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_installable` <a name="reset_is_installable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetIsInstallable"></a>

```python
def reset_is_installable() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.availableWindowsUpdateCollection">available_windows_update_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.classificationTypeInput">classification_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.isInstallableInput">is_installable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.isInstallable">is_installable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_windows_update_collection`<sup>Required</sup> <a name="available_windows_update_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.availableWindowsUpdateCollection"></a>

```python
available_windows_update_collection: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList</a>

---

##### `classification_type_input`<sup>Optional</sup> <a name="classification_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.classificationTypeInput"></a>

```python
classification_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_installable_input`<sup>Optional</sup> <a name="is_installable_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.isInstallableInput"></a>

```python
is_installable_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classification_type`<sup>Required</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.classificationType"></a>

```python
classification_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_installable`<sup>Required</sup> <a name="is_installable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.isInstallable"></a>

```python
is_installable: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection()
```


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems()
```


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  classification_type: typing.List[str] = None,
  compartment_id: str = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]] = None,
  id: str = None,
  is_installable: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#classification_type DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.isInstallable">is_installable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#is_installable DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#is_installable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#managed_instance_id}.

---

##### `classification_type`<sup>Optional</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.classificationType"></a>

```python
classification_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#classification_type DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#classification_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#filter DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_installable`<sup>Optional</sup> <a name="is_installable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.isInstallable"></a>

```python
is_installable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#is_installable DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#is_installable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}.

---

### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#values DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#regex DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#values DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#regex DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.installable">installable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.isRebootRequiredForInstallation">is_reboot_required_for_installation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.updateId">update_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `installable`<sup>Required</sup> <a name="installable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.installable"></a>

```python
installable: str
```

- *Type:* str

---

##### `is_reboot_required_for_installation`<sup>Required</sup> <a name="is_reboot_required_for_installation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.isRebootRequiredForInstallation"></a>

```python
is_reboot_required_for_installation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `update_id`<sup>Required</sup> <a name="update_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.updateId"></a>

```python
update_id: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection</a>

---


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_available_windows_updates

dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableWindowsUpdates.DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter</a>]

---



