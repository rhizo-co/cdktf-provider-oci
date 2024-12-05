# `dataOciOsManagementHubSoftwareSourceModuleStreams` Submodule <a name="`dataOciOsManagementHubSoftwareSourceModuleStreams` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreams <a name="DataOciOsManagementHubSoftwareSourceModuleStreams" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams oci_os_management_hub_software_source_module_streams}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]] = None,
  id: str = None,
  is_latest: typing.Union[bool, IResolvable] = None,
  module_name: str = None,
  module_name_contains: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreams#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#id DataOciOsManagementHubSoftwareSourceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.isLatest">is_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#is_latest DataOciOsManagementHubSoftwareSourceModuleStreams#is_latest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name DataOciOsManagementHubSoftwareSourceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.moduleNameContains">module_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name_contains DataOciOsManagementHubSoftwareSourceModuleStreams#module_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreams#software_source_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#filter DataOciOsManagementHubSoftwareSourceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#id DataOciOsManagementHubSoftwareSourceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_latest`<sup>Optional</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.isLatest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#is_latest DataOciOsManagementHubSoftwareSourceModuleStreams#is_latest}.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name DataOciOsManagementHubSoftwareSourceModuleStreams#module_name}.

---

##### `module_name_contains`<sup>Optional</sup> <a name="module_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.moduleNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name_contains DataOciOsManagementHubSoftwareSourceModuleStreams#module_name_contains}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetIsLatest">reset_is_latest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleName">reset_module_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleNameContains">reset_module_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_latest` <a name="reset_is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetIsLatest"></a>

```python
def reset_is_latest() -> None
```

##### `reset_module_name` <a name="reset_module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleName"></a>

```python
def reset_module_name() -> None
```

##### `reset_module_name_contains` <a name="reset_module_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetModuleNameContains"></a>

```python
def reset_module_name_contains() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreams resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceModuleStreams to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSourceModuleStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceModuleStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList">DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleStreamCollection">module_stream_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatestInput">is_latest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContainsInput">module_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatest">is_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContains">module_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList">DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList</a>

---

##### `module_stream_collection`<sup>Required</sup> <a name="module_stream_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleStreamCollection"></a>

```python
module_stream_collection: DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_latest_input`<sup>Optional</sup> <a name="is_latest_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatestInput"></a>

```python
is_latest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `module_name_contains_input`<sup>Optional</sup> <a name="module_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContainsInput"></a>

```python
module_name_contains_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_latest`<sup>Required</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.isLatest"></a>

```python
is_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `module_name_contains`<sup>Required</sup> <a name="module_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.moduleNameContains"></a>

```python
module_name_contains: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamsConfig <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]] = None,
  id: str = None,
  is_latest: typing.Union[bool, IResolvable] = None,
  module_name: str = None,
  module_name_contains: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreams#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#id DataOciOsManagementHubSoftwareSourceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.isLatest">is_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#is_latest DataOciOsManagementHubSoftwareSourceModuleStreams#is_latest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name DataOciOsManagementHubSoftwareSourceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleNameContains">module_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name_contains DataOciOsManagementHubSoftwareSourceModuleStreams#module_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreams#software_source_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#filter DataOciOsManagementHubSoftwareSourceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#id DataOciOsManagementHubSoftwareSourceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_latest`<sup>Optional</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.isLatest"></a>

```python
is_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#is_latest DataOciOsManagementHubSoftwareSourceModuleStreams#is_latest}.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name DataOciOsManagementHubSoftwareSourceModuleStreams#module_name}.

---

##### `module_name_contains`<sup>Optional</sup> <a name="module_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.moduleNameContains"></a>

```python
module_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#module_name_contains DataOciOsManagementHubSoftwareSourceModuleStreams#module_name_contains}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}.

---

### DataOciOsManagementHubSoftwareSourceModuleStreamsFilter <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#values DataOciOsManagementHubSoftwareSourceModuleStreams#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#regex DataOciOsManagementHubSoftwareSourceModuleStreams#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#name DataOciOsManagementHubSoftwareSourceModuleStreams#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#values DataOciOsManagementHubSoftwareSourceModuleStreams#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_streams#regex DataOciOsManagementHubSoftwareSourceModuleStreams#regex}.

---

### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection()
```


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]]

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwareSourceModuleStreamsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsFilter">DataOciOsManagementHubSoftwareSourceModuleStreamsFilter</a>]

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isLatest">is_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_latest`<sup>Required</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.isLatest"></a>

```python
is_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_module_streams

dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreams.DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection">DataOciOsManagementHubSoftwareSourceModuleStreamsModuleStreamCollection</a>

---



