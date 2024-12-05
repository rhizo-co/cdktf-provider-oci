# `dataOciDataSafeCompatibleFormatsForDataType` Submodule <a name="`dataOciDataSafeCompatibleFormatsForDataType` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeCompatibleFormatsForDataType <a name="DataOciDataSafeCompatibleFormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type oci_data_safe_compatible_formats_for_data_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForDataType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForDataType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeCompatibleFormatsForDataType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeCompatibleFormatsForDataType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeCompatibleFormatsForDataType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.formatsForDataType">formats_for_data_type</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `formats_for_data_type`<sup>Required</sup> <a name="formats_for_data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.formatsForDataType"></a>

```python
formats_for_data_type: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeCompatibleFormatsForDataTypeConfig <a name="DataOciDataSafeCompatibleFormatsForDataTypeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType()
```


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats</a>

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_data_type

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.maskingFormats">masking_formats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `masking_formats`<sup>Required</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.maskingFormats"></a>

```python
masking_formats: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType</a>

---



