# `dataOciOsManagementHubSoftwareSources` Submodule <a name="`dataOciOsManagementHubSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSources <a name="DataOciOsManagementHubSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources oci_os_management_hub_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: typing.List[str] = None,
  availability: typing.List[str] = None,
  availability_anywhere: typing.List[str] = None,
  availability_at_oci: typing.List[str] = None,
  compartment_id: str = None,
  display_name: str = None,
  display_name_contains: str = None,
  display_name_not_equal_to: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcesFilter]] = None,
  id: str = None,
  is_mandatory_for_autonomous_linux: typing.Union[bool, IResolvable] = None,
  os_family: typing.List[str] = None,
  software_source_id: str = None,
  software_source_type: typing.List[str] = None,
  state: typing.List[str] = None,
  vendor_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.archType">arch_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#arch_type DataOciOsManagementHubSoftwareSources#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.availability">availability</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability DataOciOsManagementHubSoftwareSources#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.availabilityAnywhere">availability_anywhere</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_anywhere DataOciOsManagementHubSoftwareSources#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.availabilityAtOci">availability_at_oci</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_at_oci DataOciOsManagementHubSoftwareSources#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#compartment_id DataOciOsManagementHubSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name DataOciOsManagementHubSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_contains DataOciOsManagementHubSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.displayNameNotEqualTo">display_name_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_not_equal_to DataOciOsManagementHubSoftwareSources#display_name_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#id DataOciOsManagementHubSoftwareSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#is_mandatory_for_autonomous_linux DataOciOsManagementHubSoftwareSources#is_mandatory_for_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#os_family DataOciOsManagementHubSoftwareSources#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_id DataOciOsManagementHubSoftwareSources#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.softwareSourceType">software_source_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_type DataOciOsManagementHubSoftwareSources#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#state DataOciOsManagementHubSoftwareSources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.vendorName">vendor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#vendor_name DataOciOsManagementHubSoftwareSources#vendor_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.archType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#arch_type DataOciOsManagementHubSoftwareSources#arch_type}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.availability"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability DataOciOsManagementHubSoftwareSources#availability}.

---

##### `availability_anywhere`<sup>Optional</sup> <a name="availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.availabilityAnywhere"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_anywhere DataOciOsManagementHubSoftwareSources#availability_anywhere}.

---

##### `availability_at_oci`<sup>Optional</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.availabilityAtOci"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_at_oci DataOciOsManagementHubSoftwareSources#availability_at_oci}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#compartment_id DataOciOsManagementHubSoftwareSources#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name DataOciOsManagementHubSoftwareSources#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_contains DataOciOsManagementHubSoftwareSources#display_name_contains}.

---

##### `display_name_not_equal_to`<sup>Optional</sup> <a name="display_name_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.displayNameNotEqualTo"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_not_equal_to DataOciOsManagementHubSoftwareSources#display_name_not_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#filter DataOciOsManagementHubSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#id DataOciOsManagementHubSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_mandatory_for_autonomous_linux`<sup>Optional</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.isMandatoryForAutonomousLinux"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#is_mandatory_for_autonomous_linux DataOciOsManagementHubSoftwareSources#is_mandatory_for_autonomous_linux}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.osFamily"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#os_family DataOciOsManagementHubSoftwareSources#os_family}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_id DataOciOsManagementHubSoftwareSources#software_source_id}.

---

##### `software_source_type`<sup>Optional</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.softwareSourceType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_type DataOciOsManagementHubSoftwareSources#software_source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#state DataOciOsManagementHubSoftwareSources#state}.

---

##### `vendor_name`<sup>Optional</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.Initializer.parameter.vendorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#vendor_name DataOciOsManagementHubSoftwareSources#vendor_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetArchType">reset_arch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetAvailabilityAnywhere">reset_availability_anywhere</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetAvailabilityAtOci">reset_availability_at_oci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetDisplayNameNotEqualTo">reset_display_name_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetIsMandatoryForAutonomousLinux">reset_is_mandatory_for_autonomous_linux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetSoftwareSourceType">reset_software_source_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetVendorName">reset_vendor_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]

---

##### `reset_arch_type` <a name="reset_arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetArchType"></a>

```python
def reset_arch_type() -> None
```

##### `reset_availability` <a name="reset_availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_availability_anywhere` <a name="reset_availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetAvailabilityAnywhere"></a>

```python
def reset_availability_anywhere() -> None
```

##### `reset_availability_at_oci` <a name="reset_availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetAvailabilityAtOci"></a>

```python
def reset_availability_at_oci() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_display_name_not_equal_to` <a name="reset_display_name_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetDisplayNameNotEqualTo"></a>

```python
def reset_display_name_not_equal_to() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_mandatory_for_autonomous_linux` <a name="reset_is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetIsMandatoryForAutonomousLinux"></a>

```python
def reset_is_mandatory_for_autonomous_linux() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```

##### `reset_software_source_type` <a name="reset_software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetSoftwareSourceType"></a>

```python
def reset_software_source_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_vendor_name` <a name="reset_vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.resetVendorName"></a>

```python
def reset_vendor_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList">DataOciOsManagementHubSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceCollection">software_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.archTypeInput">arch_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAnywhereInput">availability_anywhere_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAtOciInput">availability_at_oci_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityInput">availability_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameNotEqualToInput">display_name_not_equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.isMandatoryForAutonomousLinuxInput">is_mandatory_for_autonomous_linux_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.osFamilyInput">os_family_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceTypeInput">software_source_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.vendorNameInput">vendor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.archType">arch_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availability">availability</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAnywhere">availability_anywhere</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAtOci">availability_at_oci</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameNotEqualTo">display_name_not_equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceType">software_source_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwareSourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList">DataOciOsManagementHubSoftwareSourcesFilterList</a>

---

##### `software_source_collection`<sup>Required</sup> <a name="software_source_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceCollection"></a>

```python
software_source_collection: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList</a>

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.archTypeInput"></a>

```python
arch_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_anywhere_input`<sup>Optional</sup> <a name="availability_anywhere_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAnywhereInput"></a>

```python
availability_anywhere_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_at_oci_input`<sup>Optional</sup> <a name="availability_at_oci_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAtOciInput"></a>

```python
availability_at_oci_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityInput"></a>

```python
availability_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `display_name_not_equal_to_input`<sup>Optional</sup> <a name="display_name_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameNotEqualToInput"></a>

```python
display_name_not_equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux_input`<sup>Optional</sup> <a name="is_mandatory_for_autonomous_linux_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.isMandatoryForAutonomousLinuxInput"></a>

```python
is_mandatory_for_autonomous_linux_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.osFamilyInput"></a>

```python
os_family_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `software_source_type_input`<sup>Optional</sup> <a name="software_source_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceTypeInput"></a>

```python
software_source_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vendor_name_input`<sup>Optional</sup> <a name="vendor_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.vendorNameInput"></a>

```python
vendor_name_input: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.archType"></a>

```python
arch_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availability"></a>

```python
availability: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_anywhere`<sup>Required</sup> <a name="availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAnywhere"></a>

```python
availability_anywhere: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.availabilityAtOci"></a>

```python
availability_at_oci: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `display_name_not_equal_to`<sup>Required</sup> <a name="display_name_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.displayNameNotEqualTo"></a>

```python
display_name_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.softwareSourceType"></a>

```python
software_source_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourcesConfig <a name="DataOciOsManagementHubSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: typing.List[str] = None,
  availability: typing.List[str] = None,
  availability_anywhere: typing.List[str] = None,
  availability_at_oci: typing.List[str] = None,
  compartment_id: str = None,
  display_name: str = None,
  display_name_contains: str = None,
  display_name_not_equal_to: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcesFilter]] = None,
  id: str = None,
  is_mandatory_for_autonomous_linux: typing.Union[bool, IResolvable] = None,
  os_family: typing.List[str] = None,
  software_source_id: str = None,
  software_source_type: typing.List[str] = None,
  state: typing.List[str] = None,
  vendor_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.archType">arch_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#arch_type DataOciOsManagementHubSoftwareSources#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.availability">availability</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability DataOciOsManagementHubSoftwareSources#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.availabilityAnywhere">availability_anywhere</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_anywhere DataOciOsManagementHubSoftwareSources#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.availabilityAtOci">availability_at_oci</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_at_oci DataOciOsManagementHubSoftwareSources#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#compartment_id DataOciOsManagementHubSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name DataOciOsManagementHubSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_contains DataOciOsManagementHubSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.displayNameNotEqualTo">display_name_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_not_equal_to DataOciOsManagementHubSoftwareSources#display_name_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#id DataOciOsManagementHubSoftwareSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#is_mandatory_for_autonomous_linux DataOciOsManagementHubSoftwareSources#is_mandatory_for_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#os_family DataOciOsManagementHubSoftwareSources#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_id DataOciOsManagementHubSoftwareSources#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.softwareSourceType">software_source_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_type DataOciOsManagementHubSoftwareSources#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#state DataOciOsManagementHubSoftwareSources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.vendorName">vendor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#vendor_name DataOciOsManagementHubSoftwareSources#vendor_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.archType"></a>

```python
arch_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#arch_type DataOciOsManagementHubSoftwareSources#arch_type}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.availability"></a>

```python
availability: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability DataOciOsManagementHubSoftwareSources#availability}.

---

##### `availability_anywhere`<sup>Optional</sup> <a name="availability_anywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.availabilityAnywhere"></a>

```python
availability_anywhere: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_anywhere DataOciOsManagementHubSoftwareSources#availability_anywhere}.

---

##### `availability_at_oci`<sup>Optional</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.availabilityAtOci"></a>

```python
availability_at_oci: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#availability_at_oci DataOciOsManagementHubSoftwareSources#availability_at_oci}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#compartment_id DataOciOsManagementHubSoftwareSources#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name DataOciOsManagementHubSoftwareSources#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_contains DataOciOsManagementHubSoftwareSources#display_name_contains}.

---

##### `display_name_not_equal_to`<sup>Optional</sup> <a name="display_name_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.displayNameNotEqualTo"></a>

```python
display_name_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#display_name_not_equal_to DataOciOsManagementHubSoftwareSources#display_name_not_equal_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#filter DataOciOsManagementHubSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#id DataOciOsManagementHubSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_mandatory_for_autonomous_linux`<sup>Optional</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#is_mandatory_for_autonomous_linux DataOciOsManagementHubSoftwareSources#is_mandatory_for_autonomous_linux}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#os_family DataOciOsManagementHubSoftwareSources#os_family}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_id DataOciOsManagementHubSoftwareSources#software_source_id}.

---

##### `software_source_type`<sup>Optional</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.softwareSourceType"></a>

```python
software_source_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#software_source_type DataOciOsManagementHubSoftwareSources#software_source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#state DataOciOsManagementHubSoftwareSources#state}.

---

##### `vendor_name`<sup>Optional</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesConfig.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#vendor_name DataOciOsManagementHubSoftwareSources#vendor_name}.

---

### DataOciOsManagementHubSoftwareSourcesFilter <a name="DataOciOsManagementHubSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#name DataOciOsManagementHubSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#values DataOciOsManagementHubSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#regex DataOciOsManagementHubSoftwareSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#name DataOciOsManagementHubSoftwareSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#values DataOciOsManagementHubSoftwareSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_sources#regex DataOciOsManagementHubSoftwareSources#regex}.

---

### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection()
```


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems()
```


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourcesFilterList <a name="DataOciOsManagementHubSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]]

---


### DataOciOsManagementHubSoftwareSourcesFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwareSourcesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesFilter">DataOciOsManagementHubSoftwareSourcesFilter</a>]

---


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci">availability_at_oci</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.packageCount">package_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion">software_source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources">vendor_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci"></a>

```python
availability_at_oci: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_count`<sup>Required</sup> <a name="package_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.packageCount"></a>

```python
package_count: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `software_source_version`<sup>Required</sup> <a name="software_source_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion"></a>

```python
software_source_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `vendor_software_sources`<sup>Required</sup> <a name="vendor_software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources"></a>

```python
vendor_software_sources: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources</a>

---


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_sources

dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSources.DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection">DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection</a>

---



