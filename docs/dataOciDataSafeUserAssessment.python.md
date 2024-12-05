# `dataOciDataSafeUserAssessment` Submodule <a name="`dataOciDataSafeUserAssessment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessment <a name="DataOciDataSafeUserAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment oci_data_safe_user_assessment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_assessment_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment#user_assessment_id DataOciDataSafeUserAssessment#user_assessment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.Initializer.parameter.userAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment#user_assessment_id DataOciDataSafeUserAssessment#user_assessment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeUserAssessment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeUserAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.ignoredAssessmentIds">ignored_assessment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.ignoredTargets">ignored_targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList">DataOciDataSafeUserAssessmentIgnoredTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.isAssessmentScheduled">is_assessment_scheduled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.isBaseline">is_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.isDeviatedFromBaseline">is_deviated_from_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.lastComparedBaselineId">last_compared_baseline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.scheduleAssessmentId">schedule_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.statistics">statistics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.timeLastAssessed">time_last_assessed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.triggeredBy">triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.userAssessmentIdInput">user_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignored_assessment_ids`<sup>Required</sup> <a name="ignored_assessment_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.ignoredAssessmentIds"></a>

```python
ignored_assessment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_targets`<sup>Required</sup> <a name="ignored_targets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.ignoredTargets"></a>

```python
ignored_targets: DataOciDataSafeUserAssessmentIgnoredTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList">DataOciDataSafeUserAssessmentIgnoredTargetsList</a>

---

##### `is_assessment_scheduled`<sup>Required</sup> <a name="is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.isAssessmentScheduled"></a>

```python
is_assessment_scheduled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_baseline`<sup>Required</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.isBaseline"></a>

```python
is_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_deviated_from_baseline`<sup>Required</sup> <a name="is_deviated_from_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.isDeviatedFromBaseline"></a>

```python
is_deviated_from_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_compared_baseline_id`<sup>Required</sup> <a name="last_compared_baseline_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.lastComparedBaselineId"></a>

```python
last_compared_baseline_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `schedule_assessment_id`<sup>Required</sup> <a name="schedule_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.scheduleAssessmentId"></a>

```python
schedule_assessment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.statistics"></a>

```python
statistics: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_assessed`<sup>Required</sup> <a name="time_last_assessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.timeLastAssessed"></a>

```python
time_last_assessed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `triggered_by`<sup>Required</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.triggeredBy"></a>

```python
triggered_by: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_assessment_id_input`<sup>Optional</sup> <a name="user_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.userAssessmentIdInput"></a>

```python
user_assessment_id_input: str
```

- *Type:* str

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentConfig <a name="DataOciDataSafeUserAssessmentConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_assessment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment#user_assessment_id DataOciDataSafeUserAssessment#user_assessment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentConfig.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment#user_assessment_id DataOciDataSafeUserAssessment#user_assessment_id}.

---

### DataOciDataSafeUserAssessmentIgnoredTargets <a name="DataOciDataSafeUserAssessmentIgnoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentIgnoredTargetsList <a name="DataOciDataSafeUserAssessmentIgnoredTargetsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference <a name="DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_user_assessment

dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.userAssessmentId">user_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargets">DataOciDataSafeUserAssessmentIgnoredTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `user_assessment_id`<sup>Required</sup> <a name="user_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.userAssessmentId"></a>

```python
user_assessment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeUserAssessmentIgnoredTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessment.DataOciDataSafeUserAssessmentIgnoredTargets">DataOciDataSafeUserAssessmentIgnoredTargets</a>

---



