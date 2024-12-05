# `dataOciAiLanguageModelEvaluationResults` Submodule <a name="`dataOciAiLanguageModelEvaluationResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiLanguageModelEvaluationResultsA <a name="DataOciAiLanguageModelEvaluationResultsA" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results oci_ai_language_model_evaluation_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  model_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelEvaluationResultsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#model_id DataOciAiLanguageModelEvaluationResultsA#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#id DataOciAiLanguageModelEvaluationResultsA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#model_id DataOciAiLanguageModelEvaluationResultsA#model_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#filter DataOciAiLanguageModelEvaluationResultsA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#id DataOciAiLanguageModelEvaluationResultsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelEvaluationResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAiLanguageModelEvaluationResultsA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAiLanguageModelEvaluationResultsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAiLanguageModelEvaluationResultsA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAiLanguageModelEvaluationResultsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiLanguageModelEvaluationResultsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.evaluationResultCollection">evaluation_result_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList">DataOciAiLanguageModelEvaluationResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `evaluation_result_collection`<sup>Required</sup> <a name="evaluation_result_collection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.evaluationResultCollection"></a>

```python
evaluation_result_collection: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filter"></a>

```python
filter: DataOciAiLanguageModelEvaluationResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList">DataOciAiLanguageModelEvaluationResultsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelEvaluationResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiLanguageModelEvaluationResultsAConfig <a name="DataOciAiLanguageModelEvaluationResultsAConfig" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  model_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelEvaluationResultsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#model_id DataOciAiLanguageModelEvaluationResultsA#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#id DataOciAiLanguageModelEvaluationResultsA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#model_id DataOciAiLanguageModelEvaluationResultsA#model_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelEvaluationResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#filter DataOciAiLanguageModelEvaluationResultsA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#id DataOciAiLanguageModelEvaluationResultsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection()
```


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems()
```


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities()
```


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities()
```


### DataOciAiLanguageModelEvaluationResultsFilter <a name="DataOciAiLanguageModelEvaluationResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#name DataOciAiLanguageModelEvaluationResultsA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#values DataOciAiLanguageModelEvaluationResultsA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#regex DataOciAiLanguageModelEvaluationResultsA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#name DataOciAiLanguageModelEvaluationResultsA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#values DataOciAiLanguageModelEvaluationResultsA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#regex DataOciAiLanguageModelEvaluationResultsA#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedEntities">predicted_entities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedLabels">predicted_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.record">record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueEntities">true_entities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueLabels">true_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `predicted_entities`<sup>Required</sup> <a name="predicted_entities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedEntities"></a>

```python
predicted_entities: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList</a>

---

##### `predicted_labels`<sup>Required</sup> <a name="predicted_labels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedLabels"></a>

```python
predicted_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `record`<sup>Required</sup> <a name="record" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.record"></a>

```python
record: str
```

- *Type:* str

---

##### `true_entities`<sup>Required</sup> <a name="true_entities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueEntities"></a>

```python
true_entities: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList</a>

---

##### `true_labels`<sup>Required</sup> <a name="true_labels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueLabels"></a>

```python
true_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems</a>

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities</a>

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities</a>

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.items"></a>

```python
items: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection</a>

---


### DataOciAiLanguageModelEvaluationResultsFilterList <a name="DataOciAiLanguageModelEvaluationResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelEvaluationResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelEvaluationResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]]

---


### DataOciAiLanguageModelEvaluationResultsFilterOutputReference <a name="DataOciAiLanguageModelEvaluationResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_model_evaluation_results

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAiLanguageModelEvaluationResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>]

---



