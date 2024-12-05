# `dataOciOsManagementHubSoftwareSourceModuleStreamProfiles` Submodule <a name="`dataOciOsManagementHubSoftwareSourceModuleStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamProfiles <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles oci_os_management_hub_software_source_module_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]] = None,
  id: str = None,
  module_name: str = None,
  name: str = None,
  stream_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#module_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#stream_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#stream_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#software_source_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#filter DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#module_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#module_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#stream_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#stream_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetModuleName">reset_module_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_module_name` <a name="reset_module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetModuleName"></a>

```python
def reset_module_name() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceModuleStreamProfiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSourceModuleStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceModuleStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.moduleStreamProfileCollection">module_stream_profile_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList</a>

---

##### `module_stream_profile_collection`<sup>Required</sup> <a name="module_stream_profile_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.moduleStreamProfileCollection"></a>

```python
module_stream_profile_collection: DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]] = None,
  id: str = None,
  module_name: str = None,
  name: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#module_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#stream_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#stream_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#software_source_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#filter DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#id DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#module_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#module_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#stream_name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#stream_name}.

---

### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#values DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#regex DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#name DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#values DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profiles#regex DataOciOsManagementHubSoftwareSourceModuleStreamProfiles#regex}.

---

### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection()
```


### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]]

---


### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesFilter</a>]

---


### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_stream_profiles

dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfiles.DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection">DataOciOsManagementHubSoftwareSourceModuleStreamProfilesModuleStreamProfileCollection</a>

---



