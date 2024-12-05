# `dataOciManagementAgentManagementAgentDataSource` Submodule <a name="`dataOciManagementAgentManagementAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentDataSource <a name="DataOciManagementAgentManagementAgentDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_key: str,
  management_agent_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.dataSourceKey">data_source_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_key`<sup>Required</sup> <a name="data_source_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.dataSourceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}.

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciManagementAgentManagementAgentDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciManagementAgentManagementAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.allowMetrics">allow_metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.isDaemonSet">is_daemon_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.metricDimensions">metric_dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList">DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimit">read_data_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes">read_data_limit_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.scheduleMins">schedule_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKeyInput">data_source_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKey">data_source_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allow_metrics`<sup>Required</sup> <a name="allow_metrics" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.allowMetrics"></a>

```python
allow_metrics: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_daemon_set`<sup>Required</sup> <a name="is_daemon_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.isDaemonSet"></a>

```python
is_daemon_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metric_dimensions`<sup>Required</sup> <a name="metric_dimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.metricDimensions"></a>

```python
metric_dimensions: DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList">DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `read_data_limit`<sup>Required</sup> <a name="read_data_limit" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimit"></a>

```python
read_data_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_data_limit_in_kilobytes`<sup>Required</sup> <a name="read_data_limit_in_kilobytes" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes"></a>

```python
read_data_limit_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout`<sup>Required</sup> <a name="read_timeout" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `schedule_mins`<sup>Required</sup> <a name="schedule_mins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.scheduleMins"></a>

```python
schedule_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `data_source_key_input`<sup>Optional</sup> <a name="data_source_key_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKeyInput"></a>

```python
data_source_key_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `data_source_key`<sup>Required</sup> <a name="data_source_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.dataSourceKey"></a>

```python
data_source_key: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentDataSourceConfig <a name="DataOciManagementAgentManagementAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_key: str,
  management_agent_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dataSourceKey">data_source_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_key`<sup>Required</sup> <a name="data_source_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.dataSourceKey"></a>

```python
data_source_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}.

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}.

---

### DataOciManagementAgentManagementAgentDataSourceMetricDimensions <a name="DataOciManagementAgentManagementAgentDataSourceMetricDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList <a name="DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference <a name="DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_data_source

dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions">DataOciManagementAgentManagementAgentDataSourceMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciManagementAgentManagementAgentDataSourceMetricDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentDataSource.DataOciManagementAgentManagementAgentDataSourceMetricDimensions">DataOciManagementAgentManagementAgentDataSourceMetricDimensions</a>

---



