# `dataOciOsManagementHubSoftwarePackageSoftwareSource` Submodule <a name="`dataOciOsManagementHubSoftwarePackageSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSource <a name="DataOciOsManagementHubSoftwarePackageSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source oci_os_management_hub_software_package_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  software_package_name: str,
  arch_type: typing.List[str] = None,
  availability: typing.List[str] = None,
  availability_anywhere: typing.List[str] = None,
  availability_at_oci: typing.List[str] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]] = None,
  id: str = None,
  os_family: typing.List[str] = None,
  software_source_type: typing.List[str] = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwarePackageName">software_package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.archType">arch_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availability">availability</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAnywhere">availability_anywhere</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAtOci">availability_at_oci</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwareSourceType">software_source_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}.

---

##### `software_package_name`<sup>Required</sup> <a name="software_package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwarePackageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}.

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.archType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availability"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}.

---

##### `availability_anywhere`<sup>Optional</sup> <a name="availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAnywhere"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}.

---

##### `availability_at_oci`<sup>Optional</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.availabilityAtOci"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#filter DataOciOsManagementHubSoftwarePackageSoftwareSource#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.osFamily"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}.

---

##### `software_source_type`<sup>Optional</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.softwareSourceType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetArchType">reset_arch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAnywhere">reset_availability_anywhere</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAtOci">reset_availability_at_oci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetSoftwareSourceType">reset_software_source_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]

---

##### `reset_arch_type` <a name="reset_arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetArchType"></a>

```python
def reset_arch_type() -> None
```

##### `reset_availability` <a name="reset_availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_availability_anywhere` <a name="reset_availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAnywhere"></a>

```python
def reset_availability_anywhere() -> None
```

##### `reset_availability_at_oci` <a name="reset_availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAtOci"></a>

```python
def reset_availability_at_oci() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_software_source_type` <a name="reset_software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetSoftwareSourceType"></a>

```python
def reset_software_source_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwarePackageSoftwareSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwarePackageSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwarePackageSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceCollection">software_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archTypeInput">arch_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhereInput">availability_anywhere_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOciInput">availability_at_oci_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityInput">availability_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamilyInput">os_family_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageNameInput">software_package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceTypeInput">software_source_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archType">arch_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availability">availability</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhere">availability_anywhere</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOci">availability_at_oci</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageName">software_package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceType">software_source_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList</a>

---

##### `software_source_collection`<sup>Required</sup> <a name="software_source_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceCollection"></a>

```python
software_source_collection: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList</a>

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archTypeInput"></a>

```python
arch_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_anywhere_input`<sup>Optional</sup> <a name="availability_anywhere_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhereInput"></a>

```python
availability_anywhere_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_at_oci_input`<sup>Optional</sup> <a name="availability_at_oci_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOciInput"></a>

```python
availability_at_oci_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityInput"></a>

```python
availability_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamilyInput"></a>

```python
os_family_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_package_name_input`<sup>Optional</sup> <a name="software_package_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageNameInput"></a>

```python
software_package_name_input: str
```

- *Type:* str

---

##### `software_source_type_input`<sup>Optional</sup> <a name="software_source_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceTypeInput"></a>

```python
software_source_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archType"></a>

```python
arch_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availability"></a>

```python
availability: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_anywhere`<sup>Required</sup> <a name="availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhere"></a>

```python
availability_anywhere: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOci"></a>

```python
availability_at_oci: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_package_name`<sup>Required</sup> <a name="software_package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageName"></a>

```python
software_package_name: str
```

- *Type:* str

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceType"></a>

```python
software_source_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  software_package_name: str,
  arch_type: typing.List[str] = None,
  availability: typing.List[str] = None,
  availability_anywhere: typing.List[str] = None,
  availability_at_oci: typing.List[str] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]] = None,
  id: str = None,
  os_family: typing.List[str] = None,
  software_source_type: typing.List[str] = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwarePackageName">software_package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.archType">arch_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availability">availability</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAnywhere">availability_anywhere</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAtOci">availability_at_oci</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwareSourceType">software_source_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}.

---

##### `software_package_name`<sup>Required</sup> <a name="software_package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwarePackageName"></a>

```python
software_package_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}.

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.archType"></a>

```python
arch_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availability"></a>

```python
availability: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}.

---

##### `availability_anywhere`<sup>Optional</sup> <a name="availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAnywhere"></a>

```python
availability_anywhere: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}.

---

##### `availability_at_oci`<sup>Optional</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAtOci"></a>

```python
availability_at_oci: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#filter DataOciOsManagementHubSoftwarePackageSoftwareSource#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}.

---

##### `software_source_type`<sup>Optional</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwareSourceType"></a>

```python
software_source_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}.

---

### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}.

---

### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection()
```


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems()
```


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]]

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter</a>]

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci">availability_at_oci</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.packageCount">package_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion">software_source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources">vendor_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci"></a>

```python
availability_at_oci: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_count`<sup>Required</sup> <a name="package_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.packageCount"></a>

```python
package_count: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `software_source_version`<sup>Required</sup> <a name="software_source_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion"></a>

```python
software_source_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `vendor_software_sources`<sup>Required</sup> <a name="vendor_software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources"></a>

```python
vendor_software_sources: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_package_software_source

dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection</a>

---



