# `dataOciFunctionsFunctions` Submodule <a name="`dataOciFunctionsFunctions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsFunctions <a name="DataOciFunctionsFunctions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions oci_functions_functions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFunctionsFunctionsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#application_id DataOciFunctionsFunctions#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#display_name DataOciFunctionsFunctions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#id DataOciFunctionsFunctions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#state DataOciFunctionsFunctions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#application_id DataOciFunctionsFunctions#application_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#display_name DataOciFunctionsFunctions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#filter DataOciFunctionsFunctions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#id DataOciFunctionsFunctions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#state DataOciFunctionsFunctions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFunctionsFunctionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFunctionsFunctions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFunctionsFunctions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFunctionsFunctions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFunctionsFunctions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsFunctions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList">DataOciFunctionsFunctionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.functions">functions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList">DataOciFunctionsFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.filter"></a>

```python
filter: DataOciFunctionsFunctionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList">DataOciFunctionsFunctionsFilterList</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.functions"></a>

```python
functions: DataOciFunctionsFunctionsFunctionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList">DataOciFunctionsFunctionsFunctionsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFunctionsFunctionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsFunctionsConfig <a name="DataOciFunctionsFunctionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFunctionsFunctionsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#application_id DataOciFunctionsFunctions#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#display_name DataOciFunctionsFunctions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#id DataOciFunctionsFunctions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#state DataOciFunctionsFunctions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#application_id DataOciFunctionsFunctions#application_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#display_name DataOciFunctionsFunctions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFunctionsFunctionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#filter DataOciFunctionsFunctions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#id DataOciFunctionsFunctions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#state DataOciFunctionsFunctions#state}.

---

### DataOciFunctionsFunctionsFilter <a name="DataOciFunctionsFunctionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#name DataOciFunctionsFunctions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#values DataOciFunctionsFunctions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#regex DataOciFunctionsFunctions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#name DataOciFunctionsFunctions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#values DataOciFunctionsFunctions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_functions#regex DataOciFunctionsFunctions#regex}.

---

### DataOciFunctionsFunctionsFunctions <a name="DataOciFunctionsFunctionsFunctions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctions()
```


### DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig <a name="DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig()
```


### DataOciFunctionsFunctionsFunctionsSourceDetails <a name="DataOciFunctionsFunctionsFunctionsSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetails()
```


### DataOciFunctionsFunctionsFunctionsTraceConfig <a name="DataOciFunctionsFunctionsFunctionsTraceConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsFunctionsFilterList <a name="DataOciFunctionsFunctionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsFunctionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFunctionsFunctionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]]

---


### DataOciFunctionsFunctionsFilterOutputReference <a name="DataOciFunctionsFunctionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFunctionsFunctionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFilter">DataOciFunctionsFunctionsFilter</a>]

---


### DataOciFunctionsFunctionsFunctionsList <a name="DataOciFunctionsFunctionsFunctionsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsFunctionsFunctionsOutputReference <a name="DataOciFunctionsFunctionsFunctionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.config">config</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.invokeEndpoint">invoke_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList">DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList">DataOciFunctionsFunctionsFunctionsSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.traceConfig">trace_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList">DataOciFunctionsFunctionsFunctionsTraceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctions">DataOciFunctionsFunctionsFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.config"></a>

```python
config: StringMap
```

- *Type:* cdktf.StringMap

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `invoke_endpoint`<sup>Required</sup> <a name="invoke_endpoint" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.invokeEndpoint"></a>

```python
invoke_endpoint: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `provisioned_concurrency_config`<sup>Required</sup> <a name="provisioned_concurrency_config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.provisionedConcurrencyConfig"></a>

```python
provisioned_concurrency_config: DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList">DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.sourceDetails"></a>

```python
source_details: DataOciFunctionsFunctionsFunctionsSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList">DataOciFunctionsFunctionsFunctionsSourceDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `trace_config`<sup>Required</sup> <a name="trace_config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.traceConfig"></a>

```python
trace_config: DataOciFunctionsFunctionsFunctionsTraceConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList">DataOciFunctionsFunctionsFunctionsTraceConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsFunctionsFunctions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctions">DataOciFunctionsFunctionsFunctions</a>

---


### DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList <a name="DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference <a name="DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig">DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig">DataOciFunctionsFunctionsFunctionsProvisionedConcurrencyConfig</a>

---


### DataOciFunctionsFunctionsFunctionsSourceDetailsList <a name="DataOciFunctionsFunctionsFunctionsSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference <a name="DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.pbfListingId">pbf_listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetails">DataOciFunctionsFunctionsFunctionsSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pbf_listing_id`<sup>Required</sup> <a name="pbf_listing_id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.pbfListingId"></a>

```python
pbf_listing_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsFunctionsFunctionsSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsSourceDetails">DataOciFunctionsFunctionsFunctionsSourceDetails</a>

---


### DataOciFunctionsFunctionsFunctionsTraceConfigList <a name="DataOciFunctionsFunctionsFunctionsTraceConfigList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference <a name="DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_functions_functions

dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfig">DataOciFunctionsFunctionsFunctionsTraceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFunctionsFunctionsFunctionsTraceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsFunctions.DataOciFunctionsFunctionsFunctionsTraceConfig">DataOciFunctionsFunctionsFunctionsTraceConfig</a>

---



