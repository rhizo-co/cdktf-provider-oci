# `dataOciOsmanagementManagedInstanceModuleStreams` Submodule <a name="`dataOciOsmanagementManagedInstanceModuleStreams` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceModuleStreams <a name="DataOciOsmanagementManagedInstanceModuleStreams" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams oci_osmanagement_managed_instance_module_streams}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceModuleStreamsFilter]] = None,
  id: str = None,
  module_name: str = None,
  stream_name: str = None,
  stream_status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamStatus">stream_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}.

---

##### `stream_status`<sup>Optional</sup> <a name="stream_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.streamStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName">reset_module_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName">reset_stream_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus">reset_stream_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceModuleStreamsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_module_name` <a name="reset_module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName"></a>

```python
def reset_module_name() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

##### `reset_stream_status` <a name="reset_stream_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus"></a>

```python
def reset_stream_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceModuleStreams to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementManagedInstanceModuleStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceModuleStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances">module_stream_on_managed_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput">stream_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus">stream_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter"></a>

```python
filter: DataOciOsmanagementManagedInstanceModuleStreamsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a>

---

##### `module_stream_on_managed_instances`<sup>Required</sup> <a name="module_stream_on_managed_instances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances"></a>

```python
module_stream_on_managed_instances: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceModuleStreamsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `stream_status_input`<sup>Optional</sup> <a name="stream_status_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput"></a>

```python
stream_status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `stream_status`<sup>Required</sup> <a name="stream_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus"></a>

```python
stream_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsConfig <a name="DataOciOsmanagementManagedInstanceModuleStreamsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceModuleStreamsFilter]] = None,
  id: str = None,
  module_name: str = None,
  stream_name: str = None,
  stream_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus">stream_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceModuleStreamsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}.

---

##### `stream_status`<sup>Optional</sup> <a name="stream_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus"></a>

```python
stream_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsFilter <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances()
```


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsFilterList <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceModuleStreamsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]]

---


### DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsmanagementManagedInstanceModuleStreamsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>]

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles"></a>

```python
profiles: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a>

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a>

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_module_streams

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a>

---



