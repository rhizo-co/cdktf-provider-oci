# `dataOciCoreInstanceConsoleConnections` Submodule <a name="`dataOciCoreInstanceConsoleConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceConsoleConnections <a name="DataOciCoreInstanceConsoleConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections oci_core_instance_console_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreInstanceConsoleConnectionsFilter]] = None,
  id: str = None,
  instance_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#compartment_id DataOciCoreInstanceConsoleConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#id DataOciCoreInstanceConsoleConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#instance_id DataOciCoreInstanceConsoleConnections#instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#compartment_id DataOciCoreInstanceConsoleConnections#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#filter DataOciCoreInstanceConsoleConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#id DataOciCoreInstanceConsoleConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#instance_id DataOciCoreInstanceConsoleConnections#instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetInstanceId">reset_instance_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreInstanceConsoleConnectionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceConsoleConnections resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreInstanceConsoleConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreInstanceConsoleConnections to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreInstanceConsoleConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceConsoleConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList">DataOciCoreInstanceConsoleConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceConsoleConnections">instance_console_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filter"></a>

```python
filter: DataOciCoreInstanceConsoleConnectionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList">DataOciCoreInstanceConsoleConnectionsFilterList</a>

---

##### `instance_console_connections`<sup>Required</sup> <a name="instance_console_connections" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceConsoleConnections"></a>

```python
instance_console_connections: DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreInstanceConsoleConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceConsoleConnectionsConfig <a name="DataOciCoreInstanceConsoleConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreInstanceConsoleConnectionsFilter]] = None,
  id: str = None,
  instance_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#compartment_id DataOciCoreInstanceConsoleConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#id DataOciCoreInstanceConsoleConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#instance_id DataOciCoreInstanceConsoleConnections#instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#compartment_id DataOciCoreInstanceConsoleConnections#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreInstanceConsoleConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#filter DataOciCoreInstanceConsoleConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#id DataOciCoreInstanceConsoleConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#instance_id DataOciCoreInstanceConsoleConnections#instance_id}.

---

### DataOciCoreInstanceConsoleConnectionsFilter <a name="DataOciCoreInstanceConsoleConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#name DataOciCoreInstanceConsoleConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#values DataOciCoreInstanceConsoleConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#regex DataOciCoreInstanceConsoleConnections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#name DataOciCoreInstanceConsoleConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#values DataOciCoreInstanceConsoleConnections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#regex DataOciCoreInstanceConsoleConnections#regex}.

---

### DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections <a name="DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceConsoleConnectionsFilterList <a name="DataOciCoreInstanceConsoleConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceConsoleConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreInstanceConsoleConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]]

---


### DataOciCoreInstanceConsoleConnectionsFilterOutputReference <a name="DataOciCoreInstanceConsoleConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreInstanceConsoleConnectionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter">DataOciCoreInstanceConsoleConnectionsFilter</a>]

---


### DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList <a name="DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference <a name="DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_console_connections

dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.serviceHostKeyFingerprint">service_host_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.vncConnectionString">vnc_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `service_host_key_fingerprint`<sup>Required</sup> <a name="service_host_key_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.serviceHostKeyFingerprint"></a>

```python
service_host_key_fingerprint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vnc_connection_string`<sup>Required</sup> <a name="vnc_connection_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.vncConnectionString"></a>

```python
vnc_connection_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections</a>

---



