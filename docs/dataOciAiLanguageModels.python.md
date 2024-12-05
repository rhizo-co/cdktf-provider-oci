# `dataOciAiLanguageModels` Submodule <a name="`dataOciAiLanguageModels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiLanguageModels <a name="DataOciAiLanguageModels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models oci_ai_language_models}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModels(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#compartment_id DataOciAiLanguageModels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#display_name DataOciAiLanguageModels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#id DataOciAiLanguageModels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#project_id DataOciAiLanguageModels#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#state DataOciAiLanguageModels#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#compartment_id DataOciAiLanguageModels#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#display_name DataOciAiLanguageModels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#filter DataOciAiLanguageModels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#id DataOciAiLanguageModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#project_id DataOciAiLanguageModels#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#state DataOciAiLanguageModels#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAiLanguageModels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAiLanguageModels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAiLanguageModels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAiLanguageModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiLanguageModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList">DataOciAiLanguageModelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.modelCollection">model_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList">DataOciAiLanguageModelsModelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.filter"></a>

```python
filter: DataOciAiLanguageModelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList">DataOciAiLanguageModelsFilterList</a>

---

##### `model_collection`<sup>Required</sup> <a name="model_collection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.modelCollection"></a>

```python
model_collection: DataOciAiLanguageModelsModelCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList">DataOciAiLanguageModelsModelCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiLanguageModelsConfig <a name="DataOciAiLanguageModelsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#compartment_id DataOciAiLanguageModels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#display_name DataOciAiLanguageModels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#id DataOciAiLanguageModels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#project_id DataOciAiLanguageModels#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#state DataOciAiLanguageModels#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#compartment_id DataOciAiLanguageModels#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#display_name DataOciAiLanguageModels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#filter DataOciAiLanguageModels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#id DataOciAiLanguageModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#project_id DataOciAiLanguageModels#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#state DataOciAiLanguageModels#state}.

---

### DataOciAiLanguageModelsFilter <a name="DataOciAiLanguageModelsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#name DataOciAiLanguageModels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#values DataOciAiLanguageModels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#regex DataOciAiLanguageModels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#name DataOciAiLanguageModels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#values DataOciAiLanguageModels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_models#regex DataOciAiLanguageModels#regex}.

---

### DataOciAiLanguageModelsModelCollection <a name="DataOciAiLanguageModelsModelCollection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollection()
```


### DataOciAiLanguageModelsModelCollectionItems <a name="DataOciAiLanguageModelsModelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItems()
```


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResults <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResults" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResults()
```


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics()
```


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics()
```


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics()
```


### DataOciAiLanguageModelsModelCollectionItemsModelDetails <a name="DataOciAiLanguageModelsModelCollectionItemsModelDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetails()
```


### DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode <a name="DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode()
```


### DataOciAiLanguageModelsModelCollectionItemsTestStrategy <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategy" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategy()
```


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset()
```


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails()
```


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset()
```


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails()
```


### DataOciAiLanguageModelsModelCollectionItemsTrainingDataset <a name="DataOciAiLanguageModelsModelCollectionItemsTrainingDataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDataset()
```


### DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails <a name="DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiLanguageModelsFilterList <a name="DataOciAiLanguageModelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAiLanguageModelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]]

---


### DataOciAiLanguageModelsFilterOutputReference <a name="DataOciAiLanguageModelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAiLanguageModelsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsFilter">DataOciAiLanguageModelsFilter</a>]

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.f1">f1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.precision">precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.support">support</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `f1`<sup>Required</sup> <a name="f1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.f1"></a>

```python
f1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.precision"></a>

```python
precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `support`<sup>Required</sup> <a name="support" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.support"></a>

```python
support: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetrics</a>

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.f1">f1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.precision">precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `f1`<sup>Required</sup> <a name="f1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.f1"></a>

```python
f1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.precision"></a>

```python
precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetrics</a>

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.accuracy">accuracy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.macroF1">macro_f1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.macroPrecision">macro_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.macroRecall">macro_recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.microF1">micro_f1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.microPrecision">micro_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.microRecall">micro_recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.weightedF1">weighted_f1</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.weightedPrecision">weighted_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.weightedRecall">weighted_recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.accuracy"></a>

```python
accuracy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `macro_f1`<sup>Required</sup> <a name="macro_f1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.macroF1"></a>

```python
macro_f1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `macro_precision`<sup>Required</sup> <a name="macro_precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.macroPrecision"></a>

```python
macro_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `macro_recall`<sup>Required</sup> <a name="macro_recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.macroRecall"></a>

```python
macro_recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `micro_f1`<sup>Required</sup> <a name="micro_f1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.microF1"></a>

```python
micro_f1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `micro_precision`<sup>Required</sup> <a name="micro_precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.microPrecision"></a>

```python
micro_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `micro_recall`<sup>Required</sup> <a name="micro_recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.microRecall"></a>

```python
micro_recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weighted_f1`<sup>Required</sup> <a name="weighted_f1" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.weightedF1"></a>

```python
weighted_f1: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weighted_precision`<sup>Required</sup> <a name="weighted_precision" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.weightedPrecision"></a>

```python
weighted_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weighted_recall`<sup>Required</sup> <a name="weighted_recall" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.weightedRecall"></a>

```python
weighted_recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetrics</a>

---


### DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.classMetrics">class_metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.confusionMatrix">confusion_matrix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.entityMetrics">entity_metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResults">DataOciAiLanguageModelsModelCollectionItemsEvaluationResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `class_metrics`<sup>Required</sup> <a name="class_metrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.classMetrics"></a>

```python
class_metrics: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsClassMetricsList</a>

---

##### `confusion_matrix`<sup>Required</sup> <a name="confusion_matrix" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.confusionMatrix"></a>

```python
confusion_matrix: str
```

- *Type:* str

---

##### `entity_metrics`<sup>Required</sup> <a name="entity_metrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.entityMetrics"></a>

```python
entity_metrics: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsEntityMetricsList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.metrics"></a>

```python
metrics: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsMetricsList</a>

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsEvaluationResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResults">DataOciAiLanguageModelsModelCollectionItemsEvaluationResults</a>

---


### DataOciAiLanguageModelsModelCollectionItemsList <a name="DataOciAiLanguageModelsModelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList <a name="DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.classificationMode">classification_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode">DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_mode`<sup>Required</sup> <a name="classification_mode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.classificationMode"></a>

```python
classification_mode: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode">DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationMode</a>

---


### DataOciAiLanguageModelsModelCollectionItemsModelDetailsList <a name="DataOciAiLanguageModelsModelCollectionItemsModelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.classificationMode">classification_mode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList">DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetails">DataOciAiLanguageModelsModelCollectionItemsModelDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_mode`<sup>Required</sup> <a name="classification_mode" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.classificationMode"></a>

```python
classification_mode: DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList">DataOciAiLanguageModelsModelCollectionItemsModelDetailsClassificationModeList</a>

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsModelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetails">DataOciAiLanguageModelsModelCollectionItemsModelDetails</a>

---


### DataOciAiLanguageModelsModelCollectionItemsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.evaluationResults">evaluation_results</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.modelDetails">model_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList">DataOciAiLanguageModelsModelCollectionItemsModelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.testStrategy">test_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList">DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItems">DataOciAiLanguageModelsModelCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `evaluation_results`<sup>Required</sup> <a name="evaluation_results" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.evaluationResults"></a>

```python
evaluation_results: DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList">DataOciAiLanguageModelsModelCollectionItemsEvaluationResultsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `model_details`<sup>Required</sup> <a name="model_details" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.modelDetails"></a>

```python
model_details: DataOciAiLanguageModelsModelCollectionItemsModelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsModelDetailsList">DataOciAiLanguageModelsModelCollectionItemsModelDetailsList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `test_strategy`<sup>Required</sup> <a name="test_strategy" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.testStrategy"></a>

```python
test_strategy: DataOciAiLanguageModelsModelCollectionItemsTestStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.trainingDataset"></a>

```python
training_dataset: DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList">DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItems">DataOciAiLanguageModelsModelCollectionItems</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyList <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.strategyType">strategy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategy">DataOciAiLanguageModelsModelCollectionItemsTestStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

---

##### `testing_dataset`<sup>Required</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.testingDataset"></a>

```python
testing_dataset: DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList</a>

---

##### `validation_dataset`<sup>Required</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.validationDataset"></a>

```python
validation_dataset: DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTestStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategy">DataOciAiLanguageModelsModelCollectionItemsTestStrategy</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames">object_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_names`<sup>Required</sup> <a name="object_names" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```python
object_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetails</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.locationDetails">location_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `location_details`<sup>Required</sup> <a name="location_details" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.locationDetails"></a>

```python
location_details: DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetLocationDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset">DataOciAiLanguageModelsModelCollectionItemsTestStrategyTestingDataset</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames">object_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_names`<sup>Required</sup> <a name="object_names" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames"></a>

```python
object_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetails</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.locationDetails">location_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `location_details`<sup>Required</sup> <a name="location_details" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.locationDetails"></a>

```python
location_details: DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetLocationDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDatasetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset">DataOciAiLanguageModelsModelCollectionItemsTestStrategyValidationDataset</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList <a name="DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList <a name="DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.objectNames">object_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails">DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_names`<sup>Required</sup> <a name="object_names" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```python
object_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails">DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetails</a>

---


### DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference <a name="DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.locationDetails">location_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList">DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDataset">DataOciAiLanguageModelsModelCollectionItemsTrainingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `location_details`<sup>Required</sup> <a name="location_details" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.locationDetails"></a>

```python
location_details: DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList">DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetLocationDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollectionItemsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsTrainingDataset">DataOciAiLanguageModelsModelCollectionItemsTrainingDataset</a>

---


### DataOciAiLanguageModelsModelCollectionList <a name="DataOciAiLanguageModelsModelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiLanguageModelsModelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiLanguageModelsModelCollectionOutputReference <a name="DataOciAiLanguageModelsModelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_language_models

dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList">DataOciAiLanguageModelsModelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollection">DataOciAiLanguageModelsModelCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.items"></a>

```python
items: DataOciAiLanguageModelsModelCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionItemsList">DataOciAiLanguageModelsModelCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiLanguageModelsModelCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModels.DataOciAiLanguageModelsModelCollection">DataOciAiLanguageModelsModelCollection</a>

---



