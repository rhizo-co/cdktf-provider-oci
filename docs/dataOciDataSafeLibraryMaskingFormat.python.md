# `dataOciDataSafeLibraryMaskingFormat` Submodule <a name="`dataOciDataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormat <a name="DataOciDataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  library_masking_format_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.libraryMaskingFormatId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormat to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries">format_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds">sensitive_type_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput">library_masking_format_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries"></a>

```python
format_entries: DataOciDataSafeLibraryMaskingFormatFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sensitive_type_ids`<sup>Required</sup> <a name="sensitive_type_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```python
sensitive_type_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `library_masking_format_id_input`<sup>Optional</sup> <a name="library_masking_format_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput"></a>

```python
library_masking_format_id_input: str
```

- *Type:* str

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatConfig <a name="DataOciDataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  library_masking_format_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}.

---

### DataOciDataSafeLibraryMaskingFormatFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_library_masking_format

dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">fixed_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">regular_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">replace_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_length`<sup>Required</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value`<sup>Required</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number`<sup>Required</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string`<sup>Required</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

---

##### `grouping_columns`<sup>Required</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `post_processing_function`<sup>Required</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

---

##### `random_list`<sup>Required</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `start_length`<sup>Required</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position`<sup>Required</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value`<sup>Required</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_function`<sup>Required</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeLibraryMaskingFormatFormatEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a>

---



