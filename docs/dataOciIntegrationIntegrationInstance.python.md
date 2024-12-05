# `dataOciIntegrationIntegrationInstance` Submodule <a name="`dataOciIntegrationIntegrationInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIntegrationIntegrationInstance <a name="DataOciIntegrationIntegrationInstance" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance oci_integration_integration_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  integration_instance_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.integrationInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIntegrationIntegrationInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIntegrationIntegrationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIntegrationIntegrationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.alternateCustomEndpoints">alternate_custom_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList">DataOciIntegrationIntegrationInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.consumptionModel">consumption_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.customEndpoint">custom_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList">DataOciIntegrationIntegrationInstanceCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dataRetentionPeriod">data_retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.disasterRecoveryDetails">disaster_recovery_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.enableProcessAutomationTrigger">enable_process_automation_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.extendDataRetentionTrigger">extend_data_retention_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.failoverTrigger">failover_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsAt">idcs_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsInfo">idcs_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList">DataOciIntegrationIntegrationInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceDesignTimeUrl">instance_design_time_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceType">integration_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isByol">is_byol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isDisasterRecoveryEnabled">is_disaster_recovery_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isFileServerEnabled">is_file_server_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isVisualBuilderEnabled">is_visual_builder_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.messagePacks">message_packs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.networkEndpointDetails">network_endpoint_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.privateEndpointOutboundConnection">private_endpoint_outbound_connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceIdInput">integration_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alternate_custom_endpoints`<sup>Required</sup> <a name="alternate_custom_endpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.alternateCustomEndpoints"></a>

```python
alternate_custom_endpoints: DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.attachments"></a>

```python
attachments: DataOciIntegrationIntegrationInstanceAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList">DataOciIntegrationIntegrationInstanceAttachmentsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `consumption_model`<sup>Required</sup> <a name="consumption_model" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.consumptionModel"></a>

```python
consumption_model: str
```

- *Type:* str

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.customEndpoint"></a>

```python
custom_endpoint: DataOciIntegrationIntegrationInstanceCustomEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList">DataOciIntegrationIntegrationInstanceCustomEndpointList</a>

---

##### `data_retention_period`<sup>Required</sup> <a name="data_retention_period" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dataRetentionPeriod"></a>

```python
data_retention_period: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disaster_recovery_details`<sup>Required</sup> <a name="disaster_recovery_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.disasterRecoveryDetails"></a>

```python
disaster_recovery_details: DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `enable_process_automation_trigger`<sup>Required</sup> <a name="enable_process_automation_trigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.enableProcessAutomationTrigger"></a>

```python
enable_process_automation_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extend_data_retention_trigger`<sup>Required</sup> <a name="extend_data_retention_trigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.extendDataRetentionTrigger"></a>

```python
extend_data_retention_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failover_trigger`<sup>Required</sup> <a name="failover_trigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.failoverTrigger"></a>

```python
failover_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_at`<sup>Required</sup> <a name="idcs_at" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsAt"></a>

```python
idcs_at: str
```

- *Type:* str

---

##### `idcs_info`<sup>Required</sup> <a name="idcs_info" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsInfo"></a>

```python
idcs_info: DataOciIntegrationIntegrationInstanceIdcsInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList">DataOciIntegrationIntegrationInstanceIdcsInfoList</a>

---

##### `instance_design_time_url`<sup>Required</sup> <a name="instance_design_time_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceDesignTimeUrl"></a>

```python
instance_design_time_url: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `integration_instance_type`<sup>Required</sup> <a name="integration_instance_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceType"></a>

```python
integration_instance_type: str
```

- *Type:* str

---

##### `is_byol`<sup>Required</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isByol"></a>

```python
is_byol: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_disaster_recovery_enabled`<sup>Required</sup> <a name="is_disaster_recovery_enabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isDisasterRecoveryEnabled"></a>

```python
is_disaster_recovery_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_file_server_enabled`<sup>Required</sup> <a name="is_file_server_enabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isFileServerEnabled"></a>

```python
is_file_server_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_visual_builder_enabled`<sup>Required</sup> <a name="is_visual_builder_enabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isVisualBuilderEnabled"></a>

```python
is_visual_builder_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `message_packs`<sup>Required</sup> <a name="message_packs" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.messagePacks"></a>

```python
message_packs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_endpoint_details`<sup>Required</sup> <a name="network_endpoint_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.networkEndpointDetails"></a>

```python
network_endpoint_details: DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList</a>

---

##### `private_endpoint_outbound_connection`<sup>Required</sup> <a name="private_endpoint_outbound_connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.privateEndpointOutboundConnection"></a>

```python
private_endpoint_outbound_connection: DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `integration_instance_id_input`<sup>Optional</sup> <a name="integration_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceIdInput"></a>

```python
integration_instance_id_input: str
```

- *Type:* str

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceId"></a>

```python
integration_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints <a name="DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints()
```


### DataOciIntegrationIntegrationInstanceAttachments <a name="DataOciIntegrationIntegrationInstanceAttachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments()
```


### DataOciIntegrationIntegrationInstanceConfig <a name="DataOciIntegrationIntegrationInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  integration_instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.integrationInstanceId"></a>

```python
integration_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}.

---

### DataOciIntegrationIntegrationInstanceCustomEndpoint <a name="DataOciIntegrationIntegrationInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint()
```


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails()
```


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails()
```


### DataOciIntegrationIntegrationInstanceIdcsInfo <a name="DataOciIntegrationIntegrationInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo()
```


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetails <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails()
```


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns()
```


### DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection <a name="DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList <a name="DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference <a name="DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificate_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificate_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType">dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType">managed_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints">DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `certificate_secret_id`<sup>Required</sup> <a name="certificate_secret_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```python
certificate_secret_id: str
```

- *Type:* str

---

##### `certificate_secret_version`<sup>Required</sup> <a name="certificate_secret_version" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```python
certificate_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_type`<sup>Required</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```python
dns_type: str
```

- *Type:* str

---

##### `dns_zone_name`<sup>Required</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `managed_type`<sup>Required</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType"></a>

```python
managed_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints">DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints</a>

---


### DataOciIntegrationIntegrationInstanceAttachmentsList <a name="DataOciIntegrationIntegrationInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceAttachmentsOutputReference <a name="DataOciIntegrationIntegrationInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit">is_implicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl">target_instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole">target_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType">target_service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments">DataOciIntegrationIntegrationInstanceAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_implicit`<sup>Required</sup> <a name="is_implicit" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit"></a>

```python
is_implicit: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_instance_url`<sup>Required</sup> <a name="target_instance_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```python
target_instance_url: str
```

- *Type:* str

---

##### `target_role`<sup>Required</sup> <a name="target_role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole"></a>

```python
target_role: str
```

- *Type:* str

---

##### `target_service_type`<sup>Required</sup> <a name="target_service_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```python
target_service_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments">DataOciIntegrationIntegrationInstanceAttachments</a>

---


### DataOciIntegrationIntegrationInstanceCustomEndpointList <a name="DataOciIntegrationIntegrationInstanceCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference <a name="DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId">certificate_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion">certificate_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType">dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType">managed_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint">DataOciIntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `certificate_secret_id`<sup>Required</sup> <a name="certificate_secret_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```python
certificate_secret_id: str
```

- *Type:* str

---

##### `certificate_secret_version`<sup>Required</sup> <a name="certificate_secret_version" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```python
certificate_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_type`<sup>Required</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType"></a>

```python
dns_type: str
```

- *Type:* str

---

##### `dns_zone_name`<sup>Required</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `managed_type`<sup>Required</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType"></a>

```python
managed_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceCustomEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint">DataOciIntegrationIntegrationInstanceCustomEndpoint</a>

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">time_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `time_role_changed`<sup>Required</sup> <a name="time_role_changed" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```python
time_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">cross_region_integration_instance_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">regional_instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_region_integration_instance_details`<sup>Required</sup> <a name="cross_region_integration_instance_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```python
cross_region_integration_instance_details: DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `regional_instance_url`<sup>Required</sup> <a name="regional_instance_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```python
regional_instance_url: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails</a>

---


### DataOciIntegrationIntegrationInstanceIdcsInfoList <a name="DataOciIntegrationIntegrationInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference <a name="DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">idcs_app_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId">idcs_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">idcs_app_location_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName">idcs_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instance_primary_audience_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo">DataOciIntegrationIntegrationInstanceIdcsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idcs_app_display_name`<sup>Required</sup> <a name="idcs_app_display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```python
idcs_app_display_name: str
```

- *Type:* str

---

##### `idcs_app_id`<sup>Required</sup> <a name="idcs_app_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```python
idcs_app_id: str
```

- *Type:* str

---

##### `idcs_app_location_url`<sup>Required</sup> <a name="idcs_app_location_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```python
idcs_app_location_url: str
```

- *Type:* str

---

##### `idcs_app_name`<sup>Required</sup> <a name="idcs_app_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```python
idcs_app_name: str
```

- *Type:* str

---

##### `instance_primary_audience_url`<sup>Required</sup> <a name="instance_primary_audience_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```python
instance_primary_audience_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceIdcsInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo">DataOciIntegrationIntegrationInstanceIdcsInfo</a>

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">allowlisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlisted_ips`<sup>Required</sup> <a name="allowlisted_ips" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```python
allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">allowlisted_http_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">allowlisted_http_vcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">is_integration_vcn_allowlisted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails">DataOciIntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlisted_http_ips`<sup>Required</sup> <a name="allowlisted_http_ips" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```python
allowlisted_http_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowlisted_http_vcns`<sup>Required</sup> <a name="allowlisted_http_vcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```python
allowlisted_http_vcns: DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `is_integration_vcn_allowlisted`<sup>Required</sup> <a name="is_integration_vcn_allowlisted" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```python
is_integration_vcn_allowlisted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstanceNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails">DataOciIntegrationIntegrationInstanceNetworkEndpointDetails</a>

---


### DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList <a name="DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference <a name="DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instance

dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">outbound_connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `outbound_connection_type`<sup>Required</sup> <a name="outbound_connection_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```python
outbound_connection_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection</a>

---



