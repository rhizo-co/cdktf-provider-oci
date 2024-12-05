# `dataOciOsManagementHubManagedInstanceUpdatablePackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceUpdatablePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceUpdatablePackages <a name="DataOciOsManagementHubManagedInstanceUpdatablePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages oci_os_management_hub_managed_instance_updatable_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages(
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
  advisory_name: typing.List[str] = None,
  classification_type: typing.List[str] = None,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#managed_instance_id DataOciOsManagementHubManagedInstanceUpdatablePackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.advisoryName">advisory_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#advisory_name DataOciOsManagementHubManagedInstanceUpdatablePackages#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#classification_type DataOciOsManagementHubManagedInstanceUpdatablePackages#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#compartment_id DataOciOsManagementHubManagedInstanceUpdatablePackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name_contains DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#id DataOciOsManagementHubManagedInstanceUpdatablePackages#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#managed_instance_id DataOciOsManagementHubManagedInstanceUpdatablePackages#managed_instance_id}.

---

##### `advisory_name`<sup>Optional</sup> <a name="advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.advisoryName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#advisory_name DataOciOsManagementHubManagedInstanceUpdatablePackages#advisory_name}.

---

##### `classification_type`<sup>Optional</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.classificationType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#classification_type DataOciOsManagementHubManagedInstanceUpdatablePackages#classification_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#compartment_id DataOciOsManagementHubManagedInstanceUpdatablePackages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name_contains DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#filter DataOciOsManagementHubManagedInstanceUpdatablePackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#id DataOciOsManagementHubManagedInstanceUpdatablePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetAdvisoryName">reset_advisory_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetClassificationType">reset_classification_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]

---

##### `reset_advisory_name` <a name="reset_advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetAdvisoryName"></a>

```python
def reset_advisory_name() -> None
```

##### `reset_classification_type` <a name="reset_classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetClassificationType"></a>

```python
def reset_classification_type() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceUpdatablePackages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceUpdatablePackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceUpdatablePackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceUpdatablePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceUpdatablePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.updatablePackageCollection">updatable_package_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryNameInput">advisory_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationTypeInput">classification_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryName">advisory_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList</a>

---

##### `updatable_package_collection`<sup>Required</sup> <a name="updatable_package_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.updatablePackageCollection"></a>

```python
updatable_package_collection: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList</a>

---

##### `advisory_name_input`<sup>Optional</sup> <a name="advisory_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryNameInput"></a>

```python
advisory_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classification_type_input`<sup>Optional</sup> <a name="classification_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationTypeInput"></a>

```python
classification_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `advisory_name`<sup>Required</sup> <a name="advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryName"></a>

```python
advisory_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classification_type`<sup>Required</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationType"></a>

```python
classification_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  advisory_name: typing.List[str] = None,
  classification_type: typing.List[str] = None,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#managed_instance_id DataOciOsManagementHubManagedInstanceUpdatablePackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.advisoryName">advisory_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#advisory_name DataOciOsManagementHubManagedInstanceUpdatablePackages#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#classification_type DataOciOsManagementHubManagedInstanceUpdatablePackages#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#compartment_id DataOciOsManagementHubManagedInstanceUpdatablePackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name_contains DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#id DataOciOsManagementHubManagedInstanceUpdatablePackages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#managed_instance_id DataOciOsManagementHubManagedInstanceUpdatablePackages#managed_instance_id}.

---

##### `advisory_name`<sup>Optional</sup> <a name="advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.advisoryName"></a>

```python
advisory_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#advisory_name DataOciOsManagementHubManagedInstanceUpdatablePackages#advisory_name}.

---

##### `classification_type`<sup>Optional</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.classificationType"></a>

```python
classification_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#classification_type DataOciOsManagementHubManagedInstanceUpdatablePackages#classification_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#compartment_id DataOciOsManagementHubManagedInstanceUpdatablePackages#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name_contains DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#filter DataOciOsManagementHubManagedInstanceUpdatablePackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#id DataOciOsManagementHubManagedInstanceUpdatablePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#name DataOciOsManagementHubManagedInstanceUpdatablePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#values DataOciOsManagementHubManagedInstanceUpdatablePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#regex DataOciOsManagementHubManagedInstanceUpdatablePackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#name DataOciOsManagementHubManagedInstanceUpdatablePackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#values DataOciOsManagementHubManagedInstanceUpdatablePackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#regex DataOciOsManagementHubManagedInstanceUpdatablePackages#regex}.

---

### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection()
```


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems()
```


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>]

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.errata">errata</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.installedVersion">installed_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.packageClassification">package_classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.relatedCves">related_cves</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `errata`<sup>Required</sup> <a name="errata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.errata"></a>

```python
errata: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `installed_version`<sup>Required</sup> <a name="installed_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.installedVersion"></a>

```python
installed_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_classification`<sup>Required</sup> <a name="package_classification" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.packageClassification"></a>

```python
package_classification: str
```

- *Type:* str

---

##### `related_cves`<sup>Required</sup> <a name="related_cves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.relatedCves"></a>

```python
related_cves: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_updatable_packages

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection</a>

---



