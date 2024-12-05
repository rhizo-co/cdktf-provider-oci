# `dataOciDataSafeMaskingPoliciesMaskingColumn` Submodule <a name="`dataOciDataSafeMaskingPoliciesMaskingColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumn <a name="DataOciDataSafeMaskingPoliciesMaskingColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_column_key: str,
  masking_policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingColumnKey">masking_column_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_column_key DataOciDataSafeMaskingPoliciesMaskingColumn#masking_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_column_key`<sup>Required</sup> <a name="masking_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingColumnKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_column_key DataOciDataSafeMaskingPoliciesMaskingColumn#masking_column_key}.

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeMaskingPoliciesMaskingColumn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeMaskingPoliciesMaskingColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPoliciesMaskingColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.childColumns">child_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled">is_masking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingFormats">masking_formats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingColumnKeyInput">masking_column_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingColumnKey">masking_column_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `child_columns`<sup>Required</sup> <a name="child_columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.childColumns"></a>

```python
child_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_masking_enabled`<sup>Required</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled"></a>

```python
is_masking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup"></a>

```python
masking_column_group: str
```

- *Type:* str

---

##### `masking_formats`<sup>Required</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingFormats"></a>

```python
masking_formats: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a>

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `masking_column_key_input`<sup>Optional</sup> <a name="masking_column_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingColumnKeyInput"></a>

```python
masking_column_key_input: str
```

- *Type:* str

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `masking_column_key`<sup>Required</sup> <a name="masking_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingColumnKey"></a>

```python
masking_column_key: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumnConfig <a name="DataOciDataSafeMaskingPoliciesMaskingColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_column_key: str,
  masking_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnKey">masking_column_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_column_key DataOciDataSafeMaskingPoliciesMaskingColumn#masking_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_column_key`<sup>Required</sup> <a name="masking_column_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnKey"></a>

```python
masking_column_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_column_key DataOciDataSafeMaskingPoliciesMaskingColumn#masking_column_key}.

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_column#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

### DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats <a name="DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats()
```


### DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries <a name="DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString">fixed_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression">regular_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith">replace_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_length`<sup>Required</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value`<sup>Required</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number`<sup>Required</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string`<sup>Required</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

---

##### `grouping_columns`<sup>Required</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `post_processing_function`<sup>Required</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

---

##### `random_list`<sup>Required</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `start_length`<sup>Required</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position`<sup>Required</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value`<sup>Required</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_function`<sup>Required</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_column

dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries">format_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries"></a>

```python
format_entries: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumn.DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataOciDataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>

---



