# `dataOciDataSafeSensitiveDataModel` Submodule <a name="`dataOciDataSafeSensitiveDataModel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModel <a name="DataOciDataSafeSensitiveDataModel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sensitive_data_model_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSensitiveDataModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.appSuiteName">app_suite_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabled">is_app_defined_relation_discovery_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSchemas">is_include_all_schemas</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypes">is_include_all_sensitive_types</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isSampleDataCollectionEnabled">is_sample_data_collection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.schemasForDiscovery">schemas_for_discovery</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscovery">sensitive_type_ids_for_discovery</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tablesForDiscovery">tables_for_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList">DataOciDataSafeSensitiveDataModelTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `app_suite_name`<sup>Required</sup> <a name="app_suite_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.appSuiteName"></a>

```python
app_suite_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_app_defined_relation_discovery_enabled`<sup>Required</sup> <a name="is_app_defined_relation_discovery_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabled"></a>

```python
is_app_defined_relation_discovery_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_include_all_schemas`<sup>Required</sup> <a name="is_include_all_schemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSchemas"></a>

```python
is_include_all_schemas: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_include_all_sensitive_types`<sup>Required</sup> <a name="is_include_all_sensitive_types" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypes"></a>

```python
is_include_all_sensitive_types: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sample_data_collection_enabled`<sup>Required</sup> <a name="is_sample_data_collection_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isSampleDataCollectionEnabled"></a>

```python
is_sample_data_collection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `schemas_for_discovery`<sup>Required</sup> <a name="schemas_for_discovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.schemasForDiscovery"></a>

```python
schemas_for_discovery: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_ids_for_discovery`<sup>Required</sup> <a name="sensitive_type_ids_for_discovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscovery"></a>

```python
sensitive_type_ids_for_discovery: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tables_for_discovery`<sup>Required</sup> <a name="tables_for_discovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tablesForDiscovery"></a>

```python
tables_for_discovery: DataOciDataSafeSensitiveDataModelTablesForDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList">DataOciDataSafeSensitiveDataModelTablesForDiscoveryList</a>

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelConfig <a name="DataOciDataSafeSensitiveDataModelConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sensitive_data_model_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}.

---

### DataOciDataSafeSensitiveDataModelTablesForDiscovery <a name="DataOciDataSafeSensitiveDataModelTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelTablesForDiscoveryList <a name="DataOciDataSafeSensitiveDataModelTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference <a name="DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_model

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNames">table_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery">DataOciDataSafeSensitiveDataModelTablesForDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_names`<sup>Required</sup> <a name="table_names" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNames"></a>

```python
table_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSensitiveDataModelTablesForDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery">DataOciDataSafeSensitiveDataModelTablesForDiscovery</a>

---


