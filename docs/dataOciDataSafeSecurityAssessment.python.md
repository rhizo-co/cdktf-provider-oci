# `dataOciDataSafeSecurityAssessment` Submodule <a name="`dataOciDataSafeSecurityAssessment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessment <a name="DataOciDataSafeSecurityAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment oci_data_safe_security_assessment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.securityAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityAssessment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredAssessmentIds">ignored_assessment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredTargets">ignored_targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isAssessmentScheduled">is_assessment_scheduled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isBaseline">is_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isDeviatedFromBaseline">is_deviated_from_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lastComparedBaselineId">last_compared_baseline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.scheduleSecurityAssessmentId">schedule_security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.statistics">statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList">DataOciDataSafeSecurityAssessmentStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeLastAssessed">time_last_assessed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.triggeredBy">triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentIdInput">security_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignored_assessment_ids`<sup>Required</sup> <a name="ignored_assessment_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredAssessmentIds"></a>

```python
ignored_assessment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_targets`<sup>Required</sup> <a name="ignored_targets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredTargets"></a>

```python
ignored_targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_assessment_scheduled`<sup>Required</sup> <a name="is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isAssessmentScheduled"></a>

```python
is_assessment_scheduled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_baseline`<sup>Required</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isBaseline"></a>

```python
is_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_deviated_from_baseline`<sup>Required</sup> <a name="is_deviated_from_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isDeviatedFromBaseline"></a>

```python
is_deviated_from_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_compared_baseline_id`<sup>Required</sup> <a name="last_compared_baseline_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lastComparedBaselineId"></a>

```python
last_compared_baseline_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `schedule_security_assessment_id`<sup>Required</sup> <a name="schedule_security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.scheduleSecurityAssessmentId"></a>

```python
schedule_security_assessment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.statistics"></a>

```python
statistics: DataOciDataSafeSecurityAssessmentStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList">DataOciDataSafeSecurityAssessmentStatisticsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_assessed`<sup>Required</sup> <a name="time_last_assessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeLastAssessed"></a>

```python
time_last_assessed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `triggered_by`<sup>Required</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.triggeredBy"></a>

```python
triggered_by: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `security_assessment_id_input`<sup>Optional</sup> <a name="security_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentIdInput"></a>

```python
security_assessment_id_input: str
```

- *Type:* str

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentConfig <a name="DataOciDataSafeSecurityAssessmentConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}.

---

### DataOciDataSafeSecurityAssessmentStatistics <a name="DataOciDataSafeSecurityAssessmentStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics()
```


### DataOciDataSafeSecurityAssessmentStatisticsAdvisory <a name="DataOciDataSafeSecurityAssessmentStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory()
```


### DataOciDataSafeSecurityAssessmentStatisticsDeferred <a name="DataOciDataSafeSecurityAssessmentStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred()
```


### DataOciDataSafeSecurityAssessmentStatisticsEvaluate <a name="DataOciDataSafeSecurityAssessmentStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate()
```


### DataOciDataSafeSecurityAssessmentStatisticsHighRisk <a name="DataOciDataSafeSecurityAssessmentStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk()
```


### DataOciDataSafeSecurityAssessmentStatisticsLowRisk <a name="DataOciDataSafeSecurityAssessmentStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk()
```


### DataOciDataSafeSecurityAssessmentStatisticsMediumRisk <a name="DataOciDataSafeSecurityAssessmentStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk()
```


### DataOciDataSafeSecurityAssessmentStatisticsPass <a name="DataOciDataSafeSecurityAssessmentStatisticsPass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList <a name="DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory">DataOciDataSafeSecurityAssessmentStatisticsAdvisory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsAdvisory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory">DataOciDataSafeSecurityAssessmentStatisticsAdvisory</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsDeferredList <a name="DataOciDataSafeSecurityAssessmentStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred">DataOciDataSafeSecurityAssessmentStatisticsDeferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsDeferred
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred">DataOciDataSafeSecurityAssessmentStatisticsDeferred</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsEvaluateList <a name="DataOciDataSafeSecurityAssessmentStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate">DataOciDataSafeSecurityAssessmentStatisticsEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsEvaluate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate">DataOciDataSafeSecurityAssessmentStatisticsEvaluate</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsHighRiskList <a name="DataOciDataSafeSecurityAssessmentStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk">DataOciDataSafeSecurityAssessmentStatisticsHighRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsHighRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk">DataOciDataSafeSecurityAssessmentStatisticsHighRisk</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsList <a name="DataOciDataSafeSecurityAssessmentStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsLowRiskList <a name="DataOciDataSafeSecurityAssessmentStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk">DataOciDataSafeSecurityAssessmentStatisticsLowRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsLowRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk">DataOciDataSafeSecurityAssessmentStatisticsLowRisk</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList <a name="DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentStatisticsMediumRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsMediumRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentStatisticsMediumRisk</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.advisory">advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.deferred">deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList">DataOciDataSafeSecurityAssessmentStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk">high_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk">low_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk">medium_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.pass">pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList">DataOciDataSafeSecurityAssessmentStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics">DataOciDataSafeSecurityAssessmentStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advisory`<sup>Required</sup> <a name="advisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.advisory"></a>

```python
advisory: DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList</a>

---

##### `deferred`<sup>Required</sup> <a name="deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.deferred"></a>

```python
deferred: DataOciDataSafeSecurityAssessmentStatisticsDeferredList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList">DataOciDataSafeSecurityAssessmentStatisticsDeferredList</a>

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate"></a>

```python
evaluate: DataOciDataSafeSecurityAssessmentStatisticsEvaluateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentStatisticsEvaluateList</a>

---

##### `high_risk`<sup>Required</sup> <a name="high_risk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk"></a>

```python
high_risk: DataOciDataSafeSecurityAssessmentStatisticsHighRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentStatisticsHighRiskList</a>

---

##### `low_risk`<sup>Required</sup> <a name="low_risk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk"></a>

```python
low_risk: DataOciDataSafeSecurityAssessmentStatisticsLowRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentStatisticsLowRiskList</a>

---

##### `medium_risk`<sup>Required</sup> <a name="medium_risk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk"></a>

```python
medium_risk: DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList</a>

---

##### `pass`<sup>Required</sup> <a name="pass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.pass"></a>

```python
pass: DataOciDataSafeSecurityAssessmentStatisticsPassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList">DataOciDataSafeSecurityAssessmentStatisticsPassList</a>

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics">DataOciDataSafeSecurityAssessmentStatistics</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsPassList <a name="DataOciDataSafeSecurityAssessmentStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass">DataOciDataSafeSecurityAssessmentStatisticsPass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentStatisticsPass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass">DataOciDataSafeSecurityAssessmentStatisticsPass</a>

---



