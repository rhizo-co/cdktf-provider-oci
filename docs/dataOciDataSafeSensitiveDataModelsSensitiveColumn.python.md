# `dataOciDataSafeSensitiveDataModelsSensitiveColumn` Submodule <a name="`dataOciDataSafeSensitiveDataModelsSensitiveColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumn <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_column

dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sensitive_column_key: str,
  sensitive_data_model_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveColumnKey">sensitive_column_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_column_key`<sup>Required</sup> <a name="sensitive_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveColumnKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}.

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_column

dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_column

dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_column

dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_column

dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups">column_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount">estimated_data_value_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.relationType">relation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues">sample_data_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKeyInput">sensitive_column_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKey">sensitive_column_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `column_groups`<sup>Required</sup> <a name="column_groups" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups"></a>

```python
column_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `estimated_data_value_count`<sup>Required</sup> <a name="estimated_data_value_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount"></a>

```python
estimated_data_value_count: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_keys`<sup>Required</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys"></a>

```python
parent_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

---

##### `sample_data_values`<sup>Required</sup> <a name="sample_data_values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues"></a>

```python
sample_data_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `sensitive_column_key_input`<sup>Optional</sup> <a name="sensitive_column_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKeyInput"></a>

```python
sensitive_column_key_input: str
```

- *Type:* str

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `sensitive_column_key`<sup>Required</sup> <a name="sensitive_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKey"></a>

```python
sensitive_column_key: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sensitive_data_models_sensitive_column

dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sensitive_column_key: str,
  sensitive_data_model_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveColumnKey">sensitive_column_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_column_key`<sup>Required</sup> <a name="sensitive_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveColumnKey"></a>

```python
sensitive_column_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}.

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---



